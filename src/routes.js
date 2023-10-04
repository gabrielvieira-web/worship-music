import Favoritos from 'pages/Favoritos';
import Inicio from 'pages/Inicio';
import NaoEncontrada from 'pages/NaoEncontrada';
import PaginaBase from 'pages/PaginaBase';
import Player from 'pages/Player';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaBase />}>
          <Route index element={<Inicio />} /> 
          <Route path='favoritos' element={<Favoritos />} />
          <Route path=':id' element={<Player />} />
          <Route path='*' element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;