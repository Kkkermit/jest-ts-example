import { render, screen } from "@testing-library/react";
import Landing from "./landing-page";

describe("renders learn react link", () => {
	it("renders learn react link", () => {
		render(<Landing />);
		expect(screen.getByText("This epic ass thing was made by Kkermit")).toBeInTheDocument();
		expect(screen.queryByText("This epic ass thing was NOT created by Kkermit")).not.toBeInTheDocument();
	});
});
