/**
 * Object representing changable video settings.
 */
export interface VideoSettings {
    videoId: string,        // The id of the video being shown.
    playbackSpeed: number,  // The playback speed of the video.
    isPlaying: boolean,     // Flag for if the video is currently playing or not.
    hasStarted: boolean,    // Flag for if the video has been started or not.
    videoLength: number     // The max length of the current video.
}

/**
 * Object representing available loop settings.
 */
export interface LoopSettings {
    startTime: number;      // Time in the video to start the loop.
    endTime: number;        // Time in the video to end the loop.
    loopDelay: number;      // Amount of time between loops.
    isLooping: boolean;     // If the loop is currently active.
}