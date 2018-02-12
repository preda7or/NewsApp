import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanurl'
})
export class CleanUrlPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return String(value).replace(
      /^\s*(http[s]?:\/\/(?:www\.)?theguardian\.com\/)?\/?|\s*$/gi,
      ''
    );
  }
}
