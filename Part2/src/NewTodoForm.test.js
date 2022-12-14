import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";


it('renders without crashing', function() {
    render(<NewTodoForm />);
});
  
it('matches snapshot', function() {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
});
  
it('runs the add function on form submit', function() {
    const createMock = jest.fn();
    const { getByText } = render(<NewTodoForm addTodo={createMock} />);
    const createButton = getByText("Add a new todo!");
    fireEvent.click(createButton);
    expect(createMock).toHaveBeenCalled();
});