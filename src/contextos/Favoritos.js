import { createContext, useContext, useState } from 'react';

export const FavoritoContext = createContext();
FavoritoContext.displayName = 'Favoritos';

export default function FavoritoProvider({ children }) {
  const [ favorito, setFavorito ] = useState([]);

  return (
    <FavoritoContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </FavoritoContext.Provider>
  )
}

export function useFavoritoContext() {
  const { favorito, setFavorito } = useContext(FavoritoContext);

  function adicionaFavorito(novoFavorito) {
    const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);

    let novaLista = [...favorito];

    if(!favoritoRepetido) {
      novaLista.push(novoFavorito);
      return setFavorito(novaLista);
    }

    //Remove favorito repetido. filtra para a nova lista só os itens que tem o id DIFERENTE do id de novo favorito. Com isso novoFavorito passa a não existir mais.
    novaLista = favorito.filter(item => item.id !== novoFavorito.id);
    return setFavorito(novaLista);
  }

  return {
    favorito,
    adicionaFavorito
  }
}