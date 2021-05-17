export interface DailyData {
  location: string,
  time: string,
  usage: number | '',
  [index: string]: string | number | null
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

export interface CarbonApiResponse {
  data: {
    id: string,
    type: string,
    attributes: {
      country: string,
      state: string,
      electricity_unit: string,
      electricity_value: string,
      estimated_at: string,
      carbon_g: number,
      carbon_lb: number,
      carbon_kg: number,
      carbon_mt: number
    }
  }
}

export interface CarbonData {
  day: string,
  carbon: number,
  time: string
}