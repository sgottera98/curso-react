import React from 'react'

export default (props) => {
    const { min, max } = props

    let aleatory = Math.floor(Math.random() * (props.max - props.min + 1) + props.min)
    
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>
                <strong>Valor Mínimo: </strong> {min}
            </p>
            <p>
                <strong>Valor Máximo: </strong> {max}
            </p>
            <p>
                <strong>Valor Aleatório: </strong> {aleatory}
            </p>
        </div>
    )
}