import Pessoa from "../../components/Pessoa";

export default function exemplTs() {
  return (
    <div>
      <Pessoa nome="João" idade={30}/>
      <Pessoa nome="Maria" />
    </div>
  )
}