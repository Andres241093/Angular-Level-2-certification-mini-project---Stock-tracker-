import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '../card/card.module';
import { CompanyCardComponent } from './company-card.component';

@NgModule({
  imports: [CommonModule, CardModule],
  declarations: [CompanyCardComponent],
  exports: [CompanyCardComponent],
})
export class CompanyCardModule {}
