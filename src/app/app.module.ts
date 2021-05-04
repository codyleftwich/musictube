import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { YoutubeVideoWrapperModule } from './youtube-video-wrapper/youtube-video-wrapper.module';
import { SharedModule } from './shared/shared.module';
import { MetronomeComponent } from './metronome/metronome.component';

const ngModules = [
  BrowserAnimationsModule,
  FlexLayoutModule,
  MatSliderModule,
  MatGridListModule,
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MetronomeComponent
  ],
  imports: [
    ...ngModules,
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    YoutubeVideoWrapperModule,
  ],
  exports: [
    ...ngModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
