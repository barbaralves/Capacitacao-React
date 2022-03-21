export default function lista_opc01() {
    return (
        <div>
            <span>1, </span>
            <span>2, </span>
            <span>3, </span>
            <span>4, </span>
            <span>5, </span>
            <span>6, </span>
            <span>7, </span>
            <span>8, </span>
            <span>9, </span>
            <span>10 </span>
            <br />
            {lista_opc02()}
            <br />
            {lista_opc03()}
        </div>
    )
}

function lista_opc02() {
    const lista = [
        <span>1, </span>,
        <span>2, </span>,
        <span>3, </span>,
        <span>4, </span>,
        <span>5, </span>,
        <span>6, </span>,
        <span>7, </span>,
        <span>8, </span>,
        <span>9, </span>,
        <span>10 </span>
    ]
    return lista
}

function lista_opc03() {
    const lista = []
    for(var i = 1; i <= 10; i++){
        lista.push(<span>{i}, </span>)
    }
    return lista
}