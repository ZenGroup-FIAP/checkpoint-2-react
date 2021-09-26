import styled from 'styled-components';

export const Container = styled.div`
    max-width:1640px;
    position:relative;
    margin:0 auto;
`;

export const CorpoStyled = styled.div`
    text-align:center;
`;

export const Titulo = styled.h1`
 color:palevioletred;
 font-size:60px;
 font-family:georgia;
 font-weight:bold;
`;

export const Flexbox = styled.div`
    max-width: 1640px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 124px;

    @media (max-width: 1800px) {
        flex-direction: column;
        justify-content: center;

    }
`;

export const FlexItem = styled.div
    text-align: center;
;