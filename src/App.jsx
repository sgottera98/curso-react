import './App.css'
import React from 'react'

import Card from './components/layouts/Card'

import Mega from './components/mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParouImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Familia from './components/basicos/Familia'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

export default _ => 
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#13 - Numeros da Mega" color="#425742">
                <Mega />
            </Card>

            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={20}/>
            </Card>

            <Card titulo="#11 - Componente Controlado (input)" color="#E45F56">
                <Input />
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai />
            </Card>

            <Card titulo="#9 - Comunicação Direta" color="#59323C">
                <DiretaPai />
            </Card>

            <Card titulo="#8 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={4}/>
                <UsuarioInfo usuario={{ nome: 'Fernando' }}/>
                {/* <UsuarioInfo usuario={{ email: 'fer@nando.com' }}/> */}
            </Card>

            <Card titulo="#7 - Desafio Repetição" color="#3A9AD9">
                <TabelaProdutos/>
            </Card>

            <Card titulo="#6 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>
            
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
