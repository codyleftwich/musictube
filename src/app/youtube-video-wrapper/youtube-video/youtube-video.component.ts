import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { VideoSettings } from '../youtube-video-wrapper';

@Component({
  templateUrl: './youtube-video.component.html',
  selector: 'app-youtube-video'
})
export class YoutubeVideoComponent implements OnInit {
  @ViewChild("player", { static: true }) private _youtubePlayer: YouTubePlayer;

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
   * Initialization code.
   */
  ngOnInit() {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    this._youtubePlayer.stateChange.subscribe(
      (value) => {
        if (value.data == YT.PlayerState.PLAYING) {
          this.videoSettings.isPlaying = true;
        }
        else if (value.data == YT.PlayerState.PAUSED) {
          this.videoSettings.isPlaying = false;
        }
      }
    );

    this._youtubePlayer.playbackRateChange.subscribe(
      (value) => {
        if (value.data != this._videoSettings.playbackSpeed) {
          this.videoSettings.playbackSpeed = value.data;
        }
      }
    )
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
