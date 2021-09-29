import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name = 'ToDoList';

  products = [{
    name: 'make piece with my Bubochka',
    time: 'as soon as possible',
    reason: 'because he understands me better than anyone',
    status: true
  }, {
    name: 'make piece with my Bubochka',
    time: 'very fast because we just can`t fight long...it is not good thing to do together',
    reason: 'because i need him very much',
    status: true
  }, {
    name: 'make piece with my Bubochka',
    time: 'we can`t fight long because you can`t live long without me:))))',
    reason: 'because i am sorry i am very deep digger...sorry',
    status: false
  }]

  isOpenMenu = false;

  openDropDown() {
    this.isOpenMenu = !this.isOpenMenu
  }

}
