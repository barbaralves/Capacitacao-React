export default function SomentePar(props) {
  // if (props.numero % 2 === 0)
  //   return <span>{props.numero}</span>
  // else
  //   return null

  const numPar = props.numero % 2 === 0
  //return numPar ? <span>{props.numero}</span> : null
  
  return (
    <div>
      {numPar ? 
        <span>{props.numero}</span> : 
        null
      }
    </div>
  )
}