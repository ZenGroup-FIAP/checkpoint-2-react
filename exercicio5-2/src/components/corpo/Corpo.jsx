import React from 'react'
import { Container, CorpoStyled } from '../../styled'

export default function Corpo() {
    return (
        <div>
            <Container>
            <CorpoStyled>
            <h2>Sabores</h2>
            <ul>
                <li>morango</li>
                <li>baunilha</li>
                <li>chocolate</li>
                <li>flocos</li>
                <li>menta com chocolate</li>
                <li>napolitano</li>
                <li>côco</li>
                <li>limâo</li>
            </ul>
            <h2>Acompanhamento</h2>
            <ul>
                <li>m&m</li>
                <li>paçoca</li>
                <li>canudinho</li>
                <li>granulado</li>
                <li>banana</li>
                <li>chantilly</li>
                <li>calda de chocolate</li>
                <li>ovomaltine</li>
            </ul>
            </CorpoStyled>
            </Container>
        </div>
    )
}
