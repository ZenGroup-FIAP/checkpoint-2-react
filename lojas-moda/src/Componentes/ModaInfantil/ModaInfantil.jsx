import React from 'react'
import { Titulo, Subtitulo, SecaoHome, Container, Flexbox, FlexItem, TituloFlexItem} from '../../styled.js'
import Camisetas from "../../img/infantil/camisetas-infantil.jpg"
import Calcas from "../../img/infantil/calcas-infantil.jpg"
import Calcados from "../../img/infantil/calcados-infantil.jpg"
import Variados from "../../img/infantil/variados-infantil.jpg"



export default function ModaInfantil() {
    return (
        <div>
            <SecaoHome>
                <Titulo>Moda Infatil</Titulo>
                <Subtitulo>O mais corfortável, para quem mais amamos.</Subtitulo>
            </SecaoHome>
            <Container>
                <SecaoHome>
                        <Flexbox>
                            <FlexItem>
                                <img src={Camisetas} alt="Camisetas infantis" />
                                <TituloFlexItem>Camisetas</TituloFlexItem>
                            </FlexItem>
                            <FlexItem>
                                <img src={Calcas} alt="Calça infantis" />
                                <TituloFlexItem>Calças</TituloFlexItem>
                            </FlexItem>
                            <FlexItem>
                                <img src={Calcados} alt="Tênis infantis" />
                                <TituloFlexItem>Calçados</TituloFlexItem>
                            </FlexItem>
                            <FlexItem>
                                <img src={Variados} alt="Variaveis infantis" />
                                <TituloFlexItem>Variados</TituloFlexItem>
                            </FlexItem>
                        </Flexbox>
                </SecaoHome>
            </Container>    
        </div>
    )
}