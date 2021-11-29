import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { VideoInfo } from '../shared/video-info';
import { VideoInfoService } from '../shared/video-info.service';
import { YoutubeLoopControlsComponent } from './youtube-loop-controls/youtube-loop-controls.component';
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
  videoInfo: VideoInfo;

  constructor(public videoInfoService: VideoInfoService) {
    videoInfoService.videoInfo$.subscribe((videoInfo: VideoInfo) => {
      this.videoInfo = videoInfo;
    });
  }

  /**
   * Intialization code.
   */
  ngOnInit(): void {
    this.videoInfo.videoId = this._defaultVideoId;
    this.videoInfoService.setVideoInfo(this.videoInfo);
  }

  /**
   * Event handler for when video settings are changed by the video controller.
   * @param videoInfo The updated video settings.
   */
  onvideoInfoChanged(videoInfo: VideoInfo) {
    if (!this.videoInfo.hasStarted) {
      this.videoInfo.loopSettings.isLooping = false;
    }

    this.videoInfoService.setVideoInfo(this.videoInfo);
  }

  /**
   * Event handler for getting the current time from the video to set as the start time for the loop
   */
  onCaptureStartTime() {
    console.log("Capturing start time");
    this.videoInfo.loopSettings.startTime = this._video.getCurrentTime();
    this.videoInfoService.setVideoInfo(this.videoInfo);
  }

  /**
   * Event handler for getting the current time from the video to set as the end time for the loop
   */
  onCaptureEndTime() {
    console.log("Capturing end time");
    this.videoInfo.loopSettings.endTime = this._video.getCurrentTime();
    this.videoInfoService.setVideoInfo(this.videoInfo);
  }
}
