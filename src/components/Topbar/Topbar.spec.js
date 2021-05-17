import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Topbar from './Topbar';

describe('should render topbar', () => {
  const drawerHandlerMock = jest.fn();

  beforeEach(() => {
    render(
      <Topbar drawerIsOpen={true} drawerHandler={drawerHandlerMock}/>
    );
  })

  it('should render the drawer button', () => {
    expect(screen.getByRole('button', {name: 'open drawer'})).toBeInTheDocument();
  })

  it('should render "electricity usage" title input', () => {
    expect(screen.getByText('Electricity Usage')).toBeInTheDocument();
  })
})

it('should call drawer handler on click ', () => {
  const drawerHandlerMock = jest.fn();
  render(
    <Topbar drawerIsOpen={true} drawerHandler={drawerHandlerMock}/>
  );
  const menuButton = screen.getByRole('button', {name: 'open drawer'});
  userEvent.click(menuButton);
  expect(drawerHandlerMock).toBeCalled();
})