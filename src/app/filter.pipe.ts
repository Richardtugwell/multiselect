import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) { return []; }
        if (!searchText) { return items; }
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            for (const field in it) {
                if (it.hasOwnProperty(field)) {
                    if (it[field].toString().toLowerCase().includes(searchText)) {
                        return true;
                    }
                }
            }
        });
    }
}
