import React from 'react'
import { Container, Titulo, FlexboxSobre, FlexItemSobre, TituloInterno, Subtitulo, BgHome, SecaoHome, TituloFlexItem, TituloBranco, SobreHomeP, BotaoHome, BgFooter, TextoFooter, BotaoHomeP, ListaSobre } from '../../styled'
import Alfonso from '../../img/integrantes/alfonso-matsuoka.jpg'
import Felipe from '../../img/integrantes/felipe-kim.jpg'
import Lucas from '../../img/integrantes/lucas-matutani.jpg'
import Luis from '../../img/integrantes/luis-duccini.jpg'
import MatheusFeitosa from '../../img/integrantes/matheus-feitosa.jpg'
import MatheusCruz from '../../img/integrantes/matheus-cruz.jpg'

export default function Sobre() {
    return (
        <div>
            <Container>
                <SecaoHome>
                    <Titulo>Integrantes do Grupo</Titulo>

                    <FlexboxSobre>
                        <FlexItemSobre>
                            <img src={Alfonso} alt="Alfonso" />
                            <TituloFlexItem>Alfonso Matsuoka - RM87336</TituloFlexItem>
                        </FlexItemSobre>
                        <FlexItemSobre>
                            <img src={Felipe} alt="Felipe" />
                            <TituloFlexItem>Felipe Kim - RM87067</TituloFlexItem>
                        </FlexItemSobre>
                        <FlexItemSobre>
                            <img src={Lucas} alt="Lucas" />
                            <TituloFlexItem>Lucas Matutani - RM87283</TituloFlexItem>
                        </FlexItemSobre>
                    </FlexboxSobre>

                    <FlexboxSobre>
                        <FlexItemSobre>
                            <img src={Luis} alt="Luis" />
                            <TituloFlexItem>Luís Duccini - RM88360</TituloFlexItem>
                        </FlexItemSobre>
                        <FlexItemSobre>
                            <img src={MatheusFeitosa} alt="MatheusFeitosa" />
                            <TituloFlexItem>Matheus Feitosa - RM86782</TituloFlexItem>
                        </FlexItemSobre>
                        <FlexItemSobre>
                            <img src={MatheusCruz} alt="MatheusCruz" />
                            <TituloFlexItem>Matheus Cruz - RM88987</TituloFlexItem>
                        </FlexItemSobre>
                    </FlexboxSobre>
                </SecaoHome>
            </Container>
        </div>
    )
}
