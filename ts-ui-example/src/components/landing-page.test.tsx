import { render, screen } from "@testing-library/react";
import Landing from "./landing-page";

describe("renders learn react link", () => {
	it("renders learn react link", () => {
		render(<Landing />);
		expect(screen.getByText("Something...")).toBeInTheDocument();
	});
});
