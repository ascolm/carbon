import config from 'config';
import { CarbonApiResponse } from 'interfaces';

export async function getCarbonEstimation (location: string, usage: number | null): Promise<CarbonApiResponse>{
  if (usage === null) usage = 0;

  const bodyParams = {
    type: 'electricity',
    electricity_value: usage,
    electricity_unit: 'mwh',
    country: location
  }

  const response = await fetch (config.apiUrl, {
    method: 'POST',
    body: JSON.stringify(bodyParams),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + config.apiKey
    }
  });

  const estimation: CarbonApiResponse = await response.json();
  return estimation;
}