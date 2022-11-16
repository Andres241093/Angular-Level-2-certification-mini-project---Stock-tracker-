import { Injectable } from '@angular/core';
import { StockSymbol } from '../interfaces/stock-symbol';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storage: Array<StockSymbol> = [];

  constructor() {}

  saveData(stockSymbol: StockSymbol): void {
    this.storage.push(stockSymbol);
    localStorage.setItem('storage', JSON.stringify(this.storage));
  }

  getData(): Array<StockSymbol> {
    const localData = JSON.parse(localStorage.getItem('storage'));
    if (localData && localData.length > 0) {
      this.storage = localData;
    }
    return this.storage;
  }

  deleteData(item: StockSymbol): void {
    const itemToDelete = this.storage.findIndex(
      (element) => element.symbol.symbol === item.symbol.symbol
    );
    this.storage.splice(itemToDelete, 1);
    localStorage.setItem('storage', JSON.stringify(this.storage));
  }
}
