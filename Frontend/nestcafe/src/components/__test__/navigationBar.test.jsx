import React from 'react';
import NavigationBar from '../navigationBar'; // Import the component that you want to test
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";

test("Renders the Support link", () => {
    render(<NavigationBar />);
    const supportLink = screen.getByText(/Support/);
    expect(supportLink).toBeInTheDocument();
})