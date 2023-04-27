import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    var temp="";

    for(let item of String(value))
    {
    temp=item+temp;
    }
    return temp;
  }

}
