import { render, screen } from "@testing-library/react";
import Landing from "./landing-page";

describe("renders learn react link", () => {
	it("renders learn react link", () => {
		render(<Landing />);
		screen.debug();
		const linkElement = screen.getByText(/ewefwfwefwfefe/i);
		expect(linkElement).toBeInTheDocument();
	});
});
