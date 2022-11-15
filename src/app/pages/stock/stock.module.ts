import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockRoutingModule } from './stock-routing.module';
import { CardModule } from '../../shared/card/card.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, StockRoutingModule, CardModule, ReactiveFormsModule],
  declarations: [StockListComponent],
})
export class StockModule {}
