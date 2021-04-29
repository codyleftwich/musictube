import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule, YouTubePlayer } from '@angular/youtube-player';

import { YoutubeVideoWrapperComponent } from './youtube-video-wrapper.component';


@NgModule({
  declarations: [
    YoutubeVideoWrapperComponent
  ],
  imports: [
    CommonModule,
    YouTubePlayerModule
  ],
  exports: [
    YoutubeVideoWrapperComponent
  ]
})
export class YoutubeVideoWrapperModule { }