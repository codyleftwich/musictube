/**
 * Information representing a loaded video.
 */
export interface VideoInfo {
    videoId: string;        // The id of the video being shown.
    videoTitle: string;     // The title of the video being shown.
    artist: string;         // The artist of the current video. Default should be set to the name of the channel that uploaded.
    playbackSpeed: number;  // The playback speed of the video.
    isPlaying: boolean;     // Flag for if the video is currently playing or not.
    hasStarted: boolean;    // Flag for if the video has been started or not.
    videoLength: number;    // The max length of the current video.
}
