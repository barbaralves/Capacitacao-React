import { useRouter } from 'next/router'
import Link from 'next/link'

export default function buscar() {
  const router = useRouter()
  const codigo = router.query.id

  return (
    <div>
      <h1>Rotas - {codigo} - Buscar</h1>
      <Link href="/rotas">
        <a>
          <button>Voltar</button>
        </a>
      </Link>
    </div>
  )
}