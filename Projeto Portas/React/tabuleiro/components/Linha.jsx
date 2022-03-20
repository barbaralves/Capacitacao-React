import styles from '../styles/Linha.module.css'
import Subdivisao from "./Subdivisao";

export default function Linha(props){
  return (
    <div className={styles.linha}>
      <Subdivisao preta={props.preto} />
      <Subdivisao preta={!props.preto} />
      <Subdivisao preta={props.preto} />
      <Subdivisao preta={!props.preto} />
      <Subdivisao preta={props.preto} />
      <Subdivisao preta={!props.preto} />
      <Subdivisao preta={props.preto} />
      <Subdivisao preta={!props.preto} />
    </div>
  )
}