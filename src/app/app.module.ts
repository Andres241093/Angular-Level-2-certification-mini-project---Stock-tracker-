import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlockUiModule } from './shared/block-ui/block-ui.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BlockUiModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
