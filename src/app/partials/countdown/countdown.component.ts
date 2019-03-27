import {Component, Input } from '@angular/core';
import * as moment from 'moment';
import { PreciseDiff } from '../../classes/PreciseDiff';

interface DateTime {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent {
  @Input() text: string | undefined;
  @Input() endDate: string;

  datetime: DateTime = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  diffTool = new PreciseDiff();

  constructor() {
    this.countdown();
  }

  countdown() {
    setInterval(this.calculateTimeLeft.bind(this), 1000);
  }

  calculateTimeLeft() {
    const now = moment();
    const endDate = moment(this.endDate);

    const diff = this.diffTool.precisionDiffObj(now, endDate);

    this.datetime = {
      years: diff.years,
      months: diff.months,
      days: diff.days,
      hours: diff.hours,
      minutes: diff.minutes,
      seconds: diff.seconds
    };
  }
}
