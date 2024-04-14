import { render, screen } from "@testing-library/react";
import { ErrorAlert } from "../components/ui/ErrorAlert";

describe("ErrorAlert", () => {
  it("renders with error message when isError is true and message is provided", () => {
    render(<ErrorAlert isError={true} message="Test Error Message" />);
    expect(screen.getByText("Test Error Message")).toBeInTheDocument();
  });

  it("does not render when isError is false", () => {
    render(<ErrorAlert isError={false} />);
    expect(screen.queryByText("Something went wrong")).toBeNull();
  });
});
