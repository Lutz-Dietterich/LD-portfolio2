import Header from "../Header";
import { render, screen, fireEvent } from "@testing-library/react";

test("scrolls to top when logo is clicked", () => {
  render(<Header />);
  const logoLarge = screen.getAllByAltText("Lutz Dietterich")[0];

  // Überprüfen, ob das Logo vorhanden ist
  expect(logoLarge).toBeInTheDocument();

  // Mocken der scrollTo-Funktion von window
  window.scrollTo = jest.fn();

  // Klicken auf das Logo
  fireEvent.click(logoLarge);

  // Überprüfen, ob die scrollTo-Funktion mit den richtigen Parametern aufgerufen wurde
  expect(window.scrollTo).toHaveBeenCalledWith({
    top: 0,
    behavior: "smooth",
  });
});
