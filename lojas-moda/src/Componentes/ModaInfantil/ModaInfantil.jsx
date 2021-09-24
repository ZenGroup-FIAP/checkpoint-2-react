import React from 'react'
import Camisetas from "../../img/infantil/camisetas-infantil.jpg"
import Calcas from "../../img/infantil/calcas-infantil.jpg"
import Calcados from "../../img/infantil/calcas-infantil.jpg"
import Variados from "../../img/infantil/variados-infantil.jpg"


export default function ModaInfantil() {
    return (
        <div>
            <h1>Moda Infatil</h1>
            <p>O mais corfortável, para quem mais amamos.</p>

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
                    <img src={Variados} alt="Roupa social" />
                    <p>Variados</p>
                </li>
            </ul>
        </div>
    )
}