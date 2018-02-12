import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bigthumb'
})
export class BigthumbPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value == null) {
      return value;
    }
    return String(value).replace(/500\.jpg$/i, '1000.jpg');
  }
}
