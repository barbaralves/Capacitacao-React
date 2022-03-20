import { useRouter } from 'next/router'
import Link from 'next/link'

export default function params() {
  const router = useRouter()

  const nome = router.query.nome
  const id = router.query.id

  return (
    <div>
      <h1>Params: {nome} e {id}</h1>
      <Link href="/rotas" passHref>
        <button>Voltar</button>
      </Link>
    </div>
  )
}