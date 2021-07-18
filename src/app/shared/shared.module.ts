import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavComponent } from './nav/nav.component';
import { TimeInputComponent } from './time-input/time-input.component';

const ngModules = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [NavComponent, TimeInputComponent],
  imports: [
    ...ngModules,
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ...ngModules,
    NavComponent,
    TimeInputComponent
  ]
})

export class SharedModule { }
