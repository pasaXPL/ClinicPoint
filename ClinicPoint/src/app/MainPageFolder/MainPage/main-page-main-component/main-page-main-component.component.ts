import { Component, ViewChild, Renderer2, ElementRef  } from '@angular/core';
import { Sidenav, initTE, } from "tw-elements";
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-main-page-main-component',
  templateUrl: './main-page-main-component.component.html',
  styleUrls: ['./main-page-main-component.component.scss']
})
export class MainPageMainComponentComponent {
  @ViewChild('sidebarButton') sidebarButton!:ElementRef;
  constructor(private authService: AuthService) {}


  ngOnInit() {
    initTE({ Sidenav });
  }

  logoutUser(){
    if (window.confirm('Are you sure you want to logout?')) {
      this.authService.logout();
    }
  }

  toggleSideBar() {
    this.sidebarButton.nativeElement.click();
  }
}
