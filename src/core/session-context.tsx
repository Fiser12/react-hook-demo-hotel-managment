import * as React from 'react'

export interface SessionContextProps {
    login : string;
    updateLogin : (value : string) => void;
}

export const createDefaultUser = () : SessionContextProps => (
    {
        login: "no user",
        updateLogin: value => console.warn('ERROR En Login')
    }
)

export const SessionContext = React.createContext<SessionContextProps>(createDefaultUser());

export const SessionProvider : React.FunctionComponent = props => {
    const [login, setLogin] = React.useState("")

    return (
        <SessionContext.Provider value={{login, updateLogin: setLogin}}>
            {props.children}
        </SessionContext.Provider>
    );
}