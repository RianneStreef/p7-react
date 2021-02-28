/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

import userEvent from '@testing-library/user-event';
import App from '../App';

const {
  render,
  getByTestId,
  screen,
  fireEvent,
} = require('@testing-library/react');

function setupTest() {
  render(<App />);
  const header = screen.getByTestId('header');
  const button = screen.getByTestId('button-header');
  return { header, button };
}

describe('Header', () => {
  it('should load the header', () => {
    const { header } = setupTest();
    expect(header).toBeInTheDocument();
  });

  it('should have button change between signup and login on click', () => {
    const { button } = setupTest();
    expect(button.textContent.toLowerCase()).toEqual('sign up');
    userEvent.click(button);
    expect(button.textContent.toLowerCase()).toEqual('log in');
  });

  it('should change forms when clicked', () => {
    const { button } = setupTest();
    expect(button.textContent.toLowerCase()).toEqual('sign up');
    screen.getByTestId('test-form-login');
    userEvent.click(button);
    expect(button.textContent.toLowerCase()).toEqual('log in');
    screen.getByTestId('test-form-signup');
  });
});
