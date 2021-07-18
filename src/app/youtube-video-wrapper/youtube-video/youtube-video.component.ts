import { Component, Input, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { interval, Subscription } from 'rxjs';
import { LoopSettings, VideoSettings } from '../youtube-video-wrapper';

@Component({
  templateUrl: './youtube-video.component.html',
  selector: 'app-youtube-video'
})
export class YoutubeVideoComponent implements OnInit, OnDestroy {
  /**
   * The YouTube video.
   */
  @ViewChild("player", { static: true }) private _youtubePlayer: YouTubePlayer;

  /**
   * Subscription to the YouTube video's state change event.
   */
  private _stateChangeSubscription: Subscription;

  /**
   * Subscription to the YouTube video's playback rate changed event.
   */
  private _playbackRateSubscription: Subscription;

  /**
   * Subscription to the poll ran when looping.
   */
  private _loopPoll: Subscription;

  /**
   * Flag for when the user is waiting for a loop.
   */
  private _waitingForLoop: boolean = false;

  /**
   * Interval for beep audio on the second when waiting.
   */
  private _beepInterval: any;

  /**
   * The sound played when _beepInterval is counting seconds.
   */
  private readonly _beepAudio: HTMLAudioElement = new Audio("assets/beep.wav");

  /**
   * Private backing for videoSettings.
   */
  private _videoSettings: VideoSettings;

  /**
   * Video settings to be piped through to the youtube video container.
   */
  @Input()
  get videoSettings(): VideoSettings {
    return this._videoSettings;
  }
  set videoSettings(videoSettings: VideoSettings) {
    this._videoSettings = videoSettings;
    this._onSettingsChange();
  }

  /**
   * Private backing for loopSettings.
   */
  private _loopSettings: LoopSettings;

  /**
   * Getter/Setter for loop settings input
   */
  @Input()
  get loopSettings(): LoopSettings {
    return this._loopSettings;
  }
  set loopSettings(loopSettings: LoopSettings) {
    this._loopSettings = loopSettings;
  }

  /**
   * EventEmitter used when video settings are changed.
   */
  @Output() onVideoSettingsChanged = new EventEmitter<VideoSettings>()

  /**
   * EventEmitter used when loop settings are changed.
   */
  @Output() onLoopSettingsChanged = new EventEmitter<LoopSettings>();

  /**
   * Initialization code.
   */
  ngOnInit() {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    this._beepAudio.volume = .8;

    this._stateChangeSubscription = this._youtubePlayer.stateChange.subscribe(
      (value) => {
        if (value.data == YT.PlayerState.PLAYING) {
          this.videoSettings.isPlaying = true;
          this.videoSettings.hasStarted = true;
        }
        else if (value.data == YT.PlayerState.PAUSED) {
          this.videoSettings.isPlaying = false;
          this.videoSettings.hasStarted = true;
        }
        else if (value.data == YT.PlayerState.UNSTARTED) {
          this.videoSettings.hasStarted = false;
          this.loopSettings.isLooping = false;
          this.onLoopSettingsChanged.emit(this.loopSettings);
        }

        this.videoSettings.videoLength = this._youtubePlayer.getDuration();
        this.onVideoSettingsChanged.emit(this.videoSettings);
      }
    );

    this._playbackRateSubscription = this._youtubePlayer.playbackRateChange.subscribe(
      (value) => {
        if (value.data != this._videoSettings.playbackSpeed) {
          this.videoSettings.playbackSpeed = value.data;
          this.onVideoSettingsChanged.emit(this.videoSettings);
        }
      }
    )

    this._loopPoll = interval(30)
      .subscribe(() => {
        if (!this._waitingForLoop && this.loopSettings.isLooping && this.getCurrentTime() >= this.loopSettings.endTime) {
          this._loopVideo();
        }
      });
  }

  /**
   * Cleanup code.
   */
  ngOnDestroy(): void {
    this._stateChangeSubscription.unsubscribe();
    this._playbackRateSubscription.unsubscribe();
    this._loopPoll.unsubscribe();
  }

  /**
   * Gets the current timestamp of the video in seconds.
   * @returns The current timestamp of the video in seconds.
   */
  getCurrentTime(): number {
    return this._youtubePlayer.getCurrentTime();
  }

  /**
   * Plays video after it was paused during looping.
   */
  private _loopVideo(): void {
    this._youtubePlayer.pauseVideo();
    this._youtubePlayer.seekTo(this._loopSettings.startTime, true);
    this._waitingForLoop = true;

    setTimeout(() => {
      clearInterval(this._beepInterval);
      this._youtubePlayer.playVideo();
      this._waitingForLoop = false;
    }, this._loopSettings.loopDelay * 1000);

    this._beepAudio.play();
    this._beepInterval = setInterval(() => {
      this._beepAudio.play();
    }, 1000);
  }

  /**
   * Update the youtube video based on incoming changes.
   */
  private _onSettingsChange(): void {
    if (this.videoSettings.isPlaying) {
      if (this._youtubePlayer.getPlayerState() != YT.PlayerState.PLAYING) {
        this._youtubePlayer.playVideo();
      }
    }
    else {
      if (this._youtubePlayer.getPlayerState() == YT.PlayerState.PLAYING) {
        this._youtubePlayer.pauseVideo();
      }
    }

    if (this._youtubePlayer.getPlaybackRate() != this.videoSettings.playbackSpeed) {
      this._youtubePlayer.setPlaybackRate(this.videoSettings.playbackSpeed);
    }

    if (this._youtubePlayer.videoId != this._videoSettings.videoId) {
      this._youtubePlayer.videoId = this._videoSettings.videoId;
    }
  }
}
