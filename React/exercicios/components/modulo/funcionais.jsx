export function Comp1() {
  return (
    <div>
      <h2>Comp1</h2>
    </div>
  )
}

export const Comp2 = function() {
  return <h2>Comp2</h2>
}

export default function Comp3() {
  return (
    <div>
      <h2>Comp3</h2>
    </div>
  )
}

export const Comp4 = props => <h2>Comp4</h2>

export const Comp5 = () => {
  return (
    <h2>Comp5</h2>
  )
}

const Comp6 = () => <h2>Comp6</h2>

const Comp7 = props => (
  <div>
    <h2>Comp7 - {props.msg}</h2>
  </div>
)

export {
  Comp6, Comp7
}