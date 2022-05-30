import { MENS } from '../models/gentlemen';

export class StoreClass {
  store;
  constructor() {
    this.store = 'MENS';
  }

  getGentlemen() {
    return localStorage.getItem(this.store)
      ? JSON.parse(localStorage.getItem(this.store))
      : MENS;
  }

  setGentlemen(gentlemen) {
    localStorage.setItem(this.store, JSON.stringify(gentlemen));
  }

  deleteGentlemen() {
    localStorage.removeItem(this.store);
  }
}
