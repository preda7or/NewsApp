import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'reprocess'
})
export class ReprocessPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: any, args?: any): SafeHtml {
    let content = String(value);

    // make images fluid
    content = content.replace(/<img\s/gi, '<img class="img-fluid" ');

    // replace article urls to local link
    // e.g.: https://www.theguardian.com/world/2017/dec/07/uk-acid-attacks-2017-likely-new-record
    // content = content.replace(/(<a\s.*?)(?:href="https:\/\/www\.theguardian\.com)([^"]*(?:")|)([^>]*>)/gi, `$1data-link="$2"$3`);

    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
