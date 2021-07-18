import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { YoutubeLoopControlsComponent } from './youtube-loop-controls/youtube-loop-controls.component';
import { LoopSettings, VideoSettings } from './youtube-video-wrapper';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';

@Component({
  selector: 'app-youtube-video-wrapper',
  templateUrl: './youtube-video-wrapper.component.html',
  styleUrls: ['./youtube-video-wrapper.component.css']
})
export class YoutubeVideoWrapperComponent implements OnInit {
  /**
   * Object for the YoutubeVideoComponent.
   */
  @ViewChild("video", { static: true }) private _video: YoutubeVideoComponent;

  /**
   * Object for the YoutubeLoopControlsComponent.
   */
  @ViewChild("loopController", { static: true }) private _loopControl: YoutubeLoopControlsComponent;

  /**
   * The default video to be shown when the page is loaded.
   */
  private readonly _defaultVideoId: string = 'HyHNuVaZJ-k';

  /**
   * Video settings to be passed between the video and the video controller component.
   */
  videoSettings: VideoSettings;

  /**
   * Loop settings to pass between the video and the loop controller component.
   */
  loopSettings: LoopSettings;

  /**
   * Intialization code.
   */
  ngOnInit(): void {
    this.videoSettings = {
      videoId: this._defaultVideoId,
      playbackSpeed: 1.0,
      isPlaying: false,
      hasStarted: false,
      videoLength: 0
    };

    this.loopSettings = {
      startTime: 0,
      endTime: 0,
      loopDelay: 0,
      isLooping: false
    };
  }

  /**
   * Event handler for when video settings are changed by the video controller.
   * @param videoSettings The updated video settings.
   */
  onVideoSettingsChanged(videoSettings: VideoSettings) {
    if (!this.videoSettings.hasStarted) {
      this.loopSettings.isLooping = false;
      this._setLoopSettings(this.loopSettings);
    }

    this._setVideoSettings(videoSettings);
  }

  /**
   * Event handler for when loop settings are changed by the loop controller.
   * @param loopSettings The updated loop settings.
   */
  onLoopSettingsChanged(loopSettings: LoopSettings) {
    this._setLoopSettings(loopSettings);
  }

  /**
   * Event handler for getting the current time from the video to set as the start time for the loop
   */
  onCaptureStartTime() {
    this.loopSettings.startTime = this._video.getCurrentTime();
    this._setLoopSettings(this.loopSettings);
  }

  /**
   * Event handler for getting the current time from the video to set as the end time for the loop
   */
  onCaptureEndTime() {
    this.loopSettings.endTime = this._video.getCurrentTime();
    this._setLoopSettings(this.loopSettings);
  }

  /**
   * Sets the video settings across the components that share it.
   * @param videoSettings The new value for the video settings.
   */
  private _setVideoSettings(videoSettings: VideoSettings) {
    this.videoSettings = videoSettings;
    this._video.videoSettings = this.videoSettings;
    this._loopControl.videoSettings = this.videoSettings;
  }

  /**
   * Sets the loop settings across the components that share it.
   * @param loopSettings The new value for the loop settings.
   */
  private _setLoopSettings(loopSettings: LoopSettings) {
    this.loopSettings = loopSettings;
    this._video.loopSettings = this.loopSettings;
    this._loopControl.loopSettings = this.loopSettings;
  }
}
