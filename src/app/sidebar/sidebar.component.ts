import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  show=false;
  vlist1;
  vlist2;
  vlist3;
  vlist4;
  icon="glyphicon glyphicon-chevron-right";
  status=1;

  constructor() { }

  ngOnInit() {
    
  }

 



cntrlSideNav(){

   if(this.status==1){

    document.getElementById("Sidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    this.vlist1='   Home';
    this.vlist2='   DashBord';
    this.vlist3='   page1';
    this.vlist4='   page2';
    this.icon="glyphicon glyphicon-chevron-left";
    document.getElementById("btn").style.marginLeft = "200px";
    this.status=0;

    }else{
    document.getElementById("Sidenav").style.width ="50px";
    document.getElementById("main").style.marginLeft= "50px";
     this.vlist1='';
     this.vlist2='';
     this.vlist3='';
     this.vlist4='';
     this.icon="glyphicon glyphicon-chevron-right";
     document.getElementById("btn").style.marginLeft = "4px";
      this.status=1;
   
              }
   

}



}
