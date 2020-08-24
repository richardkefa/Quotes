import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { from } from 'rxjs';
import { DateCounterPipe } from './date-counter.pipe';
import { QuotevotesComponent } from './quotevotes/quotevotes.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    DateCounterPipe,
    QuotevotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
