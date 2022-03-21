import { useState } from "react"

export default function mouse(prop) {
  const [x, alterarX] = useState(0)

  const arrayY = useState(0)
  let y = arrayY[0] 
  const alterarY = arrayY[1] 

  const estilo = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    color: "#FFF",
    fontSize: "45px",
    height: "100vh"
  }

  function quandoMover(ev) {
    alterarX(ev.clientX)
    alterarY(ev.clientY)
  }

  return (
    <div style={estilo} onMouseMove={quandoMover}>
      <span>Eixo X: {x}</span>
      <span>Eixo Y: {y}</span>
    </div>
  )
}