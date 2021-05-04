import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';
import { YoutubeVideoControlsComponent } from './youtube-video-controls/youtube-video-controls.component';
import { YoutubeLoopControlsComponent } from './youtube-loop-controls/youtube-loop-controls.component';
import { YoutubeVideoWrapperComponent } from './youtube-video-wrapper.component';

const ngModules = [
  FlexLayoutModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSliderModule,
];

@NgModule({
  declarations: [
    YoutubeVideoWrapperComponent,
    YoutubeVideoComponent,
    YoutubeVideoControlsComponent,
    YoutubeLoopControlsComponent
  ],
  imports: [
    ...ngModules,
    CommonModule,
    YouTubePlayerModule
  ],
  exports: [
    ...ngModules,
    YoutubeVideoWrapperComponent
  ]
})
export class YoutubeVideoWrapperModule { }