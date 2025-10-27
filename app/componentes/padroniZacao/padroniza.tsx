import  "./padronizacao.scss";

interface PadronizaProps {
    text: string
}


export function Padroniza({text} : PadronizaProps) {
    return(
        <h3 className="padro-nizado">{text}</h3>
    )
}