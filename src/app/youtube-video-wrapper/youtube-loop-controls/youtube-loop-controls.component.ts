import { Component, EventEmitter, Input, OnInit, Output, ViewChild, SimpleChanges } from '@angular/core';
import { TimeInputComponent } from 'src/app/shared/time-input/time-input.component';
import { LoopSettings, VideoSettings } from '../youtube-video-wrapper';

@Component({
  selector: 'app-youtube-loop-controls',
  templateUrl: './youtube-loop-controls.component.html',
  styleUrls: ['./youtube-loop-controls.component.css']
})
export class YoutubeLoopControlsComponent {
  @ViewChild("startTimeInput", { static: true }) private _startTimeInput: TimeInputComponent;
  @ViewChild("endTimeInput", { static: true }) private _endTimeInput: TimeInputComponent;

  private static readonly START_LOOP: string = "Start Loop";
  private static readonly STOP_LOOP: string = "Stop Loop";

  loopButtonText: string = YoutubeLoopControlsComponent.START_LOOP;

  get isLoopValid(): boolean {
    return this._videoSettings.hasStarted
      && (this._loopSettings.startTime < this._loopSettings.endTime)
      && (this._loopSettings.endTime <= this._videoSettings.videoLength);
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
   * EventEmitter used when video settings are changed.
   */
  @Output() onLoopSettingsChanged = new EventEmitter<LoopSettings>();

  onCaptureStartTime() {
    this.captureStartTimeEvent.emit();
  }

  onCaptureEndTime() {
    this.captureEndTimeEvent.emit();
  }

  onStartTimeInputChanged(seconds: number) {
    if (seconds != this._loopSettings.startTime) {
      this._loopSettings.startTime = seconds;
      this.onLoopSettingsChanged.emit(this._loopSettings);
    }
  }

  onEndTimeInputChanged(seconds: number) {
    if (seconds != this._loopSettings.endTime) {
      this._loopSettings.endTime = seconds;
      this.onLoopSettingsChanged.emit(this._loopSettings);
    }
  }

  onLoopLengthInputChanged(seconds: number) {
    if (seconds != this._loopSettings.loopDelay) {
      this._loopSettings.loopDelay = seconds;
      this.onLoopSettingsChanged.emit(this._loopSettings);
    }
  }

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
