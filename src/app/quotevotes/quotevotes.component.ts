import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotevotes',
  templateUrl: './quotevotes.component.html',
  styleUrls: ['./quotevotes.component.css']
})
export class QuotevotesComponent implements OnInit {

  @Input() quotes:Quotes;
  @Output() upvote= new EventEmitter<boolean>();
  upVote(upVote:boolean){
    this.upvote.emit(upVote);
  };
  @Output() downvote= new EventEmitter<boolean>();
  downVote(downVote:boolean){
    this.downvote.emit(downVote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
