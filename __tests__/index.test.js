import Home from "../pages";
import { render, screen } from "@testing-library/react";

test("test", () => {
  render(<Home />);
  const element = screen.queryByText("Lutz");
  expect(element).toBeInTheDocument();
});
