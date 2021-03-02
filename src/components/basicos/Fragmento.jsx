import React from 'react'

export default function Fragmento (props) {
    return (
        // <></> forma reduzida de declaracao de fragmento, porem nao passa key ou propriedade
        // <React.Fragment key="1">
        <>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </>
        // </React.Fragment>
    )
}