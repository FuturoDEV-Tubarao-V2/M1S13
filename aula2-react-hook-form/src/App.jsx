import { Button } from '@mui/material'
import { ContadorProvider } from './contexts/contador-context'
import { Contador } from './components/contador'
import { Form } from './components/Form'

function App() {

  return (
    <ContadorProvider>
        <Contador />
        <Button>Entrar</Button>
        
        <hr />

        <Form />
    </ContadorProvider>
  )
}

export default App
