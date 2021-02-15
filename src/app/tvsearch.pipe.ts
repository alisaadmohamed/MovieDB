import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tvsearch'
})
export class TvsearchPipe implements PipeTransform {

  transform(tvlist:any[], term:string): any[] {
console.log(tvlist);
    if(term ===''){

      return tvlist
    }
    else{

      return tvlist.filter((tv)=>tv.original_name.toLowerCase().includes(term.toLowerCase()));
    }
  }

}
