export default function Filho(props) {
  
  console.log(props.funcao)
  
  return (
    <div>
      <h1>Filho s</h1>
      <button onClick={props.funcao}>Falar com pai #1</button>
      <button onClick={() => props.funcao("Passei nas N.O.M.S.!", "ihull")}>Falar com pai #2</button>
    </div>
  )
}