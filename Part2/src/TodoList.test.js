import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";


it('renders without crashing', function() {
    render(<TodoList />);
});

it('matches snapshot', function() {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it('can add a todo', function() {
    const {getByText, getByLabelText} = render(<TodoList />);
  
    const taskInput = getByLabelText("Task:");
    fireEvent.change(taskInput, { target: { value: 'feed my dog' } });
    const addBtn = getByText('Add a new todo!');
    fireEvent.click(addBtn);
  
    const removeBtn = getByText("X");

    expect(removeBtn).toBeInTheDocument();
    expect(taskInput.value).toBe('');
});

it('can remove a todo', function() {
    const {getByText, getByLabelText} = render(<TodoList />);
  
    const taskInput = getByLabelText("Task:");
    fireEvent.change(taskInput, { target: { value: 'feed my dog' } });
    const addBtn = getByText('Add a new todo!');
    fireEvent.click(addBtn);
  
    const removeBtn = getByText("X");
    fireEvent.click(removeBtn);

    expect(removeBtn).not.toBeInTheDocument();
    expect(taskInput.value).toBe('');
});