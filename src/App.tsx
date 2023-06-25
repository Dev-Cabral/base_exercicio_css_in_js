import GlobalEstyle, { Container } from './stylesGlobal'

import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

function App() {
  return (
    <>
      <GlobalEstyle />
      <Header />
      <Container>
        <Hero />
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
