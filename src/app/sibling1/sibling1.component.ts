import { Component, OnInit ,DoCheck} from '@angular/core';
import { MyService } from '../data.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit,DoCheck {
 name: string
  constructor(private data : MyService) { }

  ngOnInit(): void {
  }
  ngDoCheck(){
    console.log("In Sibling 1", this.name);
    this.data.value = this.name
  

  }

}
