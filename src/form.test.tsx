import React from "react";
import "jest";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./form";

it("should fill out the form", async () => {
  const mockOnSubmit = jest.fn();
  render(<Form onSubmit={mockOnSubmit} />);

  await userEvent.type(
    screen.getByRole("input", { name: /favorite color: /i }),
    "cyanblue",
  );
  await userEvent.selectOptions(
    screen.getByRole("input", { name: /Please check this checkbox/i }),
    "cyanblue",
  );
  await userEvent.click(screen.getByRole("button", { name: /submit/i }));

  expect(mockOnSubmit).toMatchInlineSnapshot();
});
