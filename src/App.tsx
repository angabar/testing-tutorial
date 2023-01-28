import React, { useState } from "react";

import Dialog from "./components/Dialog";
import Users from "./components/Users";

import "./main.css";

const App = () => {
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    return (
        <div className="main-container">
            <button onClick={() => setOpenDialog(!openDialog)}>
                Open users dialog
            </button>
            <Dialog open={openDialog} close={() => setOpenDialog(false)}>
                <Users />
            </Dialog>
        </div>
    );
};

export default App;
