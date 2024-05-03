import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types'

export const ContadorContext = createContext({
    contador: 0,
    incrementar: () => {},
    decrementar: () => {},
})  

export function ContadorProvider({ children }) {
    const [contador, setContador] = useState(0)

    function incrementar() {
        setContador(prevState => prevState + 1)
    }
    
    function decrementar() {
        setContador(prevState => {
            if(prevState - 1 < 0) return prevState
            return prevState - 1
        })
    }

    return <ContadorContext.Provider value={{ contador, incrementar, decrementar }}>{children}</ContadorContext.Provider>
}

ContadorProvider.propTypes = {
    children: PropTypes.node.isRequired,
}


export function useContador() {
    const context = useContext(ContadorContext)

    return context;
}