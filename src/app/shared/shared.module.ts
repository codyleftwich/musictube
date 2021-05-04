import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavComponent } from './nav/nav.component';

const ngModules = [
  MatToolbarModule,
];

@NgModule({
  declarations: [NavComponent],
  imports: [
    ...ngModules,
    CommonModule
  ],
  exports: [
    ...ngModules,
    NavComponent
  ]
})

export class SharedModule { }
