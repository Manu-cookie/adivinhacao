'use client'
import { useState } from "react";
export default function adivinhaçãoPage() {
const [numeroSecreto, setNumeroSecreto] =useState(Math.round(Math.random() * 100));
const [chute, setChute] = useState(0);
const [feedback, setFeedback] = useState(NaN);

return (
<>
<input type= "number" value={chute} onChange={(event) => setChute(parseInt(event.target.value))}/>
<button onClick={() => setFeedback(chute)}> confirme seu número </button>
{
numeroSecreto > feedback ? <p>digite um numero maior</p> :
numeroSecreto < feedback ? <p>digite um numero menor</p> :
numeroSecreto == feedback ? <p> acertou o numero</p> : null
}
</>
)
}