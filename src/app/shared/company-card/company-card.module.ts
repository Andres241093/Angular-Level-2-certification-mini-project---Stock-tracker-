import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '../card/card.module';
import { CompanyCardComponent } from './company-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, CardModule, RouterModule],
  declarations: [CompanyCardComponent],
  exports: [CompanyCardComponent],
})
export class CompanyCardModule {}
