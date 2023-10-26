import { Component } from '@angular/core';
import { Modal, Ripple, Input, initTE, Select, Datepicker} from "tw-elements";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClinicPoint';

  ngOnInit(){
    initTE({ Modal, Ripple, Input, Select, Datepicker });
  }
}
