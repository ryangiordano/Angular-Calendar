import { Injectable } from '@angular/core';
import { CalendarData } from '../../utility/CalendarData';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CalendarDataService {
  private calendarUpdatedSource = new Subject<CalendarData>();
  public calendarUpdated$ = this.calendarUpdatedSource.asObservable();
  public updateCalendar(calendarData:CalendarData):void{
    this.calendarUpdatedSource.next(calendarData);
  }
  constructor() { }

}
