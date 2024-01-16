'use client'

import styles from './page.module.css';
import { useState } from "react";
export default function InputPage() {
const [text, setText] = useState('');
return (
    <div className="input">
        <h1>
           Input 
        </h1>
        <input className={styles.inputStyles} type="text" 
        value={text} 
        onChange={(event) => setText(event.target.value)}/>
        <div>
            {text}
        </div>
    </div>

)    
} 