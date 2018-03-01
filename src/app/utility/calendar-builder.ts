import { CalendarData } from "./CalendarData";
let Holidays = require('date-holidays');

export class CalendarBuilder {
    public calendar: Calendar;
    private startDate: Date;
    private endDate: Date;
    private hd: any;
    constructor(data: CalendarData) {
        this.hd = new Holidays();
        this.hd.init(data.countryCode);

        this.startDate = new Date(data.date);
        this.startDate.setDate(this.startDate.getDate() + 1)

        let days = data.numberOfDays;
        this.endDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate() + days);

        this.calendar = new Calendar();
    }

    public monthToString(month: number) {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return monthNames[month];
    }
    public createCalendars() {
        let currentDate = new Date(this.startDate);

        currentDate.setDate(1);
        while (currentDate <= this.endDate) {
            this.createCalendarMonth(currentDate);
            currentDate.setMonth(currentDate.getMonth() + 1);
        }
        this.setSelectedDays(this.startDate, this.endDate);
    }

    private createCalendarMonth(startDate?: Date) {
        const date = startDate,
            year = date.getFullYear(),
            daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
            firstDay = date.getDay() - 1;

        const month = new Month([], this.monthToString(date.getMonth()), year);
        let nonMonthDaysInserted: boolean = false,
            week = new Week();


        for (let i = 1; i <= daysInMonth + firstDay; i++) {
            if (!nonMonthDaysInserted) {
                for (let x = 0; x <= firstDay; x++) {

                    week.days.push(new Day());
                }
            }
            nonMonthDaysInserted = true;
            if (week.days.length % 7 == 0) {
                month.weeks.push(week);
                week = new Week();
            }
            let newDate = new Date(date.getFullYear(), date.getMonth(), i);

            newDate.setDate(i);


            week.days.push(new Day(newDate));
            if (i >= daysInMonth) {
                while (week.days.length < 7) {
                    week.days.push(new Day());
                }
                month.weeks.push(week);
                break;
            }

        }
        this.calendar.months.push(month);

    }
    private setSelectedDays(startDate: Date, endDate: Date) {
        startDate.setDate(startDate.getDate() - 1);
        this.calendar.months.forEach(m => {
            m.weeks.forEach(week => {
                week.days.map(d => {
                    if (d.date > startDate && d.date < endDate) {
                        d.isSelected = true;
                    }
                    if (this.isHoliday(d.date)) {
                        d.holiday = true;
                        d.holidayName = this.getHoliday(d.date).name;
                    }
                })

            })
        })
    }
    public getHolidaysFor(year: number) {
        return this.hd.getHolidays(year);
    }
    public isHoliday(date: Date) {
        if (this.hd.isHoliday(date)) {
            return true;
        } else {
            return false;
        }
    }
    public getHoliday(date: string) {
        return this.hd.isHoliday(date);
    }
}
export class Calendar {
    constructor(public months?: Month[]) {

        this.months = months || new Array<Month>();
    }
}
export class Month {
    constructor(public weeks: Week[], public name: string, public year: number) {

    }

}
export class Week {
    constructor(public days?: Day[]) {
        this.days = days || new Array<Day>();
    }
}
export class Day {
    public dateNumber: number;
    public weekend: boolean;
    public holiday: boolean;
    public isSelected: boolean;
    public invalid: boolean;
    public holidayName: string;
    constructor(public date?: any) {

        this.date = date;
        if (date != undefined) {

            this.dateNumber = date.getDate();
            this.weekend = date.getDay() == 0 || date.getDay() == 6;
        } else {

            this.date = {};
            this.invalid = true;
        }


    }
}