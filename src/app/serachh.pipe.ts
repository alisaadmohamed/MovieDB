import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serachh'
})
export class SerachhPipe implements PipeTransform {

  transform(movieslista:any[] , term:string): any[] {

      if (term ===''){


        return movieslista
      }

      else{
        return movieslista.filter((moviee)=> moviee.title.toLowerCase().includes(term.toLowerCase()));
      }

   
      }
    
    };
    
      
      
   