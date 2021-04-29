import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';
import { NgModule } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { YoutubeVideoWrapperModule } from './youtube-video-wrapper/youtube-video-wrapper.module';

const ngModules = [
  BrowserAnimationsModule,
  MatSliderModule,
  MatGridListModule,
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    ...ngModules,
    AppRoutingModule,
    BrowserModule,
    YoutubeVideoWrapperModule,
  ],
  exports: [
    ...ngModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
