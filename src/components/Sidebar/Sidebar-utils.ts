import { WeeklyData } from 'interfaces';

export const blankData: WeeklyData = {
  Monday: {location: null, time: null, usage: null},
  Tuesday: {location: null, time: null, usage: null},
  Wednesday: {location: null, time: null, usage: null},
  Thursday: {location: null, time: null, usage: null},
  Friday: {location: null, time: null, usage: null},
  Saturday: {location: null, time: null, usage: null},
  Sunday: {location: null, time: null, usage: null}
}

export function formHasMissingData (data: WeeklyData) {
  const days = Object.values(data);

  for (let day of days) {
    if (!day.location || day.usage === null || day.time === null) {
      return true;
    }
  }

  return false;
}