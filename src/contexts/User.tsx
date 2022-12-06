import React, { createContext } from "react";

type ContextType = {
    name:string;
    age:number;
}

const initialState = {
    name: 'Rodrigo',
    age: 910
}
export const Context = createContext<ContextType>(initialState);

export const ContextProvider: any = ({children}:any) => {
    return(
        <Context.Provider value={initialState}>
            {children}
        </Context.Provider>
    );
}