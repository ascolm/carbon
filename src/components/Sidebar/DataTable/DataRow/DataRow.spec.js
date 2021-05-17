import { render, screen } from '@testing-library/react';
import DataRow from './DataRow';
import { Table, TableBody } from '@material-ui/core';
import { mockData } from 'mockdata/mockWeeklyData';
import { usageIsValid } from './DataRow-utils';

describe('should render data row for a day', () => {
  const dataChangeHandler = jest.fn();

  beforeEach(() => {
    render(
      <Table>
        <TableBody>
          <DataRow day={'Monday'} dayData={mockData['Monday']} dataChangeHandler={dataChangeHandler}/>
        </TableBody>
      </Table>
    );
  })

  it('should render input fields for the given day', () => {
    expect(screen.getByRole('button', {name: 'Location input for Monday'})).toBeInTheDocument();
    expect(screen.getByLabelText('Time input for Monday')).toBeInTheDocument();
    expect(screen.getByRole('textbox', {name: 'Usage input for Monday'})).toBeInTheDocument();
  })

  it('should render the name of the day', () => {
    expect(screen.getByText('Monday')).toBeInTheDocument();
  })

  it('should only allow positive decimals in usage input', () => {
    expect(usageIsValid('a')).toBe(false);
    expect(usageIsValid('.')).toBe(false);
    expect(usageIsValid(',')).toBe(false);
    expect(usageIsValid('-')).toBe(false);
    expect(usageIsValid('-3')).toBe(false);
    expect(usageIsValid('12.0.')).toBe(false);
    expect(usageIsValid('12,0.1')).toBe(false);
    expect(usageIsValid('12.0,1')).toBe(false);
    expect(usageIsValid('12,0,1')).toBe(false);
    expect(usageIsValid('12')).toBe(true);
    expect(usageIsValid('0')).toBe(true);
    expect(usageIsValid('12,0')).toBe(true);
    expect(usageIsValid('12.0')).toBe(true);
    expect(usageIsValid('0.1')).toBe(true);
    expect(usageIsValid('0,1')).toBe(true);
  });
})


