import { formHasMissingData } from './Sidebar-utils';
import { mockData } from 'mockdata/mockWeeklyData';

it('should return false if there is any data missing', () => {
  expect(formHasMissingData(mockData)).toBe(false);

  const mockWithMissingTime = Object.assign({}, mockData);
  mockWithMissingTime['Monday'].time = '';
  expect(formHasMissingData(mockWithMissingTime)).toBe(true);

  const mockWithMissingLocation = Object.assign({}, mockData);
  mockWithMissingLocation['Wednesday'].time = '';
  expect(formHasMissingData(mockWithMissingLocation)).toBe(true);

  const mockWithMissingUsage = Object.assign({}, mockData);
  mockWithMissingUsage['Friday'].time = '';
  expect(formHasMissingData(mockWithMissingUsage)).toBe(true);
})
