import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Details} from 'src/app/model/model'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() UserDetails: Details; 
  @Output() clear = new EventEmitter<boolean>();

  constructor() { }

  clearDetails(){
    this.clear.emit(true);
  }
  ngOnInit(): void {
  }

}
