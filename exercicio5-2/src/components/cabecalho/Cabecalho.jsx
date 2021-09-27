import React from 'react'
import {Container, Titulo, CorpoStyled, Subtitulo, BgCabecalho} from "../../styled.js"

export default function Cabecalho() {
    return (
       <div>
           <BgCabecalho>
                <Container>
                    <CorpoStyled>
                        <Titulo>Sorveteria ZenGroup</Titulo>
                        <Subtitulo>
                            O melhor lugar para se comprar deliciosos sorvetes.
                        </Subtitulo>
                    </CorpoStyled>
                </Container>
            </BgCabecalho>
       </div>
    )
}
