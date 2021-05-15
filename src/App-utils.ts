import { WeeklyData, CarbonData } from 'interfaces';
import { getCarbonEstimation } from 'apiService';

export async function fetchWeeklyCarbonData (weeklyData: WeeklyData) {
  let carbonData: CarbonData[] = [];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  for (let i = 0; i < days.length; i++) {
    const day = days[i];
    console.log('usage');
    console.log(weeklyData[day].usage);

    if (weeklyData[day].usage !== null &&  weeklyData[day].usage! > 0) {
      const carbonApiResponse = await getCarbonEstimation(weeklyData[day].location!, weeklyData[day].usage!);
      const carbon = carbonApiResponse.data.attributes.carbon_kg;
      carbonData.push({day, carbon: carbon, time: weeklyData[day].time!});
    } else {
      carbonData.push({day, carbon: 0, time: weeklyData[day].time!});
    }
  }

  return carbonData;
}