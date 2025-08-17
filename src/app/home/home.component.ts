import { Component } from '@angular/core';
import { Page1Component } from '../page1/page1.component';
import { FormsModule } from '@angular/forms';
import { MyDemoPipePipe } from "../my-demo-pipe.pipe";

@Component({
  selector: 'app-home',
  imports: [Page1Component, FormsModule, MyDemoPipePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  childData: number | void = 0;

  submitData(value: void | number) {
    console.log('Data submitted from Page1:', value);
    // alert(value);
    this.childData = value;
  }
}
