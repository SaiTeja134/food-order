import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: false
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[] {
    if (!items) return [];
    if (!searchTerm) return items;

    searchTerm = searchTerm.toLowerCase();

    const data =  items.filter(item => {
      return (
        item.name.toLowerCase().includes(searchTerm) ||
        (item.email && item.email.toString().includes(searchTerm))
      
      );
    });
    console.log(data);
    return data;
  }

}
