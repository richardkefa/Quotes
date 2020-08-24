import { Component } from '@angular/core';
import { Quotes } from './quotes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quotes[] = [
    new Quotes(1, 'richard', 'Albert Eisteen', 'insernity is doing the same thing and expecting different results',new Date(2020,5,10),0,0),
    new Quotes(2, 'kefa', 'Nelson Mandela', 'Education is the most powerful weapon which you can use to change the world.',new Date(2018,1,4),0,0),
    new Quotes(3, 'mcharo', 'Shakespeare', 'Hell is empty and all the devils are here.',new Date(2019,11,12),0,0)
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

}
