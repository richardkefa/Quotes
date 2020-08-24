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
    new Quotes(2, 'richard', 'esteen', 'insernity is doing the same thing and expecting different results',new Date(),0,0),
    new Quotes(3, 'richard', 'esteen', 'insernity is doing the same thing and expecting different results',new Date(),0,0)
  ]
  addNewQuote(Quote){
    let quoteLength= this.quotes.length;
    Quote.id=quoteLength+1;
    Quote.entryDate=new Date();
    let quoteObj= new Quotes(Quote.id,Quote.name,Quote.author,Quote.quote,Quote.entryDate,0,0);
    this.quotes.push(quoteObj);
  }
  upVote(value,index){
    this.quotes[index].upvote++;
  }
  downVote(value,index){
    this.quotes[index].downvote++;
  }
  // sortedQuotes(): Quotes[]{
  //   return this.quotes.sort((a: Quotes, b: Quotes) => b.upvote-a.upvote)
  // }
}
