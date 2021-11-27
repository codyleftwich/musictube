import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Favorite, VideoSettings } from '../youtube-video-wrapper';
import { FavoritesDialogComponent } from './favorites-dialog/favorites-dialog.component';

export interface ModifyFavoriteData {
  action: "delete" | "add" | "edit"
  favorite?: Favorite;
}

/**
 * Component used to manage the UI video controls.
 */
@Component({
  selector: 'app-youtube-video-controls',
  templateUrl: './youtube-video-controls.component.html',
  styleUrls: ['./youtube-video-controls.component.css']
})
export class YoutubeVideoControlsComponent {
  constructor(public dialog: MatDialog) { }

  /**
   * Storage for video settings
   */
  private _videoSettings: VideoSettings;

  /**
   * Name of the user's save file.
   */
  saveFileName: string;

  /**
   * The currently selected favorite in the favorites dropdown.
   */
  selectedFavorite: Favorite;

  /**
   * The list of favorites.
   */
  favorites: Favorite[] = [];

  /**
   * Getter/Setter for video settings input
   */
  @Input()
  get videoSettings(): VideoSettings {
    return this._videoSettings;
  }
  set videoSettings(videoSettings: VideoSettings) {
    this._videoSettings = videoSettings;
  }

  /**
   * EventEmitter used when video settings are changed.
   */
  @Output() onVideoSettingsChanged = new EventEmitter<VideoSettings>();

  /**
   * Event handler for when the user clicks the "Change Video" button in the "Favorites" tab.
   */
  onChangeVideoFavorite() {
    if (this.selectedFavorite != null) {
      this.onChangeVideo({ videoId: this.selectedFavorite.videoId });
    }
  }

  /**
   * Event handler for when the user clicks the "Change Video" button.
   */
  onChangeVideo(data: any) {
    if (data.videoId != this.videoSettings.videoId) {
      this.videoSettings.videoId = data.videoId;
      this.videoSettings.playbackSpeed = 1.0; // Reset the playback speed.
      this.onVideoSettingsChanged.emit(this.videoSettings);
    }
  }

  /**
   * Event handler for when the playback speed slider is changed.
   * @param value The value represented by the position of the slider.
   */
  onChangePlaybackSpeed(value: number) {
    this.videoSettings.playbackSpeed = value;
    this.onVideoSettingsChanged.emit(this.videoSettings);
  }

  /**
   * Loads a file specified by the user.
   * @param event The load file event triggered by selecting a file in the file browser.
   */
  loadSaveFile(event: any) {
    let saveFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(saveFile);
    fileReader.onload = () => {
      this.favorites = JSON.parse(fileReader.result.toString()) as Favorite[];
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }

    this.saveFileName = saveFile.name;
  }

  /**
   * Starts download of a file when the save button is clicked.
   */
  downloadFile() {
    let jsonFile = new Blob([JSON.stringify(this.favorites)], {
      type: 'application/json'
    });

    // Ensure the filename ends with json extension
    if (!this.saveFileName.endsWith(".json")) {
      this.saveFileName += ".json";
    }

    // Create the link and download.
    const link = document.createElement('a');
    link.download = this.saveFileName;
    link.href = window.URL.createObjectURL(jsonFile);
    link.click();

    // Release the blob
    URL.revokeObjectURL(link.href);
  }

  /**
   * Open modal dialog to add a favorite.
   */
  addFavorite() {
    let dialogRef = this.dialog.open(FavoritesDialogComponent, {
      width: "40%",
      data: {
        action: "add",
        favorite: {
          videoTitle: "title",
          artist: "artist",
          videoId: "videoId"
        }
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this._handleModifyFavorite(result);
    });
  }

  /**
   * Open modal dialog to edit a favorite.
   */
  editFavorite() {
    let dialogRef = this.dialog.open(FavoritesDialogComponent, {
      width: "40%",
      data: {
        action: "edit",
        favorite: {
          videoTitle: this.selectedFavorite.videoTitle,
          artist: this.selectedFavorite.artist,
          videoId: this.selectedFavorite.videoId
        }
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this._handleModifyFavorite(result);
    });
  }

  /**
   * Determines if save should be enabled.
   *
   * @returns True if (favorites is not null and there is at least one added favorite) and
   *  (saveFileName is not null, empty, or blank.)
   */
  isSaveEnabled(): boolean {
    // Valid if there is at least one added favorite.
    let favoriteValid = this.favorites.length > 0;

    // Valid if saveFileName is not null, empty, or blank.
    let saveFileValid = this.saveFileName && this.saveFileName.trim() !== '';

    return saveFileValid && favoriteValid;
  }

  /**
   * Formats the value shown on the slider thumb.
   * @param value The value of the slider.
   * @returns The string representation of the value to be shown on the slider thumb.
   */
  formatLabel(value: number) {
    return value;
  }

  /**
   * Private handler for when the {@link FavoritesDialogComponent} returns a result.
   * @param result The {@link ModifyFavoriteData} returned from the {@link FavoritesDialogComponent}
   */
  private _handleModifyFavorite(result: ModifyFavoriteData) {
    if (result.action == "delete") {
      for (var i = 0; i < this.favorites.length; i++) {
        if (this.favorites[i] == this.selectedFavorite) {
          this.favorites.splice(i, 1);
          this.selectedFavorite = null;
          break;
        }
      }
    }
    else if (result.action == "add") {
      this.favorites.push(result.favorite);
      this.selectedFavorite = result.favorite;
    }
    else if (result.action == "edit") {
      for (var i = 0; i < this.favorites.length; i++) {
        if (this.favorites[i] == this.selectedFavorite) {
          this.favorites[i] = result.favorite;
          this.selectedFavorite = this.favorites[i];
          break;
        }
      }
    }
  }
}
