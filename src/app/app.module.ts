import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SpinnerModule } from './shared/spinner/spinner.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SpinnerModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
