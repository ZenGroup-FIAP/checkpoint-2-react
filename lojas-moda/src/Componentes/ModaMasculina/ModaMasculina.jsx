import React from 'react'
import Camisetas from "../../img/masculino/camisetas-homem@2x.jpg"
import Calcas from "../../img/masculino/calcas-homem@2x.jpg"
import Calcados from "../../img/masculino/calcados-homem@2x.jpg"
import Social from "../../img/masculino/social-homem@2x.jpg"


export default function ModaMasculina() {
    return (
        <div>
            <h1>Moda masculina</h1>
            <p>O melhor e mais sofisticado para homem</p>

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
