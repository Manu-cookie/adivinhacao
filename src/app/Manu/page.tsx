'use client'

import styles from'./page.module.css'

export default function ManuPage() {
const classes = [styles.red, styles.orange, styles.yellow, styles.green, styles.blue, styles.purple, styles.pink];
const random = Math.floor(Math.random() * classes.length);
const mudarCor = () => {
    document.getElementById("name")?.classList.add(styles.ManuColorName)
}
 
return (
        <div>
            <h1 onClick={() => mudarCor()} id="name" className={styles.ManuLooks}>ManuPage</h1>
            </div>
    )
}

