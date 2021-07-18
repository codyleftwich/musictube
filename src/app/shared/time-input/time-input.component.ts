import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-time-input',
  templateUrl: './time-input.component.html',
  styleUrls: ['./time-input.component.css']
})
export class TimeInputComponent {
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
   * EventEmitter used the user changes on of the inputs. Emits the time in seconds.
   */
  @Output() timeInputChangedEvent = new EventEmitter<number>();

  /**
   * Sets the input values by calculating the hours, minutes, and leftover seconds.
   *
   * @param seconds The number of seconds to update the inputs to.
   */
  setInputValuesBySeconds(seconds: number): void {
    this._hoursInput.nativeElement.value = Math.floor(seconds / 3600);
    this._minutesInput.nativeElement.value = Math.floor(seconds / 60 % 60);
    this._secondInput.nativeElement.value = Math.floor(seconds % 60);
  }

  /**
   * @returns The conversion of the inputs to the total number of seconds.
   */
  getSeconds(): number {
    let result = 0;

    result += Number(this._hoursInput.nativeElement.value) * 3600;
    result += Number(this._minutesInput.nativeElement.value) * 60;
    result += Number(this._secondInput.nativeElement.value);

    return result;
  }

  /**
   * Event handler for when one of the input fields are changed.
   */
  onInputChange() {
    this.timeInputChangedEvent.emit(this.getSeconds());
  }
}
