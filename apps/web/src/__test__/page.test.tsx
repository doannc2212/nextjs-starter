import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

describe("Homepage", () => {
  it("renders the Components", () => {
    render(<Page />);

    const heading = screen.getByText("Hello world", {
      selector: "h1",
    });

    expect(heading).toBeInTheDocument();
  });
});
