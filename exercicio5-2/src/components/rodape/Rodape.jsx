import React from 'react'
import { Container, CorpoStyled, TextoRodape, BgRodape } from '../../styled'
import Corpo from '../corpo/Corpo'

export default function Rodape() {
    return (
        <div>
            <BgRodape>
                <Container>
                    <CorpoStyled>
                        <TextoRodape>Rua ZenCream 707, bairro ZenSpace, cep:00000-000</TextoRodape>
                        <TextoRodape>Sorveteria Zen Group 2021 - Todos os direitos reservados</TextoRodape>
                    </CorpoStyled>
                </Container>
            </BgRodape>
        </div>
    )
}
