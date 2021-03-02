import React from 'react'
import produtos from '../../data/produtos'

export default (props) => {
   
    const prod = produtos.map(el => {
        return (
            <li key={el.id}>
                {el.id}) {el.nome}, {el.preco}
            </li>
        )
    })

    return (
        <ul style={{listStyle: "none"}}>
            {prod}
        </ul>
    )
}