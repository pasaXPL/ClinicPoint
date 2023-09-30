import { Component } from '@angular/core';
import { Sidenav, initTE, } from "tw-elements";

@Component({
  selector: 'app-main-page-main-component',
  templateUrl: './main-page-main-component.component.html',
  styleUrls: ['./main-page-main-component.component.scss']
})
export class MainPageMainComponentComponent {

  ngOnInit() {
    initTE({ Sidenav });
  }
}
