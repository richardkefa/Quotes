import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCounter'
})
export class DateCounterPipe implements PipeTransform {

  transform(value: any):any{
    let today: Date= new Date();
    let todayWithNoTime:any= new Date(today.getFullYear(),today.getMonth(),today.getDate())
    let dateDifference=Math.abs(todayWithNoTime-value);
    const secondsInDay=86400;
    let dateDifferenceSeconds=dateDifference/1000;
    let dateCount=dateDifferenceSeconds/secondsInDay;
    if (dateCount>=1 && value<todayWithNoTime){
      return dateCount;
    }
    else{
      return "today"
    }
  }

}
