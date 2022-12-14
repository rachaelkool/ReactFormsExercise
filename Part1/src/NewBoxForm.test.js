import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

it('renders without crashing', function() {
    render(<NewBoxForm />);
});

it('matches snapshot', function() {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
});

it('runs the add function on form submit', function() {
    const createMock = jest.fn();
    const { getByText } = render(<NewBoxForm addBox={createMock} />);
    const createButton = getByText("Add a new box!");
    fireEvent.click(createButton);
    expect(createMock).toHaveBeenCalled();
});