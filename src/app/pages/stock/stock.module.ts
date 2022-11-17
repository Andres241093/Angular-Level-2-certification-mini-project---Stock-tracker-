import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockRoutingModule } from './stock-routing.module';
import { CardModule } from '../../shared/card/card.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyCardModule } from '../../shared/company-card/company-card.module';
import { StockDetailsComponent } from './stock-details/stock-details.component';

@NgModule({
  imports: [
    CommonModule,
    StockRoutingModule,
    CardModule,
    CompanyCardModule,
    ReactiveFormsModule,
  ],
  declarations: [StockListComponent, StockDetailsComponent],
})
export class StockModule {}
