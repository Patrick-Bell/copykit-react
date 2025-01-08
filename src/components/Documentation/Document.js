import React, { useState } from "react";

import Sidebar from "../Documentation/Drawer";
import InstallPage from "./InstallPage";
import DocFooter from "./DocuFooter";
import TextButtonPage from "./TextButtonPage";
import StylingPage from "./StylingPage";
import TextButton from "../TextCopy";





const Document = () => {


    return (
        <>
        <Sidebar />

        <TextButtonPage />

        <DocFooter next={'Icon Button'}/>

        </>
    );
};

export default Document;
