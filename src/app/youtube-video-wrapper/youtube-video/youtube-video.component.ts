import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { interval, Subscription } from 'rxjs';
import { VideoInfo } from 'src/app/shared/video-info';
import { VideoInfoService } from 'src/app/shared/video-info.service';

/**
 * Component responsible for interaction with the YouTube video.
 */
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
  private readonly _beepAudio: HTMLAudioElement = new Audio("assets/audio/beep.wav");

  /**
   * The video information.
   */
  videoInfo: VideoInfo;

  /**
   * Constructor.
   * @param videoInfoService The {@link VideoInfoService} containing information on the video playing and the
   * {@link LoopSettings} on the current video.
   */
  constructor(public videoInfoService: VideoInfoService) {
    videoInfoService.videoInfo$.subscribe((videoInfo: VideoInfo) => {
      this.videoInfo = videoInfo;

      if (this._youtubePlayer && this._youtubePlayer.getPlaybackRate() != this.videoInfo.playbackSpeed) {
        this._youtubePlayer.setPlaybackRate(this.videoInfo.playbackSpeed);
      }
    });
  }

  /**
   * Initialization code.
   */
  ngOnInit() {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    this._beepAudio.volume = .8;

    this._stateChangeSubscription = this._youtubePlayer.stateChange.subscribe(
      (value: any) => {
        if (value.data == YT.PlayerState.PLAYING) {       // The video is playing.
          this.videoInfo.isPlaying = true;
          this.videoInfo.hasStarted = true;

          // Exit the loop when the user plays before the loop delay has finished.
          if (this._waitingForLoop) {
            this.videoInfo.loopSettings.isLooping = false;
            this._waitingForLoop = false;
            clearInterval(this._beepInterval);
          }
        }
        else if (value.data == YT.PlayerState.PAUSED) {     // The video is paused.
          this.videoInfo.isPlaying = false;
          this.videoInfo.hasStarted = true;

          // Exit the loop when the user pauses during it.
          if (this.videoInfo.loopSettings.isLooping && !this._precisionEquals(this._youtubePlayer.getCurrentTime(), this.videoInfo.loopSettings.startTime, 4)) {
            this.videoInfo.loopSettings.isLooping = false;
            this._waitingForLoop = false;
          }
        }
        else if (value.data == YT.PlayerState.UNSTARTED) {  // State when the player first loads a video
          this.videoInfo.hasStarted = false;
          this.videoInfo.loopSettings.isLooping = false;
        }

        this.videoInfo.videoTitle = value.target.getVideoData().title;
        this.videoInfo.artist = value.target.getVideoData().author;
        this.videoInfo.videoLength = this._youtubePlayer.getDuration();

        this.videoInfoService.setVideoInfo(this.videoInfo);
      }
    );

    this._playbackRateSubscription = this._youtubePlayer.playbackRateChange.subscribe(
      (value) => {
        if (value.data != this.videoInfo.playbackSpeed) {
          this.videoInfo.playbackSpeed = value.data;
          this.videoInfoService.setVideoInfo(this.videoInfo);
        }
      }
    );

    this._loopPoll = interval(1).subscribe(() => {
      if (!this._waitingForLoop && this.videoInfo.loopSettings.isLooping && this.getCurrentTime() > this.videoInfo.loopSettings.endTime) {
        this.loopVideo();
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
    let time = this._youtubePlayer.getCurrentTime();
    return time;
  }

  /**
   * Starts a loop with the settings defined in the {@link VideoInfo.loopSettings} singleton.
   */
  loopVideo(): void {
    this._youtubePlayer.seekTo(this.videoInfo.loopSettings.startTime, true);
    this._youtubePlayer.pauseVideo();
    this._waitingForLoop = true;

    if (this.videoInfo.loopSettings.loopDelay != 0) {
      this._beepAudio.play();
    }

    setTimeout(() => {
      clearInterval(this._beepInterval);

      this._youtubePlayer.playVideo();
      this._waitingForLoop = false;
    }, this.videoInfo.loopSettings.loopDelay * 1000);

    if (this.videoInfo.loopSettings.loopDelay != 0) {
      this._beepInterval = setInterval(() => {
        if (this._waitingForLoop) {
          this._beepAudio.play();
        }
      }, 1000);
    }
  }

  /**
   * Determines if two given numbers are equal to a given precision.
   *
   * @param num1 {@link number} object
   * @param num2 {@link number} object
   * @param precision The number of decimals to compare to.
   * @returns True if the given numbers are equal to the given precision.
   */
  private _precisionEquals(num1: number, num2: number, precision: number): boolean {
    return num1.toPrecision(precision) == num2.toPrecision(precision);
  }
}
