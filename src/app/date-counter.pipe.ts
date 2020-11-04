import { Pipe, PipeTransform } from '@angular/core';
import { Quotes } from './quotes'


@Pipe({
  name: 'dateCounter'
})
export class DateCounterPipe implements PipeTransform {

  transform(value: any):any{
    console.log(value);
    let today: any= new Date();
    console.log(today);
    let dateDifference=Math.abs(value-today);
    console.log(dateDifference);
    var dateDifferenceSeconds=dateDifference/1000;
    const secondsInDay=86400;
    var daysPassed=Math.floor(dateDifferenceSeconds/secondsInDay);
    if (dateDifference>=1 && value<today){
      return daysPassed;
    }
    else{
      return "today"
    }
  }

}
