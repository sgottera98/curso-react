import React from 'react'

export default props => {
    const min = 20
    const max = 65

    const geraIdade = () => parseInt(Math.random() * (max - min) + min)
    const geraNerd = () => Math.random() > 0.5

    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => props.quandoClicar('João', geraIdade(), geraNerd() )}>
                Fornecer Informações
            </button>
        </div>
    )
}