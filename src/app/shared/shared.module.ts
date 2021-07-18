import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { NavComponent } from './nav/nav.component';
import { TimeInputComponent } from './time-input/time-input.component';

const ngModules = [
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [NavComponent, TimeInputComponent],
  imports: [
    ...ngModules,
    CommonModule
  ],
  exports: [
    ...ngModules,
    NavComponent,
    TimeInputComponent
  ]
})

export class SharedModule { }
