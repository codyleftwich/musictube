import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VideoSettings } from '../youtube-video-wrapper';

@Component({
  selector: 'app-youtube-video-controls',
  templateUrl: './youtube-video-controls.component.html',
  styleUrls: ['./youtube-video-controls.component.css']
})
export class YoutubeVideoControlsComponent {
  /**
   * Storage for video settings
   */
  private _videoSettings: VideoSettings;

  /**
   * Getter/Setter for video settings input
   */
  @Input()
  get videoSettings(): VideoSettings {
    return this._videoSettings;
  }
  set videoSettings(videoSettings: VideoSettings) {
    this._videoSettings = videoSettings;
  }

  /**
   * EventEmitter used when video settings are changed.
   */
  @Output() onVideoSettingsChanged = new EventEmitter<VideoSettings>();

  /**
   * Event handler for when the user clicks the "Change Video" button.
   */
  onChangeVideo(data: any) {
    this.videoSettings.videoId = data.videoId;
    this.videoSettings.playbackSpeed = 1.0; // Reset the playback speed.
    this.onVideoSettingsChanged.emit(this.videoSettings);
  }

  /**
   * Event handler for when the playback speed slider is changed.
   * @param value The value represented by the position of the slider.
   */
  onChangePlaybackSpeed(value: number) {
    this.videoSettings.playbackSpeed = value;
    this.onVideoSettingsChanged.emit(this.videoSettings);
  }

  playVideo() {
    if (!this.videoSettings.isPlaying) {
      this.videoSettings.isPlaying = true;
      this.onVideoSettingsChanged.emit(this.videoSettings);
    }
  }

  pauseVideo() {
    if (this.videoSettings.isPlaying) {
      this.videoSettings.isPlaying = false;
      this.onVideoSettingsChanged.emit(this.videoSettings);
    }
  }

  /**
   * Formats the value shown on the slider thumb.
   * @param value The value of the slider.
   * @returns The string representation of the value to be shown on the slider thumb.
   */
  formatLabel(value: number) {
    return value;
  }
}
