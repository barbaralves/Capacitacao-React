import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div>
      <h2>Família {props.familia}</h2>
      <Filho nome="Gina" familia={props.familia}/>
      <Filho nome="Luna" familia={props.familia}/>
      <Filho {...props} nome="Hermione"/>
    </div>
  )
}