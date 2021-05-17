import { fireEvent, render, screen, act } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import * as appUtils from 'App-utils';
import { mockCarbonData } from 'mockdata/mockWeeklyData';

describe( 'should handle data submission', () => {
  it ('should display an error message if API service fails', async () => {
    render(
      <App/>
    )

    const spy = jest.spyOn(appUtils, 'fetchWeeklyCarbonData');
    spy.mockImplementation(() => { throw new Error(); });

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


    const generateButton = screen.getByRole('button', {name: 'Generate graph button'});

    await act(async () => {
      userEvent.click(generateButton);
    });

    expect(screen.getByText('Carbon estimation could not be fetched. Please try again later.')).toBeInTheDocument();
  });

  it ('should render graph after fetching carbon estimation', async () => {
    render(
      <App/>
    )

    const spy = jest.spyOn(appUtils, 'fetchWeeklyCarbonData');
    spy.mockResolvedValue(mockCarbonData);

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

    const generateButton = screen.getByRole('button', {name: 'Generate graph button'});

    await act(async () => {
      userEvent.click(generateButton);
    });

    expect(screen.getByText('Carbon Usage (kg)')).toBeInTheDocument();
  });
})