import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDemoPipe'
})
export class MyDemoPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(!value) return null;
    return value.toString().toUpperCase()+' - transformed by MyDemoPipe';
    return null;
  }

}
