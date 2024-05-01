import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types'

export const PrimeiroContext = createContext({
    user: {
        name: "",
        email: ""
    },
    mudarUsuario: () => {}
});


export function PrimeiroProvider({ children }) {
    const [user, setUser] = useState({})

    function mudarUsuario() {
      setUser({
        name: "Fulano",
        email: "fulano@teste.com"
      })
    }

    return <PrimeiroContext.Provider value={{ user, mudarUsuario }}>{children}</PrimeiroContext.Provider>
}

PrimeiroProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export function usePrimeiro() {
    const context = useContext(PrimeiroContext)

    if(!context) {
        throw new Error("É necessário a utilização do provider como pai!")
    }

    return context;
}