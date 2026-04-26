import { render, screen } from "@testing-library/react";

vi.mock("./hooks/useLoading", () => ({
  useLoading: () => false,
}));

vi.mock("./hooks/useShowParticles", () => ({
  useShowParticles: () => false,
}));

vi.mock("@vercel/analytics/react", () => ({
  Analytics: () => null,
}));

import App from "./App";

describe("App", () => {
  it("renders the main hero heading", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", {
        name: /Tlotlo Pilane/i,
      })
    ).toBeInTheDocument();
  });
});
