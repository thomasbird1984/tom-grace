/**
 * PreciseDiff is built based off of the package moment-precise-range
 * https://github.com/codebox/moment-precise-range
 */
import * as moment from 'moment';

interface DateTime {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  firstDateWasLater: boolean;
}

export class PreciseDiff {
  strings = {
    nodiff: '',
    year: 'year',
    years: 'years',
    month: 'month',
    months: 'months',
    day: 'day',
    days: 'days',
    hour: 'hour',
    hours: 'hours',
    minute: 'minute',
    minutes: 'minutes',
    second: 'second',
    seconds: 'seconds',
    delimiter: ' '
  };

  pluralize(num, word) {
    return num + ' ' + this.strings[word + (num === 1 ? '' : 's')];
  }

  buildStringFromValues(yDiff, mDiff, dDiff, hourDiff, minDiff, secDiff): string {
    const result = [];

    if (yDiff) {
      result.push(this.pluralize(yDiff, 'year'));
    }
    if (mDiff) {
      result.push(this.pluralize(mDiff, 'month'));
    }
    if (dDiff) {
      result.push(this.pluralize(dDiff, 'day'));
    }
    if (hourDiff) {
      result.push(this.pluralize(hourDiff, 'hour'));
    }
    if (minDiff) {
      result.push(this.pluralize(minDiff, 'minute'));
    }
    if (secDiff) {
      result.push(this.pluralize(secDiff, 'second'));
    }

    return result.join(this.strings.delimiter);
  }

  buildValueObject(yDiff, mDiff, dDiff, hourDiff, minDiff, secDiff, firstDateWasLater): DateTime {
    return {
      years   : yDiff,
      months  : mDiff,
      days    : dDiff,
      hours   : hourDiff,
      minutes : minDiff,
      seconds : secDiff,
      firstDateWasLater : firstDateWasLater
    };
  }

  public precisionDiffObj(d1, d2): DateTime {
    let m1 = moment(d1);
    let m2 = moment(d2);
    let firstDateWasLater = false;

    m1.add(m2.utcOffset() - m1.utcOffset(), 'minutes'); // shift timezone of m1 to m2

    if (m1.isSame(m2)) {
      return this.buildValueObject(0, 0, 0, 0, 0, 0, false);
    }
    if (m1.isAfter(m2)) {
      const tmp = m1;
      m1 = m2;
      m2 = tmp;
      firstDateWasLater = true;
    } else {
      firstDateWasLater = false;
    }

    let yDiff = m2.year() - m1.year();
    let mDiff = m2.month() - m1.month();
    let dDiff = m2.date() - m1.date();
    let hourDiff = m2.hour() - m1.hour();
    let minDiff = m2.minute() - m1.minute();
    let secDiff = m2.second() - m1.second();

    if (secDiff < 0) {
      secDiff = 60 + secDiff;
      minDiff--;
    }
    if (minDiff < 0) {
      minDiff = 60 + minDiff;
      hourDiff--;
    }
    if (hourDiff < 0) {
      hourDiff = 24 + hourDiff;
      dDiff--;
    }
    if (dDiff < 0) {
      const daysInLastFullMonth = moment(m2.year() + '-' + (m2.month() + 1), 'YYYY-MM').subtract(1, 'M').daysInMonth();
      if (daysInLastFullMonth < m1.date()) { // 31/01 -> 2/03
        dDiff = daysInLastFullMonth + dDiff + (m1.date() - daysInLastFullMonth);
      } else {
        dDiff = daysInLastFullMonth + dDiff;
      }
      mDiff--;
    }
    if (mDiff < 0) {
      mDiff = 12 + mDiff;
      yDiff--;
    }

    return this.buildValueObject(yDiff, mDiff, dDiff, hourDiff, minDiff, secDiff, firstDateWasLater);
  }

  public precisionDiffString(d1, d2): string {
    let m1 = moment(d1);
    let m2 = moment(d2);
    let firstDateWasLater = false;

    m1.add(m2.utcOffset() - m1.utcOffset(), 'minutes'); // shift timezone of m1 to m2

    if (m1.isSame(m2)) {
      return this.strings.nodiff;
    }
    if (m1.isAfter(m2)) {
      const tmp = m1;
      m1 = m2;
      m2 = tmp;
      firstDateWasLater = true;
    } else {
      firstDateWasLater = false;
    }

    let yDiff = m2.year() - m1.year();
    let mDiff = m2.month() - m1.month();
    let dDiff = m2.date() - m1.date();
    let hourDiff = m2.hour() - m1.hour();
    let minDiff = m2.minute() - m1.minute();
    let secDiff = m2.second() - m1.second();

    if (secDiff < 0) {
      secDiff = 60 + secDiff;
      minDiff--;
    }
    if (minDiff < 0) {
      minDiff = 60 + minDiff;
      hourDiff--;
    }
    if (hourDiff < 0) {
      hourDiff = 24 + hourDiff;
      dDiff--;
    }
    if (dDiff < 0) {
      const daysInLastFullMonth = moment(m2.year() + '-' + (m2.month() + 1), 'YYYY-MM').subtract(1, 'M').daysInMonth();
      if (daysInLastFullMonth < m1.date()) { // 31/01 -> 2/03
        dDiff = daysInLastFullMonth + dDiff + (m1.date() - daysInLastFullMonth);
      } else {
        dDiff = daysInLastFullMonth + dDiff;
      }
      mDiff--;
    }
    if (mDiff < 0) {
      mDiff = 12 + mDiff;
      yDiff--;
    }

    return this.buildStringFromValues(yDiff, mDiff, dDiff, hourDiff, minDiff, secDiff);
  }
}
