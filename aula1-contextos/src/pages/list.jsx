import { usePrimeiro } from "../contexts/primeiro-context"

export function List() {
    const context = usePrimeiro()
    //error
    return (
        <ul>
            <li>{}</li>
        </ul>
    )
}