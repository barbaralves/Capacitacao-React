import If from "../../components/if";

export default function condicional2( ){
  const numero = 5

  return (
    <div>
      <If teste={numero % 2 === 0} >
        O número {numero} é par
      </If>
      <If teste={numero % 2 === 1} >
        O número {numero} é ímpar
      </If>

    </div>
  )
}