export async function getStaticProps() { //assincrona
  console.log('[server] gerando props para o componente')
  const resp = await fetch('http://localhost:3000/api/horcrux')
  const horcruxes = await resp.json()

  return {
    props: {
      horcruxes
    }
  }
}

export default function Estatico4(props) {
  console.log('[cliente] renderizando o componente')
  function renderizarHorcux() {
    return props.horcruxes.map(horcrux => {
      return (
        <li key={horcrux.id}>
          Horcrux {horcrux.id}: {horcrux.nome} foi destruida no filme {horcrux.filme}
        </li>
      )
    })
  }

    return (
    <div>
      <h1>Estático 04</h1>
      <ul>
        {renderizarHorcux()}
      </ul>
    </div>
  )
}

// para fazer o build tem que deixar o dev rodando