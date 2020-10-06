import { Component, DoCheck, OnInit } from '@angular/core';
import {MyService} from '../data.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit, DoCheck {

  value =1;
  arr = [...Array(13).keys()].slice(1,)
  constructor(private data : MyService) { }

  ngOnInit(): void {
     
  }

  ngDoCheck(){
    this.value= (this.data.value) === undefined ? 1 : Number(this.data.value)
  }

}
