import React from 'react'
import { Container, Titulo, Flexbox, FlexItem, TituloInterno, Subtitulo, BgHome, SecaoHome, TituloFlexItem, TituloBranco, SobreHomeP, BotaoHome, BgFooter, TextoFooter, BotaoHomeP, ListaSobre } from '../../styled'

export default function Sobre() {
    return (
        <div>
            <Container>
                <SecaoHome>
                    <Titulo>Integrantes do Grupo</Titulo>
                    <ListaSobre>
                        <li>Alfonso Matsuoka Schiavelli - RM87336</li>
                        <li>Felipe Kim - RM87067</li>
                        <li>Lucas Itiro Feitosa Matutani - RM87283</li>
                        <li>Matheus Feitosa Silva - RM86782</li>
                        <li>Matheus Cruz Oliveira - RM88987</li>
                        <li>Luís Ricardo Giovani Fogaça Duccini - RM88360</li>
                    </ListaSobre>
                </SecaoHome>
            </Container>
        </div>
    )
}
