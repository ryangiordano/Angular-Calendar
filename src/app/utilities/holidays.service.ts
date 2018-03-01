import { Injectable } from '@angular/core';
import {Holidays} from 'date-holidays';
@Injectable()
export class HolidaysService {
  private hd:Holidays;
  constructor() { 
    this.hd = new Holidays();

  }


}
