export function getServerSideProps() {
  // convenção para dinâmico e gera propriedade para o lado do server
  console.log('[server] gerando props para o componente')
  
  return {
    props: {
      numero: Math.random()
    }
  }
}

export default function Dinamico1(props) {
  return (
    <div>
      <h1>Dinâmico 01</h1>
      <h2>{props.numero}</h2>
    </div>
  )
}

// console.log('[cliente] renderizando o componente')
