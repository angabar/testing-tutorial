import React from "react";

import "./styles.css";

type dialogPropsType = {
    open: boolean;
    close: () => void;
    children: React.ReactNode;
};

const Dialog = ({ open, close, children }: dialogPropsType) => {
    if (open) {
        return (
            <>
                <dialog
                    className="dialog__main-container"
                    data-testid="dialog__main-container"
                    open={open}
                >
                    {children}
                </dialog>
                <div
                    className="dialog__mask"
                    data-testid="dialog__mask"
                    onClick={() => close()}
                ></div>
            </>
        );
    }

    return null;
};

export default Dialog;
