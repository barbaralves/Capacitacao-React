export default function ContadorDisplay(props) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "50px",
      width: "50px",
      borderRadius: "100px",
      backgroundColor: "#222",
      color: "#FFF",
      margin:"5px 10px"
    }}>
      {props.numero}
    </div>
  )
}