import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoopSettings, VideoInfo } from './video-info';

@Injectable({
  providedIn: 'root'
})
export class VideoInfoService {

  /**
   * Information on the video and the loop settings for the video.
   */
  private _videoInfo: BehaviorSubject<VideoInfo> = new BehaviorSubject<VideoInfo>(this.emptyVideoInfo());

  /**
   * Wrapped {@link Observable<VideoInfo>} for the currently loaded video.
   */
  public readonly videoInfo$: Observable<VideoInfo> = this._videoInfo.asObservable();

  constructor() { }

  setVideoInfo(videoInfo: VideoInfo) {
    this._videoInfo.next(videoInfo);
  }

  /**
   * Method for instantiating an empty {@link VideoInfo}.
   * @returns An empty {@link VideoInfo}.
   */
  private emptyVideoInfo(): VideoInfo {
    return {
      videoId: "",
      videoTitle: "",
      artist: "",
      playbackSpeed: 1,
      isPlaying: false,
      hasStarted: false,
      videoLength: 0,
      loopSettings: {
        startTime: 0,
        endTime: 0,
        loopDelay: 0,
        isLooping: false
      }
    }
  }
}
