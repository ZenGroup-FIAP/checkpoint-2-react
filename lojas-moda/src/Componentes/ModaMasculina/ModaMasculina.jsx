import React from 'react'
import { Titulo, Subtitulo, SecaoHome, Container, Flexbox, FlexItem, TituloFlexItem} from '../../styled.js'
import Camisetas from "../../img/masculino/camisetas-homem@2x.jpg"
import Calcas from "../../img/masculino/calcas-homem@2x.jpg"
import Calcados from "../../img/masculino/calcados-homem@2x.jpg"
import Social from "../../img/masculino/social-homem@2x.jpg"


export default function ModaMasculina() {
    return (
        <div>
            <SecaoHome>
                <Titulo>Moda masculina</Titulo>
                <Subtitulo>O melhor e mais sofisticado para homem</Subtitulo>
            </SecaoHome>

            <Container>
                <SecaoHome>
                    <Flexbox>
                        <FlexItem>
                            <img src={Camisetas} alt="Camisetas em cabides" />
                            <TituloFlexItem>Camisetas</TituloFlexItem>
                        </FlexItem>
                        <FlexItem>
                            <img src={Calcas} alt="Calça preta" />
                            <TituloFlexItem>Calças</TituloFlexItem>
                        </FlexItem>
                        <FlexItem>
                            <img src={Calcados} alt="Tênis vermelho" />
                            <TituloFlexItem>Calçados</TituloFlexItem>
                        </FlexItem>
                        <FlexItem>
                            <img src={Social} alt="Roupa social" />
                            <TituloFlexItem>Social</TituloFlexItem>
                        </FlexItem>
                    </Flexbox>
                </SecaoHome>        
            </Container>
        </div>
    )
}
