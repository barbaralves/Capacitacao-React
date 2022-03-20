import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"

export default function numero() {
  const [valor, mudarValor] = useState(0)

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <h1>Contador</h1>
      <br />
      <div style={{display: "flex"}}>
        <button onClick={() => mudarValor(valor - 1)}>-</button>
          <div>
            <NumeroDisplay numero={valor}/>
          </div>
        <button onClick={() => mudarValor(valor + 1)}>+</button>
      </div>
    </div>
  )
}