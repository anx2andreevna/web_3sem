import { render } from "@testing-library/react";
import LoadingScreen from "./LoadingScreen";

describe("LoadingScreen", () => {
  it("отображает экран закгрузки с тестом загрузки", () => {
    const { getByText } = render(<LoadingScreen />);
    expect(getByText("Loading...")).toBeInTheDocument();
  });
});
