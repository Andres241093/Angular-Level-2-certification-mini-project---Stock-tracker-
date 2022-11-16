import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { CompanyDetails } from '../../../interfaces/company';
import { Quote } from '../../../interfaces/quote';
import { StockSymbol } from '../../../interfaces/stock-symbol';
import { FinnhubService } from '../../../services/finnhub.service';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
})
export class StockListComponent implements OnInit {
  searchControl: FormControl = new FormControl('');
  searchValue: string;
  stockSymbol: StockSymbol;
  stockList: Array<StockSymbol> = [];

  constructor(
    private finnhubService: FinnhubService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.setInitialData();
  }

  setInitialData(): void {
    this.stockList = this.storageService.getData();
    this.searchControl.valueChanges.subscribe({
      next: (value) => (this.searchValue = value),
    });
  }

  searchData(): void {
    forkJoin([
      this.finnhubService.getQuote(this.searchValue),
      this.finnhubService.searchSymbol(this.searchValue),
    ]).subscribe({
      next: ([quote, symbol]) => {
        this.saveData(quote, symbol.result[0]);
      },
    });
  }

  saveData(quote: Quote, symbol: CompanyDetails): void {
    this.stockSymbol = {
      quote,
      symbol,
    };
    this.storageService.saveData(this.stockSymbol);
    this.stockList = this.storageService.getData();
  }
}
