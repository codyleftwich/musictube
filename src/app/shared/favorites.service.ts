import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Favorite } from './favorite';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  /**
   * The currently selected favorite.
   */
  private _currentFavorite: BehaviorSubject<Favorite> = new BehaviorSubject<Favorite>(null);

  public readonly currentFavorite$: Observable<Favorite> = this._currentFavorite.asObservable();

  /**
   * The list of favorites.
   */
  private _favorites: BehaviorSubject<Favorite[]> = new BehaviorSubject<Favorite[]>([]);

  public readonly favorites$: Observable<Favorite[]> = this._favorites.asObservable();

  /**
   * The file the service will save to or load from.
   */
  private _fileName: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  public readonly fileName$: Observable<string> = this._fileName.asObservable();

  constructor() { }

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
    let jsonFile = new Blob([JSON.stringify(this._favorites)], {
      type: 'application/json'
    });

    // Ensure the filename ends with json extension
    if (!this._fileName.getValue().endsWith(".json")) {
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
    this._favorites.next(this._favorites.value.concat(favorite));
  }

  /**
   * Deletes the currently selected {@link Favorite}.
   */
  deleteFavorite() {
    for (var i = 0; i < this._favorites.value.length; i++) {
      if (this._favorites[i] == this._currentFavorite) {
        this._favorites.next(this._favorites.value.splice(i, 1));
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
      if (this._favorites[i] == this._currentFavorite) {
        this._favorites[i] = updatedFavorite;
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
    this._currentFavorite.next(favorite);
  }
}
