'use client'

import { useState } from "react";
import style from "./page.module.css";
export default function CounterPage() {
    const [count, setCount] = useState(0);
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    return (
        <>
            {
                count == 0 ? <p className={style.bluecount}>{count}</p> : count > 0 ? <p className={style.greencount}>{count}</p> : <p className={style.redcount}>{count}</p>
            }

            <button className={style.somar} onClick={() => setCount(count + 1)}>Somar</button>
            <button className={style.subtrair} onClick={() => setCount(count - 1)}>subtrair</button>
            <button className={style.multiplicar} onClick={() => setCount(count * 2)}>multiplicar</button>
            <button className={style.dividir} onClick={() => setCount(count / 2)}>dividir</button>


            <input type="number" value={number1} onChange={(event) => setNumber1(parseInt(event.target.value))} />
            <input type="number" value={number2} onChange={(event) => setNumber2(parseInt(event.target.value))} />
            <span className={style.numbers}>
                soma={number1 + number2}
            </span>
            <span>
                subtração={number1 - number2}
            </span>

        </>
    )
}


