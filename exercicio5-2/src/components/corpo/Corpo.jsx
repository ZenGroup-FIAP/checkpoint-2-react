import React from 'react'
import { Container, CorpoStyled, Flexbox, FlexItem, TituloItem } from '../../styled'
import Morango from '../../img/Sabores/morango.png'
import Baunilha from '../../img/Sabores/baunilha.png'
import Chocolate from '../../img/Sabores/chocolate.png'
import Coco from '../../img/Sabores/coco.png'
import Flocos from '../../img/Sabores/flocos.png'
import Limao from '../../img/Sabores/limao.png'
import ChocoMenta from '../../img/Sabores/menta-chocolate.png'
import Napolitano from '../../img/Sabores/napolitano.png'
import Banana from '../../img/Acompanhamentos/banana.png'
import CaldaChocolate from '../../img/Acompanhamentos/calda-de-chocolate.png'
import Canudo from '../../img/Acompanhamentos/canudinho.png'
import Chantilly from '../../img/Acompanhamentos/chantilly.png'
import Granulado from '../../img/Acompanhamentos/granulado.png'
import Mm from '../../img/Acompanhamentos/mm.png'
import OvoMaltine from '../../img/Acompanhamentos/ovomaltine.png'
import Pacoca from '../../img/Acompanhamentos/pacoca.png'


export default function Corpo() {
    return (
        <div>
            <Container>
            <CorpoStyled>
                <Flexbox>
                    <FlexItem> 
                        <img src={Morango} alt="Morango" />
                        <TituloItem>Morango</TituloItem>
                    </FlexItem>
                </Flexbox>
            <h2>Sabores</h2>
            <ul>
                <li>morango</li>
                <li>baunilha</li>
                <li>chocolate</li>
                <li>flocos</li>
                <li>menta com chocolate</li>
                <li>napolitano</li>
                <li>côco</li>
                <li>limâo</li>
            </ul>
            <h2>Acompanhamento</h2>
            <ul>
                <li>m&m</li>
                <li>paçoca</li>
                <li>canudinho</li>
                <li>granulado</li>
                <li>banana</li>
                <li>chantilly</li>
                <li>calda de chocolate</li>
                <li>ovomaltine</li>
            </ul>
            
            </CorpoStyled>
            </Container>
        </div>
    )
}
