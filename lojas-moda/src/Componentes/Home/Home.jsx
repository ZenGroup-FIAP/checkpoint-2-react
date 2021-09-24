import React from 'react'
import { Container, Titulo, Flexbox, FlexItem, TituloInterno, Subtitulo } from '../../styled'



export default function Home() {

    return (
        <div>
            <Container>
                <section>
                    <Titulo>Zen Modas</Titulo>
                    <Subtitulo>O lugar perfeito para comprar novas peças</Subtitulo>
                </section>

                <section>
                    <TituloInterno>Confira nossas coleções</TituloInterno>
                    <Flexbox>
                        <FlexItem>
                            <img src="../img/homem-home.jpg" alt="home-homem" />
                            <TituloInterno>Moda Masculina</TituloInterno>
                        </FlexItem>
                        <FlexItem>
                            <img src="../../img/mulher-home.jpg" alt="home-mulher" />
                            <TituloInterno>Moda Feminina</TituloInterno>
                        </FlexItem>
                        <FlexItem>
                            <img src="../../img/infantil-home.jpg" alt="home-infantil" />
                            <TituloInterno>Moda Infantil</TituloInterno>
                        </FlexItem>
                    </Flexbox>
                </section>

            </Container>
        </div>
    )
}
