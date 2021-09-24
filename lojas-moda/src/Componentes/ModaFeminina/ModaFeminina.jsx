import React from 'react'
import { Titulo, Subtitulo } from '../../styled.js'

export default function ModaFeminina() {
    return (
        <div>
            <Titulo>Moda feminina</Titulo>
            <Subtitulo>O melhor e mais sofisticado para homem</Subtitulo>

            <ul>
                <li>
                    <img src={null} alt="Camisetas em cabides" />
                    <p>Camisetas</p>
                </li>
                <li>
                    <img src={null} alt="Calça preta" />
                    <p>Calças</p>
                </li>
                <li>
                    <img src={null} alt="Tênis vermelho" />
                    <p>Calçados</p>
                </li>
                <li>
                    <img src={null} alt="Roupa social" />
                    <p>Social</p>
                </li>
            </ul>
        </div>
    )
}
