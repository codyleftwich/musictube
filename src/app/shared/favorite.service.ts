import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Favorite } from './favorite';

/**
 * Service to interact with favorites.
 */
@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  /**
   * The currently selected favorite.
   */
  private _currentFavorite: BehaviorSubject<Favorite> = new BehaviorSubject<Favorite>(null);

  /**
   * Wrapped {@link Observable<Favorite>} for the currently selected favorite.
   */
  public readonly currentFavorite$: Observable<Favorite> = this._currentFavorite.asObservable();

  /**
   * The list of favorites.
   */
  private _favorites: BehaviorSubject<Favorite[]> = new BehaviorSubject<Favorite[]>([]);

  /**
   * Wrapped {@link Observable<Favorite[]>} for the favorites list.
   */
  public readonly favorites$: Observable<Favorite[]> = this._favorites.asObservable();

  /**
   * The file the service will save to or load from.
   */
  private _fileName: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  /**
   * Wrapped {@link Observable<string>} for the file name.
   */
  public readonly fileName$: Observable<string> = this._fileName.asObservable();

  /**
   * Loads a file specified by the user.
   * @param event The load file event triggered by selecting a file in the file browser.
   */
  loadFavorites(file: File) {
    let saveFile = file;
    const fileReader = new FileReader();
    fileReader.readAsText(saveFile);
    fileReader.onload = () => {
      this._favorites.next(JSON.parse(fileReader.result.toString()) as Favorite[]);
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }

    this._fileName.next(saveFile.name);
  }

  /**
   * Downloads the {@link Favorite}s as a json file.
   */
  downloadFavoritesFile() {
    let jsonFile = new Blob([JSON.stringify(this._favorites.value)], {
      type: 'application/json'
    });

    // Ensure the filename ends with json extension
    if (!this._fileName.value.endsWith(".json")) {
      this._fileName.next(this._fileName.value + ".json");
    }

    // Create the link and download.
    const link = document.createElement('a');
    link.download = this._fileName.value;
    link.href = window.URL.createObjectURL(jsonFile);
    link.click();

    // Release the blob
    URL.revokeObjectURL(link.href);
  }

  /**
   * Adds a new {@link Favorite}.
   * @param favorite The {@link Favorite} to be added.
   */
  addFavorite(favorite: Favorite) {
    this._currentFavorite.next(favorite);
    this._favorites.next(this._favorites.value.concat(favorite));
  }

  /**
   * Deletes the currently selected {@link Favorite}.
   */
  deleteFavorite() {
    for (var i = 0; i < this._favorites.value.length; i++) {
      console.log("Current favorite: " + this._currentFavorite.value);
      if (this._favorites.value[i] == this._currentFavorite.value) {
        this._favorites.value.splice(i, 1);
        this._favorites.next(this._favorites.value);
        this._currentFavorite.next(null);
        break;
      }
    }
  }

  /**
   * Updates the currently selected {@link Favorite} to the {@link updatedFavorite}.
   * @param updatedFavorite The new value for the currently selected {@link Favorite}.
   */
  editFavorite(updatedFavorite: Favorite) {
    for (var i = 0; i < this._favorites.value.length; i++) {
      console.log("Current favorite: " + this._currentFavorite.value);
      if (this._favorites.value[i] == this._currentFavorite.value) {
        this._favorites.value[i] = updatedFavorite;
        this._favorites.next(this._favorites.value);
        this._currentFavorite.next(this._favorites.value[i]);
        break;
      }
    }
  }

  /**
   * Sets the currently selected {@link Favorite}.
   * @param favorite The new favorite to select.
   */
  setCurrentFavorite(favorite: Favorite) {
    console.log("Set current favorite: " + favorite);
    this._currentFavorite.next(favorite);
  }

  /**
   * Sets the file name.
   * @param fileName the new value for the file name.
   */
  setFileName(fileName: string) {
    this._fileName.next(fileName);
  }
}
