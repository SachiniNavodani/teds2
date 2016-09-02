import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../login/login.component';

@Component({
  moduleId: module.id,
  selector: 'content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.css'],
  directives:[LoginComponent]
 
  
})

export class ContentComponent implements OnInit {
  show=false;
  hide=true;
  constructor() { 
   
  }
  
  ngOnInit() {


  }
  show_login(){
      this.show=true;
      this.hide=false;

  }
  hide_login(){
     this.show=false;
     this.hide=true;
  }
}
