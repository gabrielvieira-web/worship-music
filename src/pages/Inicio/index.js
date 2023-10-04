import React from 'react'
import styles from './Inicio.module.css';
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import Card from 'components/Card';
import { useState } from 'react';
import { useEffect } from 'react';

function Inicio() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/gabrielvieira-web/worshipMusic-api/videos')
      .then(resposta => resposta.json())
      .then(dados => {
        setVideos(dados)
      }
    );
  }, []);

  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Entre no quarto, feche a porta, e escute músicas que te levam para mais perto de cristo!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} /> 
        })}
      </section>
    </>
  )
}

export default Inicio;