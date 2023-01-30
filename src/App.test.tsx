import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SizeMe from "./components/SizeMe";

import App from "./App";

jest.mock("./components/Users/api/fetchUsers");

const testScenario = () => (
    <SizeMe>{({ getSize }) => <App getSize={getSize} />}</SizeMe>
);

test("button renders without problems", () => {
    // probar a renderizar primero el componente app a pelo
    render(testScenario());

    const openDialogButton = screen.getByText("Open users dialog");
    userEvent.click(openDialogButton);
});

test("can open and close the dialog", () => {
    render(testScenario());

    const openDialogButton = screen.getByText("Open users dialog");
    userEvent.click(openDialogButton);

    const dialogComponent = screen.getByTestId("dialog__main-container");
    expect(dialogComponent).not.toBeNull();

    const maskComponent = screen.getByTestId("dialog__mask");
    userEvent.click(maskComponent);

    // Probar con getbytestid primero
    const missingDialogComponent = screen.queryByTestId(
        "dialog__main-container",
    );
    expect(missingDialogComponent).toBeNull();
});

test("can list all the users", async () => {
    render(testScenario());

    const openDialogButton = screen.getByText("Open users dialog");
    userEvent.click(openDialogButton);

    // Probar primero con getbytestid para que salga el loading
    const userElement = await screen.findAllByTestId("user__main-container");
    expect(userElement).not.toBeNull();

    // Hacer incapie en que vemos la consola, no lo que se muestra por pantalla
    expect(userElement.length).toBe(10);

    const enricUser = await screen.findByText("Enric");
    expect(enricUser).not.toBeNull();
});
