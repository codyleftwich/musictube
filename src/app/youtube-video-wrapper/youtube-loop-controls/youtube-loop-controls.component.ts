import { Component, EventEmitter, Input, OnInit, Output, ViewChild, SimpleChanges } from '@angular/core';
import { TimeInputComponent } from 'src/app/shared/time-input/time-input.component';
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
   * Determines whether or not a configuration is valid to loop around.
   *
   * @returns True if the loop can be started.
   */
  get isLoopValid(): boolean {
    return this._videoSettings.hasStarted
      && (this._loopSettings.startTime < this._loopSettings.endTime)
      && (this._loopSettings.endTime <= this._videoSettings.videoLength);
  }

  /**
   * Determines if the capture time buttons should be enabled.
   *
   * @return True if the user can interact with the loop times.
   */
  get canCaptureTime(): boolean {
    return !this._loopSettings.isLooping && this.videoSettings.hasStarted;
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
    this._startTimeInput.setInputValuesBySeconds(loopSettings.startTime);
    this._endTimeInput.setInputValuesBySeconds(loopSettings.endTime);
    this.loopButtonText =
      loopSettings.isLooping ? YoutubeLoopControlsComponent.STOP_LOOP : YoutubeLoopControlsComponent.START_LOOP;
  }

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
   * EventEmitter used when user requests to capture start time.
   */
  @Output() captureStartTimeEvent = new EventEmitter();

  /**
  * EventEmitter used when user requests to capture end time.
  */
  @Output() captureEndTimeEvent = new EventEmitter();

  /**
   * EventEmitter used when loop settings are changed.
   */
  @Output() onLoopSettingsChanged = new EventEmitter<LoopSettings>();

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
    if (seconds != this._loopSettings.startTime) {
      this._loopSettings.startTime = seconds;
      this.onLoopSettingsChanged.emit(this._loopSettings);
    }
  }

  /**
   * Event handler for when the input element for end time is changed.
   *
   * @param seconds The number of seconds currently configured in the input field.
   */
  onEndTimeInputChanged(seconds: number) {
    if (seconds != this._loopSettings.endTime) {
      this._loopSettings.endTime = seconds;
      this.onLoopSettingsChanged.emit(this._loopSettings);
    }
  }

  /**
   * Event handler for when the input element for loop delay time is changed.
   *
   * @param seconds The number of seconds currently configured in the input field.
   */
  onLoopLengthInputChanged(seconds: number) {
    if (seconds != this._loopSettings.loopDelay) {
      this._loopSettings.loopDelay = seconds;
      this.onLoopSettingsChanged.emit(this._loopSettings);
    }
  }

  /**
   * Event handler when the toggle loop button is pressed.
   */
  toggleLoop() {
    if (this._loopSettings.isLooping) {
      this._loopSettings.isLooping = false;
      this.loopButtonText = YoutubeLoopControlsComponent.START_LOOP;
    }
    else {
      this._loopSettings.isLooping = true;
      this.loopButtonText = YoutubeLoopControlsComponent.STOP_LOOP;
    }

    this.onLoopSettingsChanged.emit(this._loopSettings);
  }
}
