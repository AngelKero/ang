import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deleteRepeat'
})
export class DeleteRepeatPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
