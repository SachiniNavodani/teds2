import { Component } from '@angular/core';
import {MenubarComponent} from './menubar/menubar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ContentComponent} from './content/content.component';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[MenubarComponent,SidebarComponent,ContentComponent]
})
export class AppComponent {
 show=false;
  vlist1;
  vlist2;
  vlist3;
  vlist4;
  icon="glyphicon glyphicon-chevron-right";
  status=1;


cntrlSideNav(){

   if(this.status==1){

    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    this.vlist1='   Home';
    this.vlist2='   DashBord';
    this.vlist3='   page1';
    this.vlist4='   page2';
    this.icon="glyphicon glyphicon-chevron-left";
    document.getElementById("btn").style.marginLeft = "200px";
    this.status=0;

    }else{
    document.getElementById("mySidenav").style.width ="50px";
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
