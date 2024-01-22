import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Autocomplete from "@/features/AutoComplete/autocomplete";

const renderWithReactRoot = (
  component:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
) => {
  const root = document.createElement("div");
  return render(<React.StrictMode>{component}</React.StrictMode>, {
    container: document.body.appendChild(root),
  });
};
describe("Autocomplete Component", () => {
  it("renders without crashing", async () => {
    const { getByTestId } = renderWithReactRoot(<Autocomplete />);
    await waitFor(() => {
      expect(getByTestId("autocomplete-container")).toBeInTheDocument();
    });
  });

  it("handles input change and suggestion click", () => {
    const { getByPlaceholderText, getByTestId, getByText } =
      renderWithReactRoot(<Autocomplete />);
    const input = getByPlaceholderText("Digite para adicionar tags");

    fireEvent.change(input, { target: { value: "React" } });

    expect(getByTestId("suggestion-item")).toBeInTheDocument();

    fireEvent.click(getByText("React"));

    expect(getByTestId("suggestion-item")).toBeInTheDocument();
    expect(getByTestId("suggestion-item").textContent).toBe("React");
  });
  it("adds a tag when Enter key is pressed", () => {
    const { getByPlaceholderText, getByText } = render(<Autocomplete />);
    const inputElement = getByPlaceholderText("Digite para adicionar tags");

    fireEvent.change(inputElement, { target: { value: "New Tag" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    const tagElement = getByText("New Tag");
    expect(tagElement).toBeInTheDocument();
  });

  it("does not add duplicate tags when selecting suggestions", async () => {
    const { getByPlaceholderText, getByTestId } = renderWithReactRoot(
      <Autocomplete />
    );
    const inputElement = getByPlaceholderText("Digite para adicionar tags");

    fireEvent.change(inputElement, { target: { value: "React" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    const tagElements = getByTestId("tag");
    expect(tagElements).toBeInTheDocument();
    expect(tagElements.textContent).toBe("React");
  });
});
