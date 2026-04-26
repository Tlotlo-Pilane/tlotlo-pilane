import { render, screen } from "@testing-library/react";
import ProjectCard from "./ProjectCard";

describe("ProjectCard", () => {
  it("renders a safe private state when links are missing", () => {
    render(
      <ProjectCard
        title="Private Example"
        status="Private"
        problem="A private business workflow."
        solution="Internal-only dashboard."
        techStack={["React"]}
        image="/Portfolio.png"
        imageAlt="Private project preview"
        liveUrl=""
        repoUrl=""
      />
    );

    expect(screen.getAllByText(/Private Project/i).length).toBeGreaterThan(0);
    expect(screen.queryByRole("link", { name: /Live Project/i })).not.toBeInTheDocument();
  });
});
