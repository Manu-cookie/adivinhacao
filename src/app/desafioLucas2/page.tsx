'use client'

import { users } from '@/data/user';
import styles from './page.module.css'
export default function desafioLucas2Page() {
    const classes = [styles.red, styles.orange, styles.yellow, styles.green, styles.blue, styles.purple, styles.pink];
    const random = Math.floor(Math.random() * classes.length);
    const mudarCor = () => {
        document.getElementById("name")?.classList.add(styles.ola)
    }

    return (
        <>
            <div className={styles.tela}>


                <div className={styles.Users}>
                    <h2>Users</h2>
                </div>
                <div className={styles.espaco}>
{users.map((user, index) => (
 <div className={styles.fundo} key={index}>
                    <div className={styles.fotinho}>
                        <div>
                            <img className={styles.foto} src={user.image} alt="puppy running" width="50" height="50"></img>
                        </div>
                        <div>
                            <h3 className={styles.negrito}>{user.name}</h3>
                            <h4 className={styles.normal}>
                               {user.role}-{user.email}</h4>
                               
                        </div>
                    </div>
                </div>
                
))

}
</div>
               


            </div>
        </>
    )
}