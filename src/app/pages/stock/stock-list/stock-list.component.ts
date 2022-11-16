import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FinnhubService } from '../../../services/finnhub.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
})
export class StockListComponent implements OnInit {
  searchControl: FormControl = new FormControl('');
  searchValue: string = '';

  constructor(private finnhubService: FinnhubService) {}

  ngOnInit(): void {
    this.searchControl.valueChanges.subscribe({
      next: (value) => (this.searchValue = value),
    });
  }

  search(): void {
    this.finnhubService.getQuote(this.searchValue).subscribe({
      next: (res) => console.log(res),
    });
  }
}
