import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes'
import { FormControl, NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quotes(0,"","","",new Date(),0,0)
  @Output() addquote = new EventEmitter<Quotes>();
  submitQuote(form: NgForm){
    this.addquote.emit(this.newQuote);
    form.resetForm();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
