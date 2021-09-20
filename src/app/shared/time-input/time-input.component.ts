import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-time-input',
  templateUrl: './time-input.component.html',
  styleUrls: ['./time-input.component.css']
})
export class TimeInputComponent implements OnInit {
  /**
   * The input element that represents milliseconds.
   */
  @ViewChild("millisecondsInput", { static: false }) private _millisecondsInput: ElementRef;

  /**
   * The input element that represents seconds.
   */
  @ViewChild("secondsInput", { static: true }) private _secondInput: ElementRef;

  /**
   * The input element that represents minutes.
   */
  @ViewChild("minutesInput", { static: true }) private _minutesInput: ElementRef;

  /**
   * The input element that represents hours.
   */
  @ViewChild("hoursInput", { static: true }) private _hoursInput: ElementRef;

  /**
  * Private backing for showMilliseconds.
  */
  private _showMilliseconds = true;

  /**
   * Whether or not the milliseconds field should be shown.
   */
  @Input()
  get showMilliseconds(): boolean {
    return this._showMilliseconds;
  }
  set showMilliseconds(showMilliseconds: boolean) {
    this._showMilliseconds = showMilliseconds;
  }

  /**
   * Private backing for fieldsEnabled
   */
  private _fieldsEnabled: boolean = true;

  /**
   * Determines whether the input fields shoulds be enabled or not.
   */
  @Input()
  get fieldsEnabled(): boolean {
    return this._fieldsEnabled;
  }
  set fieldsEnabled(value: boolean) {
    this._fieldsEnabled = value;
  }

  /**
   * Backing data for isReadOnly
   */
  private _isReadOnly: boolean = false;

  /**
   * Flag for if the field should be readonly.
   */
  @Input()
  set isReadOnly(value: boolean) {
    this._isReadOnly = value;
  }
  get isReadOnly(): boolean {
    return this._isReadOnly;
  }

  /**
   * The input type to assign to the inputs
   */
  inputType: string;

  /**
   * EventEmitter used the user changes on of the inputs. Emits the time in seconds.
   */
  @Output() timeInputChangedEvent = new EventEmitter<number>();

  /**
   * Initialization code.
   */
  ngOnInit(): void {
    if (this.isReadOnly) {
      this.inputType = "text";
    }
    else {
      this.inputType = "number";
    }
  }

  /**
   * Sets the input values by calculating the hours, minutes, and leftover seconds.
   *
   * @param seconds The number of seconds to update the inputs to.
   */
  setInputValuesBySeconds(seconds: number): void {
    this._hoursInput.nativeElement.value = Math.floor(seconds / 3600);
    this._minutesInput.nativeElement.value = Math.floor(seconds / 60 % 60);
    this._secondInput.nativeElement.value = Math.floor(seconds % 60);
    if (this._showMilliseconds) {
      this._millisecondsInput.nativeElement.value = Math.floor((seconds % 1) * 1000);
    }
  }

  /**
   * @returns The conversion of the inputs to the total number of seconds.
   */
  getSeconds(): number {
    let result = 0;

    result += Number(this._hoursInput.nativeElement.value) * 3600;
    result += Number(this._minutesInput.nativeElement.value) * 60;
    result += Number(this._secondInput.nativeElement.value);

    if (this._showMilliseconds) {
      result += Number(this._millisecondsInput.nativeElement.value) / 1000;
    }

    return result;
  }

  /**
   * Event handler for when one of the input fields are changed.
   */
  onInputChange() {
    this.timeInputChangedEvent.emit(this.getSeconds());
  }
}
