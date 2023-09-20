import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerFilter'
})
export class PlayerFilterPipe implements PipeTransform {

  transform(objs:any, term:any): any {
    if (term === undefined) {
      return objs;
      }
      else{
      return objs.filter((obj)=> {
      return (obj.name.toLowerCase().includes(term.toLowerCase())
      );
      
      })  }
    }


}
