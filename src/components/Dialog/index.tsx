import React from "react";

import "./styles.css";

type dialogPropsType = {
    open: boolean;
    close: () => void;
    children: React.ReactNode;
};

const Dialog = ({ open, close, children }: dialogPropsType) => {
    return (
        <>
            <dialog className="dialog__main-container" open={open}>
                {children}
            </dialog>
            {open && (
                <div className="dialog__mask" onClick={() => close()}></div>
            )}
        </>
    );
};

export default Dialog;
