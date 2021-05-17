import { WeeklyData, DailyData, CarbonData } from 'interfaces';

export const mockData: WeeklyData = {
  Monday: {location: 'us', time: '12:20', usage: 10},
  Tuesday: {location: 'us', time: '13:20', usage: 20},
  Wednesday: {location: 'us', time: '14:20', usage: 30},
  Thursday: {location: 'us', time: '15:20', usage: 40},
  Friday: {location: 'us', time: '16:20', usage: 50},
  Saturday: {location: 'us', time: '17:20', usage: 60},
  Sunday: {location: 'us', time: '18:20', usage: 70}
}

type DailyDataInput = Omit<DailyData, 'usage'> & {usage: string};
type WeeklyDataInput = {[day: string]: DailyDataInput};

export const mockDataInput: WeeklyDataInput = {
  Monday: {location: 'us', time: '12:20', usage: '10'},
  Tuesday: {location: 'us', time: '13:20', usage: '20'},
  Wednesday: {location: 'us', time: '14:20', usage: '30'},
  Thursday: {location: 'us', time: '15:20', usage: '40'},
  Friday: {location: 'us', time: '16:20', usage: '50'},
  Saturday: {location: 'us', time: '17:20', usage: '60'},
  Sunday: {location: 'us', time: '18:20', usage: '70'}
}

export const mockCarbonData: CarbonData[] = [
  {day: 'Monday', carbon: 10, time: '12:10'},
  {day: 'Tuesday', carbon: 15, time: '12:20'},
  {day: 'Wednesday', carbon: 20, time: '10:15'},
  {day: 'Thursday', carbon: 20, time: '10:00'},
  {day: 'Friday', carbon: 18, time: '08:13'},
  {day: 'Saturday', carbon: 27, time: '14:32'},
  {day: 'Sunday', carbon: 30, time: '16:10'}
];