import { render, screen } from '@testing-library/react';
import DataTable from './DataTable';
import { mockData } from 'mockdata/mockWeeklyData';

describe('should render data table', () => {
  const dataChangeHandler = jest.fn();

  beforeEach(() => {
    render(
      <DataTable weeklyData={mockData} dataChangeHandler={dataChangeHandler}/>
    );
  })

  it('should render table headers', () => {
    expect(screen.getByText('Day')).toBeInTheDocument();
    expect(screen.getByText('Time')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
    expect(screen.getByText('Usage (mwh)')).toBeInTheDocument();
  })

  it('should render days', () => {
    expect(screen.getByText('Monday')).toBeInTheDocument();
    expect(screen.getByText('Tuesday')).toBeInTheDocument();
    expect(screen.getByText('Wednesday')).toBeInTheDocument();
    expect(screen.getByText('Thursday')).toBeInTheDocument();
    expect(screen.getByText('Friday')).toBeInTheDocument();
    expect(screen.getByText('Saturday')).toBeInTheDocument();
    expect(screen.getByText('Sunday')).toBeInTheDocument();
  })
})