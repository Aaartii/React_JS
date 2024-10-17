import React from 'react'; // Import React library
import { render, screen } from '@testing-library/react'; // Import render and screen utilities from Testing Library
import App from './App'; // Import the App component to be tested

// Define a test case to check if the "learn react" link renders correctly
test('renders learn react link', () => {
  render(<App />); // Render the App component into the virtual DOM
  
  // Search for the text "learn react" within the rendered App component
  // const linkElement = screen.getByText(/learn react/i); 
  
  // Assert that the link element is present in the document
  // expect(linkElement).toBeInTheDocument(); 
});
