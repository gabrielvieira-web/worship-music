import styles from './Banner.module.css';

function Banner({ imagem }) {
  return (
    <div className={styles.capa} style={{
        background: `url('/imagens/banner-${imagem}.png') no-repeat center`,
        backgroundSize: 'cover' 
      }}>
    </div>
  )
}

export default Banner;