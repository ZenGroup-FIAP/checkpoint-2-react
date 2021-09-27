import React from 'react'
import { Container, CorpoStyled, Flexbox, FlexItem, TituloItem } from '../../styled'
import Morango from '../../img/Sabores/morango.png'
import Baunilha from '../../img/Sabores/baunilha.png'
import Chocolate from '../../img/Sabores/chocolate.png'
import Coco from '../../img/Sabores/coco.png'
import Flocos from '../../img/Sabores/flocos.png'
import Limao from '../../img/Sabores/limao.png'
import ChocoMenta from '../../img/Sabores/menta-chocolate.png'
import Napolitano from '../../img/Sabores/napolitano.png'
import Banana from '../../img/Acompanhamentos/banana.png'
import CaldaChocolate from '../../img/Acompanhamentos/calda-de-chocolate.png'
import Canudo from '../../img/Acompanhamentos/canudinho.png'
import Chantilly from '../../img/Acompanhamentos/chantilly.png'
import Granulado from '../../img/Acompanhamentos/granulado.png'
import Mm from '../../img/Acompanhamentos/mm.png'
import OvoMaltine from '../../img/Acompanhamentos/ovomaltine.png'
import Pacoca from '../../img/Acompanhamentos/pacoca.png'


export default function Corpo() {
    return (
        <div>
            <Container>
            <CorpoStyled>
                <Flexbox>
                    <FlexItem> 
                        <img src={Morango} alt="Morango" />
                        <TituloItem>Morango</TituloItem>
                    </FlexItem>
                    <FlexItem> 
                        <img src={Baunilha} alt="Baunilha" />
                        <TituloItem>Baunilha</TituloItem>
                    </FlexItem>
                    <FlexItem> 
                        <img src={Chocolate} alt="Chocolate" />
                        <TituloItem>Chocolate</TituloItem>
                    </FlexItem>
                    <FlexItem> 
                        <img src={Coco} alt="Coco" />
                        <TituloItem>Coco</TituloItem>
                    </FlexItem>
                </Flexbox>

                <Flexbox>
                <FlexItem> 
                        <img src={Flocos} alt="Flocos" />
                        <TituloItem>Flocos</TituloItem>
                    </FlexItem>
                    <FlexItem> 
                        <img src={Limao} alt="Limao" />
                        <TituloItem>Limão</TituloItem>
                    </FlexItem>
                    <FlexItem> 
                        <img src={ChocoMenta} alt="Chocolate com menta" />
                        <TituloItem>Choco Menta</TituloItem>
                    </FlexItem>
                    <FlexItem> 
                        <img src={Napolitano} alt="Napolitano" />
                        <TituloItem>Napolitano</TituloItem>
                    </FlexItem>
                </Flexbox>

                <Flexbox>
                <FlexItem> 
                        <img src={Banana} alt="Banana" />
                        <TituloItem>Banana</TituloItem>
                    </FlexItem>
                    <FlexItem> 
                        <img src={CaldaChocolate} alt="Calda de chocolate" />
                        <TituloItem>Calda de chocolate</TituloItem>
                    </FlexItem>
                    <FlexItem> 
                        <img src={Canudo} alt="Canudo" />
                        <TituloItem>Canudo</TituloItem>
                    </FlexItem>
                    <FlexItem> 
                        <img src={Chantilly} alt="Chantilly" />
                        <TituloItem>Chantilly</TituloItem>
                    </FlexItem>
                </Flexbox>

                <Flexbox>
                <FlexItem> 
                        <img src={Granulado} alt="Granulado" />
                        <TituloItem>Granulado</TituloItem>
                    </FlexItem>
                    <FlexItem> 
                        <img src={Mm} alt="Mm" />
                        <TituloItem>M&amp;M's</TituloItem>
                    </FlexItem>
                    <FlexItem> 
                        <img src={OvoMaltine} alt="OvoMaltine" />
                        <TituloItem>OvoMaltine</TituloItem>
                    </FlexItem>
                    <FlexItem> 
                        <img src={Pacoca} alt="Paçoca" />
                        <TituloItem>Paçoca</TituloItem>
                    </FlexItem>
                </Flexbox>
            </CorpoStyled>
            </Container>
        </div>
    )
}
