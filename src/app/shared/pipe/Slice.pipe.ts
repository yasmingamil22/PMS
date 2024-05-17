import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceText'

})
export class SlicePipe implements PipeTransform {

  transform(value: string, length: number): string {
    if (value.length <= length) {
      return value;
    } else {
      return value.slice(0, length) + '...';
    }
  }

}
