export function getStaticProps() {
  // Convenção: esse método criado quer dizer que o conteúdo é estático
  return {
    props: {
      numero: Math.random()
    }
  }
}

export default function Estatico2(props) {
    return (
    <div>
      <h1>Estático 02</h1>
      <h2>{props.numero}</h2>
    </div>
  )
}

// no modo de desenvolvimento ele chama a função várias vezes
// não acontece fora desse modo, é chamada apenas uma vez