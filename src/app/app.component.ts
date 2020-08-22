import { Component } from '@angular/core';
import { Quotes } from './quotes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quotes[] = [
    new Quotes(1, 'richard', 'esteen', 'insernity is doing the same thing and expecting different results',new Date(),0,0),
    new Quotes(1, 'richard', 'esteen', 'insernity is doing the same thing and expecting different results',new Date(),0,0),
    new Quotes(1, 'richard', 'esteen', 'insernity is doing the same thing and expecting different results',new Date(),0,0)
  ]
}
