import React from 'react';
import Footer from '../footer'; // Import the component that you want to test
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";

test("18 Renders the company logo image", ()=> {
    const { getByTestId} = render(<Footer />);
    const companyLogo = getByTestId("logoimagebig");
    expect(companyLogo.tagName).toBe("IMG");
})
test("19 Renders the company slogan", ()=> {
    const { getByTestId} = render(<Footer />);
    const slogan = getByTestId("slogan");
    expect(slogan.textContent).toBe("Together we can go higher!");
})
test("20 Renders the copyright statement", ()=> {
    const { getByTestId} = render(<Footer />);
    const slogan = getByTestId("reserved");
    expect(slogan.textContent).toBe("© 2025 Copyright: NestCafe Ltd. All rights reserved.");
})