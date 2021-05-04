import { Component, OnInit, ViewChild } from '@angular/core';
import { YoutubeLoopControlsComponent } from './youtube-loop-controls/youtube-loop-controls.component';
import { YoutubeVideoControlsComponent } from './youtube-video-controls/youtube-video-controls.component';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';

@Component({
  selector: 'app-youtube-video-wrapper',
  templateUrl: './youtube-video-wrapper.component.html',
  styleUrls: ['./youtube-video-wrapper.component.css']
})
export class YoutubeVideoWrapperComponent implements OnInit {

  @ViewChild('video', { static: true }) private _video: YoutubeVideoComponent;
  @ViewChild('videoController', { static: true }) private _videoController: YoutubeVideoControlsComponent;
  @ViewChild('loopController', { static: true }) private _loopController: YoutubeLoopControlsComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
