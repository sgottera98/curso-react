import React from 'react'

const GerarNumeros = () => {
    const numeros = Array(7)
    .fill(0)
    .reduce((nums) => {
        const novoNumero = GerarNumeroNaoContido(nums)
        return [ ...nums, novoNumero]
    }, [])
    .sort((n1, n2) => n1 - n2)

    return numeros.join(' ')
}

const GerarNumeroNaoContido = (array) => {
    const aleatorio = parseInt(Math.random() * 60)

    return (
        array.includes(aleatorio) ? 
        GerarNumeroNaoContido(array) :
        aleatorio
    )   
}

export default GerarNumeros
