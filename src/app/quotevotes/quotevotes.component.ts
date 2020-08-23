import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotevotes',
  templateUrl: './quotevotes.component.html',
  styleUrls: ['./quotevotes.component.css']
})
export class QuotevotesComponent implements OnInit {

  @Input() quotes:Quotes;
  constructor() { }

  ngOnInit(): void {
  }

}
