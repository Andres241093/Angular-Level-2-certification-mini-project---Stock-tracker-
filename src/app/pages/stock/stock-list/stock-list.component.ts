import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { CompanyDetails } from '../../../interfaces/company';
import { Quote } from '../../../interfaces/quote';
import { StockSymbol } from '../../../interfaces/stock-symbol';
import { FinnhubService } from '../../../services/finnhub.service';
import { SpinnerService } from '../../../services/spinner.service';
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
    private storageService: StorageService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.setInitialData();
  }

  setInitialData(): void {
    this.getData();
    this.searchControl.valueChanges.subscribe({
      next: (value) => (this.searchValue = value),
    });
  }

  searchData(): void {
    this.spinnerService.show();
    forkJoin([
      this.finnhubService.getQuote(this.searchValue),
      this.finnhubService.searchSymbol(this.searchValue),
    ]).subscribe({
      next: ([quote, symbol]) => {
        this.spinnerService.hide();
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
    this.getData();
  }

  deleteData(item: StockSymbol): void {
    this.storageService.deleteData(item);
    this.getData();
  }

  getData(): void {
    this.stockList = this.storageService.getData();
  }
}
