import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  /**
   * Set item into local storage
   * @param key Key of the local storage item
   * @param value Value to be stored
   */
  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  /**
   * Get item from local storage
   * @param key Key of the local storage item
   * @returns Value from the local storage
   */
  getItem(key: string): string {
    return localStorage.getItem(key) || '';
  }
}
