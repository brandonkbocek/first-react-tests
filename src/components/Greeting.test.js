import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
   test('renders Hello World as a text', () => {
      render(<Greeting />);
      const helloWorldElement = screen.getByText('Hello World');
      expect(helloWorldElement).toBeInTheDocument();
   });

   test('renders good as a text initially', () => {
      render(<Greeting />);
      const paragraphElement = screen.getByText('good to see you!', { exact: false });
      expect(paragraphElement).toBeInTheDocument();
   });

   test('renders Changed! if the button was clicked', () => {
      //Arrange
      render(<Greeting />);
      
      //Act
      const buttonElement = screen.getByRole('button');
      userEvent.click(buttonElement);
      
      //Assert
      const paragraphElement = screen.getByText('Changed!', { exact: false });
      expect(paragraphElement).toBeInTheDocument();
   });

   test('does not render good to see you if button was clicked', () => {
      //Arrange
      render(<Greeting />);
      
      //Act
      const buttonElement = screen.getByRole('button');
      userEvent.click(buttonElement);
      
      //Assert
      const paragraphElement = screen.queryByText('good to see you!', { exact: false })
      expect(paragraphElement).toBeNull();
   });
});

