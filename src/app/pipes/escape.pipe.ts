import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'escape'
})
export class EscapePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return encodeURIComponent(value);
  }
}
