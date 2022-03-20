import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"

export default function contador() {
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
            <ContadorDisplay numero={valor}/>
          </div>
        <button onClick={() => mudarValor(valor + 1)}>+</button>
      </div>
    </div>
  )
}