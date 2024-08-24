import { render, screen } from "@testing-library/react";
import React from "react";
import Home from "../src/app/[locale]/page";

describe("App tests", () => {
  it("should contains the heading 1", () => {
    const { container } = render(<Home />);

    expect(container).toBeTruthy();
  });
});
