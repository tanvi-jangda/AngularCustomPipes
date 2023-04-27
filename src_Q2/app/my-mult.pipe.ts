import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    var res : number;
    res = Number(value) * Number(args[0]);
    return res;
  }
}
