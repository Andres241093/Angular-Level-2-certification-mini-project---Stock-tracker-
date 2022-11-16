import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StockSymbol } from '../../interfaces/stock-symbol';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.css'],
})
export class CompanyCardComponent implements OnInit {
  @Input() data: StockSymbol;
  @Output() delete: EventEmitter<StockSymbol> = new EventEmitter();
  percentIcon: string;

  constructor() {}

  ngOnInit() {
    this.percentIcon = this.data?.quote.dp >= 0 ? '+' : '';
  }

  deleteData(item: any): void {
    this.delete.emit(item);
  }
}
