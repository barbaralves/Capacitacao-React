import { useEffect, useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"
import { mega } from "../../funcoes/mega"

export default function megasena() {
  const [qtde, setQtde] = useState(6)
  const [numeros, setNumeros] = useState([])

  useEffect(() => {
    setNumeros(mega())
  }, [])

  function renderNumeros() {
    return numeros.map(n => <NumeroDisplay key={n} numero={n}/>)
  }
  
  return (
    <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
      <h1>Mega Sena</h1>
      <div style={{display: "flex", justifyContent:"center", flexWrap: "wrap"}}>
        {renderNumeros()}
      </div>
      <div style={{margin: "20px 0"}}>
        <input type="number" min={6} max={20} value={qtde} onChange={ev => setQtde(ev.target.value)}/>
        <button onClick={() => setNumeros(mega(qtde))}>Gerar Aposta</button>
      </div>
    </div>
  )
}