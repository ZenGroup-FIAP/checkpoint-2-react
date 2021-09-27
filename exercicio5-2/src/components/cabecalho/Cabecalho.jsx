import React from 'react'
import {Container, Titulo, CorpoStyled, Subtitulo} from "../../styled.js"

export default function Cabecalho() {
    return (
       <div>
            <Container>
                <CorpoStyled>
                    <Titulo>Sorveteria ZenGroup</Titulo>
                    <Subtitulo>
                        O melhor lugar para se comprar deliciosos sorvetes.
                    </Subtitulo>
                </CorpoStyled>
            </Container>
       </div>
    )
}
