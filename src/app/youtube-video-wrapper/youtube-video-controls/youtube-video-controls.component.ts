import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Favorite } from 'src/app/shared/favorite';
import { FavoritesService } from 'src/app/shared/favorites.service';
import { VideoSettings } from '../youtube-video-wrapper';
import { FavoritesDialogComponent } from './favorites-dialog/favorites-dialog.component';

/**
 * Interface for sending and recieving information on modified favorites.
 */
export interface ModifiedFavoriteData {
  action: "delete" | "add" | "edit";  // The action to perform on the favorite.
  favorite?: Favorite;                // The favorite being modified.
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

  /**
   * The currently selected favorite
   */
  currentFavorite: Favorite;

  /**
   * The current list of favorites
   */
  favorites: Favorite[];

  /**
   * The filename the favorites are saved to/loaded from.
   */
  fileName: string;

  /**
   * Constructor
   * @param dialog The {@link MatDialog} module for displaying modal dialogs.
   */
  constructor(public dialog: MatDialog, public favoriteService: FavoritesService) {
    favoriteService.currentFavorite$.subscribe((currentFavorite: Favorite) => {
      this.currentFavorite = currentFavorite;
    });

    favoriteService.favorites$.subscribe((favorites: Favorite[]) => {
      this.favorites = favorites;
    });

    favoriteService.fileName$.subscribe((fileName: string) => {
      this.fileName = fileName;
    })
  }

  /**
   * Storage for video settings
   */
  private _videoSettings: VideoSettings;

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
    if (this.currentFavorite != null) {
      this.onChangeVideo({ videoId: this.currentFavorite.videoId });
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
          videoTitle: this.currentFavorite.videoTitle,
          artist: this.currentFavorite.artist,
          videoId: this.currentFavorite.videoId
        }
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this._handleModifyFavorite(result);
    });
  }

  loadSaveFile(event: any) {
    this.favoriteService.loadFavorites(event.target.files[0]);
  }

  downloadFile() {
    this.favoriteService.downloadFavoritesFile();
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

    // Valid if fileName is not null, empty, or blank.
    let saveFileValid = this.fileName && this.fileName.trim() !== '';

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
   * @param result The {@link ModifiedFavoriteData} returned from the {@link FavoritesDialogComponent}
   */
  private _handleModifyFavorite(result: ModifiedFavoriteData) {
    if (result.action == "delete") {
      this.favoriteService.deleteFavorite();
    }
    else if (result.action == "add") {
      this.favoriteService.addFavorite(result.favorite);
    }
    else if (result.action == "edit") {
      this.favoriteService.editFavorite(result.favorite);
    }
  }
}
