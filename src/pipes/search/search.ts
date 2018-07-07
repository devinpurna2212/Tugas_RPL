import { Pipe, PipeTransform } from '@angular/core';
import { Data } from '../../providers/data';
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], terms: string): any[] {
    if(!items) return [];
    if(!terms) return data;
    terms = terms.toLowerCase();
    return items.filter( data => {
      return data.nim.toLowerCase().includes(terms);
    });
  }
}
