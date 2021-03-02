import './App.css'
import React from 'react'

import FamiliaMembro from './components/basicos/FamiliaMembro'
import Familia from './components/basicos/Familia'
import Card from './components/layouts/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

export default _ => 
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#5 - Componentes com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo"  />
                </Familia>
            </Card>
            <Card titulo="#4 - Desafio Aleatório" color="#FA6900" >
                <Aleatorio min={5} max={10}/>
            </Card>
            <Card titulo="#3 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>
            <Card titulo="#2 - Com Parametro" color="#E8B71A">
                <ComParametro 
                    titulo="Situação do aluno" 
                    aluno="Pedro Silva" nota={9.3} />
                <ComParametro 
                    titulo="Situação do aluno" 
                    aluno="Maria" nota={6.2} />
            </Card>
            <Card titulo="#1 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>

    </div>
