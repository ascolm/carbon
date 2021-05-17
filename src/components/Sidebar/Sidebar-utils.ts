import { WeeklyData } from 'interfaces';

export const blankData: WeeklyData = {
  Monday: {location: '', time: '', usage: ''},
  Tuesday: {location: '', time: '', usage: ''},
  Wednesday: {location: '', time: '', usage: ''},
  Thursday: {location: '', time: '', usage: ''},
  Friday: {location: '', time: '', usage: ''},
  Saturday: {location: '', time: '', usage: ''},
  Sunday: {location: '', time: '', usage: ''}
}

export function formHasMissingData (data: WeeklyData) {
  const days = Object.values(data);

  for (let day of days) {
    if (day.location === '' || day.usage === '' || day.time === '') {
      return true;
    }
  }

  return false;
}