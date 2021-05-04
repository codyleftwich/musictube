import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetronomeComponent } from './metronome.component';



@NgModule({
  declarations: [
    MetronomeComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MetronomeComponent,
  ]
})
export class MetronomeModule { }
