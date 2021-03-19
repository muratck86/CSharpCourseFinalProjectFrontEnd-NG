import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Product[], searchText: string): Product[] {
    searchText = searchText?searchText.toLocaleLowerCase():""
    return searchText.length > 2 ?
    value.filter((p:Product) => p.productName.toLocaleLowerCase().indexOf(searchText) !== -1)
    :
    value
  }

}
