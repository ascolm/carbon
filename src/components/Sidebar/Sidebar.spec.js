import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Sidebar from './Sidebar';
import { mockDataInput } from 'mockdata/mockWeeklyData';

describe('should render sidebar', () => {
  beforeEach(() => {
    render(
      <Sidebar drawerIsOpen={true} drawerHandler={jest.fn()} calculateCarbon={jest.fn()}/>
    );
  })

  it('should render generate graph button', () => {
    expect(screen.getByRole('button', {name: 'Generate graph button'})).toBeInTheDocument();
  })
})

it ('should display an error message if any data is missing', () => {
  render(
    <Sidebar drawerIsOpen={true} drawerHandler={jest.fn()} calculateCarbon={jest.fn()}/>
  );
  const generateButton = screen.getByRole('button', {name: 'Generate graph button'});
  userEvent.click(generateButton);
  expect(screen.getByText('Please make sure you fill out all fields.')).toBeInTheDocument();
})

it ('should fill out the form and call api service with correct data', () => {
  const calculateCarbonMock = jest.fn();

  render(
    <Sidebar drawerIsOpen={true} drawerHandler={jest.fn()} calculateCarbon={calculateCarbonMock}/>
  );

  userEvent.type(screen.getByLabelText('Time input for Monday'), '12:20');
  fireEvent.change(screen.getByLabelText('Location input for Monday').nextSibling, {target: {value: 'us'}});
  userEvent.type(screen.getByLabelText('Usage input for Monday'), '10');

  userEvent.type(screen.getByLabelText('Time input for Tuesday'), '13:20');
  fireEvent.change(screen.getByLabelText('Location input for Tuesday').nextSibling, {target: {value: 'us'}});
  userEvent.type(screen.getByLabelText('Usage input for Tuesday'), '20');

  userEvent.type(screen.getByLabelText('Time input for Wednesday'), '14:20');
  fireEvent.change(screen.getByLabelText('Location input for Wednesday').nextSibling, {target: {value: 'us'}});
  userEvent.type(screen.getByLabelText('Usage input for Wednesday'), '30');

  userEvent.type(screen.getByLabelText('Time input for Thursday'), '15:20');
  fireEvent.change(screen.getByLabelText('Location input for Thursday').nextSibling, {target: {value: 'us'}});
  userEvent.type(screen.getByLabelText('Usage input for Thursday'), '40');

  userEvent.type(screen.getByLabelText('Time input for Friday'), '16:20');
  fireEvent.change(screen.getByLabelText('Location input for Friday').nextSibling, {target: {value: 'us'}});
  userEvent.type(screen.getByLabelText('Usage input for Friday'), '50');

  userEvent.type(screen.getByLabelText('Time input for Saturday'), '17:20');
  fireEvent.change(screen.getByLabelText('Location input for Saturday').nextSibling, {target: {value: 'us'}});
  userEvent.type(screen.getByLabelText('Usage input for Saturday'), '60');

  userEvent.type(screen.getByLabelText('Time input for Sunday'), '18:20');
  fireEvent.change(screen.getByLabelText('Location input for Sunday').nextSibling, {target: {value: 'us'}});
  userEvent.type(screen.getByLabelText('Usage input for Sunday'), '70');

  userEvent.click(screen.getByRole('button', {name: 'Generate graph button'}));

  expect(calculateCarbonMock).toBeCalledTimes(1);
  expect(calculateCarbonMock.mock.calls[0].length).toBe(1);
  expect(calculateCarbonMock.mock.calls[0][0]).toEqual(mockDataInput);
});