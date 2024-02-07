import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playingTime',
  standalone: true
})
export class PlayingTimePipe implements PipeTransform {

  transform(value: string): string {
    if(!value.match(/^PT\d{2}M\d{2}\.\d{2}S/))
     throw new Error("String doesn't match required format");

    return value.substring(2,4) + ':' + value.substring(5,7);
  }

}
