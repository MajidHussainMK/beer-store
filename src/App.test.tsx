import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App, { headerTitle, navTitle } from "./App";

const setup = () =>
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

test(`renders ${navTitle}`, () => {
  setup();

  const title = screen.getByText(navTitle);
  expect(title).toBeInTheDocument();
});

test(`renders ${headerTitle}`, () => {
  setup();

  const title = screen.getByText(headerTitle);
  expect(title).toBeInTheDocument();
});

test(`renders search input`, () => {
  setup();

  const searchInput = screen.getByRole('textbox')
  expect(searchInput).toBeInTheDocument();
});
