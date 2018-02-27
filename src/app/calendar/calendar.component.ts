import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  private currentDate:Date;
  private currentDateString:string;
  constructor() { 
    this.currentDate = new Date();
    this.currentDateString = this.currentDateToString();
    console.log(this.currentDateString)
  }
  currentDateToString():string{
    let date = this.currentDate;
    return `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`;
  }
  ngOnInit() {

  }
  private dateChanged(e){
    console.log(this.currentDateString)
  }
}
