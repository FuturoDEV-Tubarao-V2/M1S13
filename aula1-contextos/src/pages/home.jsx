import { usePrimeiro } from "../contexts/primeiro-context"

export function Home() {
    return (
        <div>
            <h1>PAGINA HOME</h1>

            <Box />
        </div>
    )
}

export function Box() {

    const { user, mudarUsuario } = usePrimeiro()

    return (
        <div>
            <h1>USUÁRIO: {user.name} </h1>
            <button onClick={mudarUsuario}>Logar</button>
        </div>
    )
}
