'use client'

import styles from'./page.module.css'
export default function LucasDesafioPage() {
const classes = [styles.red, styles.orange, styles.yellow, styles.green, styles.blue, styles.purple, styles.pink];
const random = Math.floor(Math.random() * classes.length);
const mudarCor = () => {
document.getElementById("name")?.classList.add(styles.Manucaracteristicas)
}
 
return (
<>
<div className={styles.fotoContainer}>
<img className={styles.foto} src="https://classic.exame.com/wp-content/uploads/2023/08/cachorro1.jpg?quality=70&strip=info&w=1024.jpg" alt="puppy running" width="200" height="200"></img>
    </div>
    <div className={styles.texto}>
     
      <h2 id="name" className={styles.Nomecaracteristicas}>Manuela Mayer</h2>
      <div className={styles.esquerda}>
        <p id="name" className={styles.normal}><span className={styles.negrito}>Email: </span>manuela.mayer@poatek.com</p>
        <p id="name" className={styles.normal}><span className={styles.negrito}>Phone: </span>991225151</p>
        <p id="name" className={styles.normal}><span className={styles.negrito}>About: </span>I am a student.</p>
      </div>
      <div className={styles.separar}>
          <div className={styles.fundo}>
            <h3 id="name" className={styles.favoritestitulo}>Favorite Movies</h3>
            <ul>
              <li>A silent voice</li>
              <li>Iron Man</li>
              <li>Logan</li>
            </ul>
          </div>
     
      <div>
      <div className={styles.fundo}>
        <h3 id="name" className={styles.favoritestitulo}>Favorite songs</h3>
        <ul>
          <li>Gotta Be a reason</li>
          <li>Deviltown</li>
          <li>Boys will be bugs</li>
        </ul>
        </div>
        </div>
        <div className={styles.fundo}>
        <h3 id="name" className={styles.favoritestitulo}>Favorite foods</h3>
        <ul>
          <li>spare ribs</li>
          <li>sushi</li>
          <li>salmon</li>
        </ul>
        </div>
      </div>
    </div>
  </>   
)
}