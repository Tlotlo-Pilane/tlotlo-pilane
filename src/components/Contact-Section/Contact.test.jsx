import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact section", () => {
  it("renders clickable contact channels", () => {
    render(<Contact />);

    expect(
      screen.getByRole("heading", { name: /Contact \/ Let's Connect/i })
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /Email/i })).toHaveAttribute(
      "href",
      expect.stringContaining("mailto:")
    );
    expect(screen.getByRole("link", { name: /LinkedIn/i })).toHaveAttribute(
      "href",
      expect.stringContaining("linkedin.com")
    );
    expect(screen.getByRole("link", { name: /GitHub/i })).toHaveAttribute(
      "href",
      expect.stringContaining("github.com")
    );
  });
});
