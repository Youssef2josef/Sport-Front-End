import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teamFilter'
})
export class TeamFilterPipe implements PipeTransform {

  transform(objs:any, term:any): any {
    if (term === undefined) {
    
      return objs;
      
      }
      
      return objs.filter((obj)=> {
      
      return (obj.name.toLowerCase().includes(term.toLowerCase()) 
      ||obj.owner.toLowerCase().includes(term.toLowerCase())
      ||obj.staduim.toLowerCase().includes(term.toLowerCase())
      );
      
      })  
    }

}
