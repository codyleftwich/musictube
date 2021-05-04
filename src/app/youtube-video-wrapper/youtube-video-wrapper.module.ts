import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';
import { YoutubeVideoControlsComponent } from './youtube-video-controls/youtube-video-controls.component';
import { YoutubeLoopControlsComponent } from './youtube-loop-controls/youtube-loop-controls.component';
import { YoutubeVideoWrapperComponent } from './youtube-video-wrapper.component';

const ngModules = [
  FlexLayoutModule,
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