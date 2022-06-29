import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class AirlineFilterPipe implements PipeTransform {

  transform(list: any[], value: string) {
  
console.log(list)
console.log(value)
    return value ? list.filter(item => item.name.includes(value)) : list;
    console.log(list);
  }

}