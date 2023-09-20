import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any) {
    let ch=""
    for (let i = 0; i < value.length; i++) {
     ch = value[i]+ ch;
      
    }
    return ch.toUpperCase();
  }

}
