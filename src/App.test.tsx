import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";
import userEvent from "@testing-library/user-event";

test("button renders without problems", () => {
    render(<App />);

    const openDialogButton = screen.getByText("Open users dialog");
    userEvent.click(openDialogButton);

    const dialogComponent = screen.getByTestId("dialog__main-container");
    expect(dialogComponent).not.toBeNull();
});
