import { Pipe, PipeTransform } from '@angular/core';
import { Quotes } from './quotes'


@Pipe({
  name: 'dateCounter'
})
export class DateCounterPipe implements PipeTransform {

  transform(value: any):any{
    console.log(value);
    let today: Date= new Date();
    console.log(today)
    let todayWithNoTime:any= Date.UTC(today.getFullYear(),today.getMonth(),today.getDate())
    console.log(todayWithNoTime);
    let dateDifference=Math.floor(todayWithNoTime-value);
    console.log(dateDifference)
    if (dateDifference>=1 && value<todayWithNoTime){
      return dateDifference;
    }
    else{
      return "today"
    }
  }

}
