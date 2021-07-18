import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-time-input',
  templateUrl: './time-input.component.html',
  styleUrls: ['./time-input.component.css']
})
export class TimeInputComponent implements OnInit {
  @ViewChild("secondsInput", { static: true }) private _secondInput: ElementRef;
  @ViewChild("minutesInput", { static: true }) private _minutesInput: ElementRef;
  @ViewChild("hoursInput", { static: true }) private _hoursInput: ElementRef;

  /**
   * EventEmitter used the user changes on of the inputs. Emits the time in seconds.
   */
  @Output() timeInputChangedEvent = new EventEmitter<number>();

  ngOnInit(): void {
  }

  setInputValues(hours: number, minutes: number, seconds: number): void {
    this._hoursInput.nativeElement.value = hours;
    this._minutesInput.nativeElement.value = minutes;
    this._minutesInput.nativeElement.value = seconds;
  }

  setInputValuesBySeconds(seconds: number): void {
    this._hoursInput.nativeElement.value = Math.floor(seconds / 3600);
    this._minutesInput.nativeElement.value = Math.floor(seconds / 60 % 60);
    this._secondInput.nativeElement.value = Math.floor(seconds % 60);
  }

  getSeconds(): number {
    let result = 0;

    result += Number(this._hoursInput.nativeElement.value) * 3600;
    result += Number(this._minutesInput.nativeElement.value) * 60;
    result += Number(this._secondInput.nativeElement.value);

    return result;
  }

  onInputChange(input: number) {
    this.timeInputChangedEvent.emit(this.getSeconds());
  }
}
