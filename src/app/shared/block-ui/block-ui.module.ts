import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockUiComponent } from './block-ui.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BlockUiComponent],
  exports: [BlockUiComponent],
})
export class BlockUiModule {}
