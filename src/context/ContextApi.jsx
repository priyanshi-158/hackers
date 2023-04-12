import React, { createContext, useState } from "react";

export const subjectsContext = createContext();

const Context = ({ children }) => {
    const [subjects, setSubjects] = useState({
        maths: [
            { topic: "trigno", text: "lorem10", link: "https://www.google.com/" },
        ],
        chemistry: [
            { topic: "trigno", text: "lorem10", link: "https://www.google.com/" },
        ],
    });
    return (
        <subjectsContext.Provider value={{ subjects, setSubjects }}>
            {children}
        </subjectsContext.Provider>
    );
};

export default Context;