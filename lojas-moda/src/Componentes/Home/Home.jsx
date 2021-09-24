import React from 'react'
import { Container, Titulo, Flexbox, FlexItem, TituloInterno, Subtitulo, BgHome, SecaoHome, TituloFlexItem, TituloBranco, SobreHomeP, BotaoHome, BgFooter, TextoFooter, BotaoHomeP } from '../../styled'
import HomemHome from '../../img/homem-home.jpg'
import MulherHome from '../../img/mulher-home.jpg'
import InfantilHome from '../../img/infantil-home.jpg'

export default function Home() {

    return (
        <div>
            <Container>
                    <SecaoHome>
                        <Titulo>Zen Modas</Titulo>
                        <Subtitulo>O lugar perfeito para comprar novas peças</Subtitulo>
                    </SecaoHome>
                </Container>
                    
                <Container>
                    <SecaoHome>
                        <TituloInterno>Confira nossas coleções</TituloInterno>
                        <Flexbox>
                            <FlexItem>
                                <img src={HomemHome} alt="home-homem" />
                                <TituloFlexItem>Moda Masculina</TituloFlexItem>
                            </FlexItem>
                            <FlexItem>
                                <img src={MulherHome} alt="home-mulher" />
                                <TituloFlexItem>Moda Feminina</TituloFlexItem>
                            </FlexItem>
                            <FlexItem>
                                <img src={InfantilHome} alt="home-infantil" />
                                <TituloFlexItem>Moda Infantil</TituloFlexItem>
                            </FlexItem>
                        </Flexbox>
                    </SecaoHome>
                </Container>

                <BgHome>
                    <Container>
                        <SecaoHome>
                            <TituloBranco>Saiba mais sobre nós</TituloBranco>
                            <SobreHomeP>
                            Para saber mais sobre o time por trás deste projeto, basta clicar no botão abaixo
                            </SobreHomeP>
                            <BotaoHome>
                                <BotaoHomeP>
                                    Sobre
                                </BotaoHomeP>
                            </BotaoHome>
                        </SecaoHome>
                    </Container>
                </BgHome>

                <BgFooter>
                    <Container>
                        <SecaoHome>
                            <TextoFooter>
                                ZenModas 2021 - Todos os direitos reservados.
                            </TextoFooter>
                        </SecaoHome>
                    </Container>
                </BgFooter>
        </div>
    )
}
