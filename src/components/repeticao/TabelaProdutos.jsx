import React from 'react'
import produtos from '../../data/produtos'

export default (props) => {
   
    const prod = produtos.map(el => {
        return (
            <tr key={el.id}>
                <td>{el.id})</td>
                <td>{el.nome}</td>
                <td>{el.preco}</td>
            </tr>
        )
    })

    return (
        <>
            {prod}
        </>
    )
}