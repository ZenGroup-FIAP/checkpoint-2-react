import React from 'react'
import Styled from '../../styled.js'
import {Titulo, Subtitulo} from '../../styled.js'


export default function ModaFeminina() {
    return (
        <div>
            <Titulo>Moda feminina</Titulo>
            <Subtitulo>O melhor e mais sofisticado para homem</Subtitulo>

            <ul>
                <li>
                    <img src={Camisetas} alt="Camisetas em cabides" />
                    <p>Camisetas</p>
                </li>
                <li>
                    <img src={Calcas} alt="Calça preta" />
                    <p>Calças</p>
                </li>
                <li>
                    <img src={Calcados} alt="Tênis vermelho" />
                    <p>Calçados</p>
                </li>
                <li>
                    <img src={Social} alt="Roupa social" />
                    <p>Social</p>
                </li>
            </ul>
        </div>
    )
}
