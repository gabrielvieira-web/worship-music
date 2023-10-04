import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritoProvider from "contextos/Favoritos";
import { Outlet } from "react-router-dom";

function PaginaBase() {
  return (
    <main>
      <Cabecalho /> 
      <FavoritoProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritoProvider>
      <Rodape />
    </main>
  )
}

export default PaginaBase;