import React from 'react'
import { Container, Titulo, Flexbox, FlexItem } from '../../styled'



export default function Home() {

    return (
        <div>
            <Container>
                <section>
                    <Titulo>Zen Modas</Titulo>
                    <h3>O lugar perfeito para comprar novas peças</h3>
                </section>

                <section>
                    <h2>Confira nossas coleções</h2>
                    <Flexbox>
                        <FlexItem>
                            <img src="../../img/homem-home.jpg" alt="home-homem" />
                            <h2>Moda Masculina</h2>
                        </FlexItem>
                        <FlexItem>
                            <img src="../../img/mulher-home.jpg" alt="home-mulher" />
                            <h2>Moda Feminina</h2>
                        </FlexItem>
                        <FlexItem>
                            <img src="../../img/infantil-home.jpg" alt="home-infantil" />
                            <h2>Moda Infantil</h2>
                        </FlexItem>
                    </Flexbox>
                </section>

            </Container>
        </div>
    )
}
