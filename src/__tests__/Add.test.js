import { render, screen } from '@testing-library/react';
import Add from '../Add';


 
jest.mock('axios');
jest.mock('react-router-dom');

test("renders 'heading' ",() =>{
    render(<Add/>);
    const linkElement = screen.getByRole("head");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Add Customer Data");
  
  });

  test("renders 'nameLabel' ",() =>{
    render(<Add/>);
    const linkElement = screen.getByRole("namel");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Name:");
  });

  test("renders 'nameField' ",() =>{
    render(<Add/>);
    const linkElement = screen.getByRole("namef");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("");
  });
