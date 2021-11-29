import { Component, EventEmitter, Input, OnInit, Output, ViewChild, SimpleChanges } from '@angular/core';
import { TimeInputComponent } from 'src/app/shared/time-input/time-input.component';
import { VideoInfo } from 'src/app/shared/video-info';
import { VideoInfoService } from 'src/app/shared/video-info.service';
import { YoutubeVideoControlsComponent } from '../youtube-video-controls/youtube-video-controls.component';
import { LoopSettings, VideoSettings } from '../youtube-video-wrapper';

/**
 * Component responsible for managing and handling the loop controls.
 */
@Component({
  selector: 'app-youtube-loop-controls',
  templateUrl: './youtube-loop-controls.component.html',
  styleUrls: ['./youtube-loop-controls.component.css']
})
export class YoutubeLoopControlsComponent {
  /**
   * The input element used to manage the loop start time.
   */
  @ViewChild("startTimeInput", { static: true }) private _startTimeInput: TimeInputComponent;

  /**
   * The input element used to manage the loop end time.
   */
  @ViewChild("endTimeInput", { static: true }) private _endTimeInput: TimeInputComponent;

  /**
   * Constant string used for the loop toggle button text to signal that a loop can be started.
   */
  private static readonly START_LOOP: string = "Start Loop";

  /**
   * Constant string used for the loop toggle button text to signal that a loop can be stopped.
   */
  private static readonly STOP_LOOP: string = "Stop Loop";

  /**
   * The text displayed in the loop toggle button.
   */
  loopButtonText: string = YoutubeLoopControlsComponent.START_LOOP;

  /**
   * Flag for if the loop has been started.
   */
  private _loopStarted: boolean = false;

  /**
   * Determines whether or not a configuration is valid to loop around.
   *
   * @returns True if the loop can be started.
   */
  get isLoopValid(): boolean {
    return this.videoInfo.hasStarted
      && (this.videoInfo.loopSettings.startTime < this.videoInfo.loopSettings.endTime)
      && (this.videoInfo.loopSettings.endTime <= this.videoInfo.videoLength);
  }

  /**
   * Determines if the capture time buttons should be enabled.
   *
   * @return True if the user can interact with the loop times.
   */
  get canCaptureTime(): boolean {
    return !this.videoInfo.loopSettings.isLooping && this.videoInfo.hasStarted;
  }

  /**
   * Storage for video settings
   */
  videoInfo: VideoInfo;

  /**
   * EventEmitter used when user requests to capture start time.
   */
  @Output() captureStartTimeEvent = new EventEmitter();

  /**
  * EventEmitter used when user requests to capture end time.
  */
  @Output() captureEndTimeEvent = new EventEmitter();

  constructor(public videoInfoService: VideoInfoService) {
    videoInfoService.videoInfo$.subscribe((videoInfo: VideoInfo) => {
      this.videoInfo = videoInfo;

      console.log("YoutubeLoopControlsComponent videoInfo changed");

      if (this._startTimeInput && this._endTimeInput) {
        console.log("setting input values.");
        this._startTimeInput.setInputValuesBySeconds(this.videoInfo.loopSettings.startTime);
        this._endTimeInput.setInputValuesBySeconds(this.videoInfo.loopSettings.endTime);
      }

      if (this.videoInfo.loopSettings.isLooping) {
        this.loopButtonText = YoutubeLoopControlsComponent.STOP_LOOP;
      }
      else {
        this.loopButtonText = YoutubeLoopControlsComponent.START_LOOP;
      }

    });
  }

  /**
   * Event handler for when the user requests the start time to be captured.
   */
  onCaptureStartTime() {
    this.captureStartTimeEvent.emit();
  }

  /**
   * Event handler for when the user requests the end time to be captured.
   */
  onCaptureEndTime() {
    this.captureEndTimeEvent.emit();
  }

  /**
   * Event handler for when the input element for start time is changed.
   *
   * @param seconds The number of seconds currently configured in the input field.
   */
  onStartTimeInputChanged(seconds: number) {
    if (seconds != this.videoInfo.loopSettings.startTime) {
      this.videoInfo.loopSettings.startTime = seconds;
      this.videoInfoService.setVideoInfo(this.videoInfo);
    }
  }

  /**
   * Event handler for when the input element for end time is changed.
   *
   * @param seconds The number of seconds currently configured in the input field.
   */
  onEndTimeInputChanged(seconds: number) {
    if (seconds != this.videoInfo.loopSettings.endTime) {
      this.videoInfo.loopSettings.endTime = seconds;
      this.videoInfoService.setVideoInfo(this.videoInfo);
    }
  }

  /**
   * Event handler for when the input element for loop delay time is changed.
   *
   * @param seconds The number of seconds currently configured in the input field.
   */
  onLoopLengthInputChanged(seconds: number) {
    if (seconds != this.videoInfo.loopSettings.loopDelay) {
      this.videoInfo.loopSettings.loopDelay = seconds;
      this.videoInfoService.setVideoInfo(this.videoInfo);
    }
  }

  /**
   * Event handler when the toggle loop button is pressed.
   */
  toggleLoop() {
    this.videoInfo.loopSettings.isLooping = !this.videoInfo.loopSettings.isLooping;
    this.videoInfoService.setVideoInfo(this.videoInfo);
  }
}
