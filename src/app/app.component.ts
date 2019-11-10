import { Component } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'julissa';
  options = false;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    const elemDropdown = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elemDropdown, {
      // coverTrigger: false
      hover: true ,
      alignment: "right"
    });
  }
  displayOptions(){
    if (this.options){
      this.options=false;
    }
    else{
      this.options=true;
    }
    return
  }

}
