import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';
import { YoutubeVideoControlsComponent } from './youtube-video-controls/youtube-video-controls.component';
import { YoutubeLoopControlsComponent } from './youtube-loop-controls/youtube-loop-controls.component';
import { YoutubeVideoWrapperComponent } from './youtube-video-wrapper.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const ngModules = [
  FlexLayoutModule,
  FormsModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSliderModule,
  MatTabsModule,
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
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    SharedModule,
    YouTubePlayerModule
  ],
  exports: [
    ...ngModules,
    YoutubeVideoWrapperComponent
  ]
})
export class YoutubeVideoWrapperModule { }