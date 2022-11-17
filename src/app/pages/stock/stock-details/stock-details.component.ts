import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DateRange } from '../../../interfaces/date-range';
import { Sentiment } from '../../../interfaces/sentiment';
import { BlockUiService } from '../../../services/block-ui.service';
import { FinnhubService } from '../../../services/finnhub.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css'],
})
export class StockDetailsComponent implements OnInit {
  symbol: string = '';
  sentimentData: Sentiment;
  dateRange: DateRange;

  constructor(
    private finnhubService: FinnhubService,
    private activatedRoute: ActivatedRoute,
    private blockUiService: BlockUiService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe({
      next: (params) => (this.symbol = params['symbol']),
    });
    this.setInitialData();
  }

  setInitialData(): void {
    this.blockUiService.show();
    this.dateRange = this.getDateRange();
    this.finnhubService
      .getSentimentData(this.symbol, this.dateRange)
      .subscribe({
        next: (res) => {
          this.sentimentData = res;
          this.blockUiService.hide();
        },
      });
  }

  getDateRange(): DateRange {
    const from = new Date();
    const to = new Date();
    from.setMonth(from.getMonth() - 3);
    to.setMonth(to.getMonth() - 1);
    return {
      from: from.toISOString().slice(0, 10),
      to: to.toISOString().slice(0, 10),
    };
  }

  transformToYear(month: number): Date {
    const year = new Date().getFullYear();
    return new Date(year, month, 1);
  }
}
