import { Component, Input, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page1',
  imports: [FormsModule],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.sass'
})
export class Page1Component {

   @Input() value = 0;
   submmited = output<void | number>();
   inValue = 0;

   submit() {
      console.log('submit');
      this.submmited.emit(this.inValue);
   }
}
