import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { VideoSettings } from './youtube-video-wrapper';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';

@Component({
  selector: 'app-youtube-video-wrapper',
  templateUrl: './youtube-video-wrapper.component.html',
  styleUrls: ['./youtube-video-wrapper.component.css']
})
export class YoutubeVideoWrapperComponent implements OnInit {
  @ViewChild("video", { static: true }) private _video: YoutubeVideoComponent;

  private readonly _defaultVideoId: string = 'HyHNuVaZJ-k';

  videoSettings: VideoSettings;

  constructor() { }

  ngOnInit(): void {
    this.videoSettings = {
      videoId: this._defaultVideoId,
      playbackSpeed: 1.0,
      isPlaying: false
    }
  }

  onVideoSettingsChanged(videoSettings: VideoSettings) {
    console.log("OnVideoSettingsChanged: " + JSON.stringify(videoSettings));
    this.videoSettings = videoSettings;
    this._video.videoSettings = this.videoSettings;
  }
}
