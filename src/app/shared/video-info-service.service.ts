import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoInfoServiceService {

  /**
   * The id of the video being shown.
   */
  private videoId: string;

  /**
   * The title of the video being shown.
   */
  private videoTitle: string;

  /**
   * The artist of the current video. Default should be set to the name of the channel that uploaded.
   */
  private artist: string;

  /**
   * The playback speed of the video.
   */
  private playbackSpeed: number;

  /**
   * Flag for if the video is currently playing or not.
   */
  private isPlaying: boolean;

  /**
   * Flag for if the video has been started or not.
   */
  private hasStarted: boolean;

  /**
   * The max length of the current video.
   */
  private videoLength: number;

  constructor() { }


}
