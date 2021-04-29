import { Component, OnInit, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  templateUrl: './youtube-video-wrapper.component.html',
  selector: 'app-youtube-video-wrapper'
})
export class YoutubeVideoWrapperComponent implements OnInit {
  @ViewChild('player', { static: true }) private _youtubePlayer: YouTubePlayer;

  private readonly _defaultVideoId: string = 'HyHNuVaZJ-k';

  ngOnInit() {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    this._youtubePlayer.videoId = this._defaultVideoId;
  }
}
