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
    margin-bottom: 20px;
`;

export const Subtitulo = styled.h2`
    color: #3d3d3d;
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: normal;
    margin-bottom: 40px;
`; 

export const TituloInterno = styled.h2`
    color: #3d3d3d;
    font-size: 36px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: normal;
    margin-bottom: 40px;
    text-transform: uppercase;
`; 

export const Flexbox = styled.div`
    max-width: 1640px;
    display: flex;
    justify-content: space-between;
    margin: 0;

    @media (max-width: 1800px) {
        flex-direction: column;
        justify-content: center;

    }
`;

export const FlexItem = styled.div`
    text-align:center;
    margin-bottom: 40px;
`;

export const TituloItem = styled.p`
    font-size: 20px;
    color: #3d3d3d;
    font-family: Arial, Helvetica, sans-serif;

`;

export const TextoRodape = styled.p`
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
`;

export const BgCabecalho = styled.div`
    width: 100%;
    background-color:papayawhip;
    padding:60px 0;
    margin-bottom: 40px;
`;

export const BgRodape = styled.div`
    width: 100%;
    background-color:palevioletred;
    padding:40px 0;
`;