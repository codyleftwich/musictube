import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-video-controls',
  templateUrl: './youtube-video-controls.component.html',
  styleUrls: ['./youtube-video-controls.component.css']
})
export class YoutubeVideoControlsComponent implements OnInit {

  constructor() { }

  playbackSpeed: number = 1.0;

  ngOnInit(): void {
  }

  formatLabel(value: number) {
    return value + "x";
  }
}
