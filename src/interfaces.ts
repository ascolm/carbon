export interface DailyData {
  location: string,
  time: string,
  usage: string
}

export interface WeeklyData {
  Monday: DailyData,
  Tuesday: DailyData,
  Wednesday: DailyData,
  Thursday: DailyData,
  Friday: DailyData,
  Saturday: DailyData,
  Sunday: DailyData,
  [index: string]: DailyData
}