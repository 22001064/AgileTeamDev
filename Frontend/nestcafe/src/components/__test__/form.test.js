import React from 'react';
import UserForm from '../form'; // Import the component that you want to test
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";

test("09 Checks if the form has user tab", () => {
    const { getByTestId } = render(<UserForm />);
    const userForm = getByTestId("userTab");
    expect(userForm).toBeInTheDocument();
})
test("13 Checks if the form has admin tab", () => {
    const { getByTestId } = render(<UserForm />);
    const adminForm = getByTestId("adminTab");
    expect(adminForm).toBeInTheDocument();
})
test("10 Checks if the form user tab has username field", () => {
    const { getByTestId } = render(<UserForm />);
    const userUsername = getByTestId("userUsername");
    expect(userUsername).toBeInTheDocument();
})
test("11 Checks if the form user tab has password field", () => {
    const { getByTestId } = render(<UserForm />);
    const userPassword = getByTestId("userPassword");
    expect(userPassword).toBeInTheDocument();
})
test("12 Checks if the form user tab has checkbox field", () => {
    const { getByTestId } = render(<UserForm />);
    const checkbox = getByTestId("checkbox");
    expect(checkbox).toBeInTheDocument();
})
test("16 Checks if the form user tab has login button", () => {
    const { getByTestId } = render(<UserForm />);
    const userLogin = getByTestId("userLogin");
    expect(userLogin).toBeInTheDocument();
})
test("14 Checks if the form admin tab has username field", () => {
    const { getByTestId } = render(<UserForm />);
    const adminUsername = getByTestId("adminUsername");
    expect(adminUsername).toBeInTheDocument();
})
test("15 Checks if the form admin tab has password field", () => {
    const { getByTestId } = render(<UserForm />);
    const adminPassword = getByTestId("adminPassword");
    expect(adminPassword).toBeInTheDocument();
})
test("17 Checks if the form admin tab has login button", () => {
    const { getByTestId } = render(<UserForm />);
    const adminLogin = getByTestId("adminLogin");
    expect(adminLogin).toBeInTheDocument();
})