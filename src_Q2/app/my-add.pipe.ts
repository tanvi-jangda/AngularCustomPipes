import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    var res:number;
    res=Number(value)+Number(args[0]);
    return res;
  }

}
