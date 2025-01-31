import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /Hi, I'm Damien/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of the user with alt text", () => {
  render(<App />);

  const image = screen.getByAltText(/Damien in a studio setting/i); // Update alt text
  expect(image).toHaveAttribute("src", "src/Studio-Lighting-Retouching-Athletes-after.webp");
});

test("displays a second-level heading with the text `About Me`", () => {
  render(<App />);

  const aboutMeHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(aboutMeHeading).toBeInTheDocument();
});

test("displays a paragraph for the biography", () => {
  render(<App />);

  const bioParagraph = screen.getByText(/I'm a developer who loves building things with React and learning new technologies!/i); // Update text
  expect(bioParagraph).toBeInTheDocument();
});

test("displays a link to GitHub", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toHaveAttribute("href", "https://github.com/Damien"); // Update URL
});

test("displays a link to LinkedIn", () => {
  render(<App />);

  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/Damien"); // Update URL
});
