export default function Titulo(info) {
    if(info.pequeno) {
        return(
            <>
                <p>{info.principal}</p>
                <p>{info.secundario}</p>
            </>
        )
    } else {
        return(
            <>
                <h1>{info.principal}</h1>
                <h2>{info.secundario}</h2>
            </>
        )
    }
}