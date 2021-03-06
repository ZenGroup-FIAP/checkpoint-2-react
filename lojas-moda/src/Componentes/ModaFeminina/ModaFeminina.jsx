import React from 'react'
import { Titulo, Subtitulo, SecaoHome, Container, Flexbox, FlexItem, TituloFlexItem} from '../../styled.js'
import CamisetaFeminina from '../../img/feminino/camisetas-feminino.jpg'
import CalcasFeminina from '../../img/feminino/calcas-feminino.jpg'
import CalcadosFeminina from '../../img/feminino/calcados-feminino.jpg'
import VestidosFeminina from '../../img/feminino/vestidos-feminino.jpg'

export default function ModaFeminina() {
    return (
        <div>
            <SecaoHome>
                <Titulo>Moda feminina</Titulo>
                <Subtitulo>O melhor e mais sofisticado para homem</Subtitulo>
            </SecaoHome>    

            <Container>    
                <SecaoHome>
                    <Flexbox>
                        <FlexItem>
                            <img src={CamisetaFeminina} alt="Camisetas em cabides" />
                            <TituloFlexItem>Camisetas</TituloFlexItem>
                        </FlexItem>
                        <FlexItem>
                            <img src={CalcasFeminina} alt="Calça preta" />
                            <TituloFlexItem>Calças</TituloFlexItem>
                        </FlexItem>
                        <FlexItem>
                            <img src={CalcadosFeminina} alt="Tênis vermelho" />
                            <TituloFlexItem>Calçados</TituloFlexItem>
                        </FlexItem>
                        <FlexItem>
                            <img src={VestidosFeminina} alt="Roupa social" />
                            <TituloFlexItem>Vestidos</TituloFlexItem>
                        </FlexItem>
                    </Flexbox>
                </SecaoHome>
            </Container>
        </div>
    )
}
