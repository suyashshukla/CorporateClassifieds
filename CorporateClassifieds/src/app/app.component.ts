import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CorporateClassifieds';

  ngOnInit(){
   // this.click('classifieds');
  }


  click(id:string){
    var item = document.getElementById(id);
    var values = document.getElementsByClassName("active");
    values[0].className = values[0].className.replace(" active","");
    item.className = item.className+" active";    
  } 

}
