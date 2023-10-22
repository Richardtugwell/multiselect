import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], search: any): any[] {
      if (!items) { return []; }
      if (!search.text) { return items; }
      const searchText = search.text.toLowerCase();
      return items.filter(it => {
          if (it.hasOwnProperty(search.field)) {
              if (it[search.field].toString().toLowerCase().startsWith(searchText)) {
                  return true;
              } else return false
          } else return false
      });
    }
}
