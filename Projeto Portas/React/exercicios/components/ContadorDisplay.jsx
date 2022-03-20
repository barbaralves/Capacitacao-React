export default function ContadorDisplay(props) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "50px",
      width: "50px",
      backgroundColor: "#222",
      color: "#FFF",
    }}>
      {props.numero}
    </div>
  )
}