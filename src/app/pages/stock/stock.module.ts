import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockRoutingModule } from './stock-routing.module';
import { CardModule } from 'src/app/shared/card/card.module';

@NgModule({
  imports: [CommonModule, StockRoutingModule, CardModule],
  declarations: [StockListComponent],
})
export class StockModule {}
