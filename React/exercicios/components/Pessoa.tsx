interface PessoaProps {
  nome: string
  idade?: number //não é obrigatoria
}

export default function Pessoa(props:PessoaProps) {
  return (
    <div>
      <div>Nome: {props.nome}</div>
      <div>Idade: {props.idade ?? 'Não informada'}</div>
    </div>
  )
}