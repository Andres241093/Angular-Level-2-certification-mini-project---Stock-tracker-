import { Injectable } from '@angular/core';
import { StockSymbol } from '../interfaces/stock-symbol';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  storage: Array<StockSymbol> = [];

  constructor() {}

  saveData(stockSymbol: StockSymbol): void {
    const localData = this.getData();
    if (localData && localData.length > 0) {
      this.storage = localData;
    }
    this.storage.push(stockSymbol);
    localStorage.setItem('storage', JSON.stringify(this.storage));
  }

  getData(): Array<StockSymbol> {
    return JSON.parse(localStorage.getItem('storage'));
  }

  deleteData(item: StockSymbol): void {
    const index = this.storage.indexOf(item);
    this.storage.splice(index, 1);
    localStorage.setItem('storage', JSON.stringify(this.storage));
  }
}
