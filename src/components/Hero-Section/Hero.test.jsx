import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero section", () => {
  it("renders primary content", () => {
    render(<Hero showParticles={false} theme="light" />);

    expect(
      screen.getByRole("heading", {
        name: /Tlotlo Pilane/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /View Featured Projects/i })
    ).toBeInTheDocument();
  });
});
