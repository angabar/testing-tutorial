import React, { useState } from "react";

import Dialog from "./components/Dialog";
import Users from "./components/Users";

import "./main.css";

const App = (props) => {
    const [openDialog, setOpenDialog] = useState(false);

    return (
        <div className="main-container">
            <button onClick={() => setOpenDialog(!openDialog)}>
                Open users dialog
            </button>
            <Dialog open={openDialog} close={() => setOpenDialog(false)}>
                <span>{props.getSize()}</span>
                <Users />
            </Dialog>
        </div>
    );
};

export default App;
