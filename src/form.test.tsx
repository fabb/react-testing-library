import React from "react";
import "jest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./form";

it("should fill out the form", async () => {
  const mockOnSubmit = jest.fn();
  render(<Form onSubmit={mockOnSubmit} />);

  await userEvent.type(
    screen.getByRole("textbox", { name: /favorite color:/i }),
    "cyanblue",
  );
  await userEvent.click(screen.getByRole("checkbox", { name: /my-checkbox/i }));
  await userEvent.click(screen.getByRole("button", { name: /submit/i }));

  expect(mockOnSubmit).toHaveBeenCalledWith(expect.any(FormData));
  const [formData] = mockOnSubmit.mock.calls[0];
  expect(Object.fromEntries(formData)).toEqual({
    "my-input": "cyanblue",
  });
});
