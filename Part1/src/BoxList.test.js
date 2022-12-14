import React from "react"
import { render, fireEvent } from "@testing-library/react"
import BoxList from "./BoxList"


it('renders without crashing', function () {
    render(<BoxList />)
})

it('matches snapshot', function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})

it('can add a box', function() {
    const {getByText, getByLabelText} = render(<BoxList />);
  
    const heightInput = getByLabelText("Height:");
    const widthInput = getByLabelText("Width:");
    const backgroundInput = getByLabelText("Background Color:");
    fireEvent.change(heightInput, { target: { value: 4 } });
    fireEvent.change(widthInput, { target: { value: 4 } });
    fireEvent.change(backgroundInput, { target: { value: 'blue' } });
    const addBtn = getByText('Add a new box!');
    fireEvent.click(addBtn);
  
    const removeBtn = getByText("X");

    expect(removeBtn).toBeInTheDocument();
    expect(removeBtn.previousSibling).toHaveStyle(`
      width: 4em;
      height: 4em;
      background-color: blue;`);
    expect(heightInput.value).toBe('');
    expect(widthInput.value).toBe('');
    expect(backgroundInput.value).toBe('');
});

it('can remove a box', function() {
    const {getByText, getByLabelText} = render(<BoxList />);
  
    const heightInput = getByLabelText("Height:");
    const widthInput = getByLabelText("Width:");
    const backgroundInput = getByLabelText("Background Color:");
    fireEvent.change(heightInput, { target: { value: 4 } });
    fireEvent.change(widthInput, { target: { value: 4 } });
    fireEvent.change(backgroundInput, { target: { value: 'blue' } });
    const addBtn = getByText('Add a new box!');
    fireEvent.click(addBtn);
  
    const removeBtn = getByText("X");
    fireEvent.click(removeBtn);

    expect(removeBtn).not.toBeInTheDocument();
    expect(heightInput.value).toBe('');
    expect(widthInput.value).toBe('');
    expect(backgroundInput.value).toBe('');
  });


