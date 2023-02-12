import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchText: string) {
    if (value.length === 0 || searchText === '') {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      if (item.title.toLowerCase().includes(searchText.toLowerCase())) {
        resultArray.push(item);
      }
    }
    return resultArray;
    // if (!value) return [];
    // if (!searchText) return value;
    // searchText = searchText.toLowerCase();
    // return value.filter((it: { title: string; }) => {
    //   return it.title.toLowerCase().includes(searchText);
    // });
  }
}

