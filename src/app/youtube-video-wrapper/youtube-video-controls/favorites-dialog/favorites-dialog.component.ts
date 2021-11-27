import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModifyFavoriteData } from '../youtube-video-controls.component';

/**
 * Component to be used as a dialog to modify favorites.
 */
@Component({
  selector: 'app-favorites-dialog',
  templateUrl: './favorites-dialog.component.html',
  styleUrls: ['./favorites-dialog.component.css']
})
export class FavoritesDialogComponent implements OnInit {
  /**
   * Title of the dialog.
   */
  dialogTitle: string;

  /**
   * The form to process modifications to favorites.
   */
  favoriteForm: FormGroup;

  /**
   * Constructor.
   * @param formBuilder Builds the form for the dialog.
   * @param data The data to fill the dialog form with.
   */
  constructor(formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: ModifyFavoriteData) {
    this.favoriteForm = formBuilder.group({
      videoTitle: [data.favorite.videoTitle],
      artist: [data.favorite.artist],
      videoId: [data.favorite.videoId]
    });
  }

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    if (this.data.action == "add") {
      this.dialogTitle = "Add Favorite";
    }
    else if (this.data.action == "edit") {
      this.dialogTitle = "Edit Favorite";
    }
    else {
      this.dialogTitle = "Missing Title Condition"
      console.log("Invalid state");
    }
  }

  /**
   * Gets the {@link ModifyFavoriteData} when deleting a favorite.
   * @returns {@link ModifyFavoriteData} signaling a deletion action.
   */
  onDeleteFavorite(): ModifyFavoriteData {
    return {
      action: "delete"
    };
  }

  /**
   * Gets the {@link ModifyFavoriteData} when adding a favorite.
   * @returns {@link ModifyFavoriteData} signaling an addition action with the new favorite to add.
   */
  onAddFavorite(): ModifyFavoriteData {
    return {
      action: "add",
      favorite: {
        videoTitle: this.favoriteForm.get("videoTitle").value,
        artist: this.favoriteForm.get("artist").value,
        videoId: this.favoriteForm.get("videoId").value
      }
    }
  }

  /**
   * Gets the {@link ModifyFavoriteData} when editing a favorite.
   * @returns {@link ModifyFavoriteData} signaling an addition action with the updated favorite information.
   */
  onEditFavorite(): ModifyFavoriteData {
    return {
      action: "edit",
      favorite: {
        videoTitle: this.favoriteForm.get("videoTitle").value,
        artist: this.favoriteForm.get("artist").value,
        videoId: this.favoriteForm.get("videoId").value
      }
    }
  }

}
