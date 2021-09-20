# User Manual

---

## Video Controls
The `Video Controls` section gives users a way to interact with the video outside of the actual embedded video.
- Video ID: The ID of the video to play
- Change Video: Loads the YouTube video with the video ID in the Video ID field.

The `Playback Speed Controller` section supplies the users with a slider that can be used to adjust the playback speed
of the video that is currently playing.

### Changing Video
To select a video, grab the video ID from the URL of the video you wish to load. For example, a video with a url
`https://www.youtube.com/watch?v=hello123` will have a video ID of `hello123`. Once you have the ID pasted into the
video ID textbox, you can click `Change Video` to load the new video.

### Playback Speed Controller
The playback speed controller will change the playback speed setting in the YouTube video. For example, setting the
slider to .8 will slow the video playing to 80% speed.

---

## Loop Controls
Users have the ability to loop the video separated by a length of time.
- Start Time: The time in the video where the loop will begin
- End Time: The time in the video where the loop will restart.
- Loop Delay: The length of time between loops.

### Selecting Start/End times
Once the video has begun playing, the `Capture` buttons will be enabled. At any point in the video, these buttons can
be pressed and the start and end times will be set for the loop.

### Loop Delay Settings
This setting will set the amount of time the app will wait before starting the video again. For example, if you set a
`loop delay` of 2 seconds, once the end time is reached, the app will wait 2 seconds before playing the video. The
amount of seconds that have currently passed are denoted by the sound that will play every second.