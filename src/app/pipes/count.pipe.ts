import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
   return value < 1 ?"out stock" : "in stock";
  }
 
     
}