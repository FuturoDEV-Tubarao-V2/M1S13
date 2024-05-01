import { PrimeiroProvider } from "./contexts/primeiro-context"
import { Home } from "./pages/home"
import { List } from "./pages/list"

function App() {
  return (
    <div>
      <PrimeiroProvider>
        <Home />
      </PrimeiroProvider>

      <List />
    </div>
  )
}

export default App
