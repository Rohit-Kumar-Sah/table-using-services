import { Component } from '@angular/core';
import { MyService } from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  providers : [MyService]
})
export class AppComponent {
  title = 'ServiceData';

  constructor(private data : MyService){}

  

}
