import { Component, Input, OnInit } from '@angular/core';
import { StockSymbol } from '../../interfaces/stock-symbol';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.css'],
})
export class CompanyCardComponent implements OnInit {
  @Input() data: StockSymbol;

  constructor() {}

  ngOnInit() {}
}
