import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upcase',
})
export class UpcasePipe implements PipeTransform {
  public transform(value: string): string {
    return value.toUpperCase();
  }
}
