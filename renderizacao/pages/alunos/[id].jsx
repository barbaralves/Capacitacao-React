export function getStaticPaths() {
  return {
    fallback: false, // se não encontrar o id na barra de navegação vai gerar um erro 404
    paths: [
      { params: { id: '7' } },
      { params: { id: '9' } },
      { params: { id: '3' } },
    ]
  }
}

export async function getStaticProps({ params }) { //vai chamar a função 3 vezes, 3 paths
  const resp = await fetch(`http://localhost:3000/api/alunos/${params.id}`)
  const aluno = await resp.json()
  
  return {
    props: {
      aluno
    }
  }
}

export default function AlunoPorId({props}) {
  const { aluno } = props
  return (
    <div>
      <h1>Detalhes do Aluno</h1>
      <ul>
        <li>{aluno.id}</li>
        <li>{aluno.nome}</li>
        <li>{aluno.ano}</li>
      </ul>
    </div>
  )
}