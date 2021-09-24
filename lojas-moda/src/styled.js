import styled from 'styled-components'

export const Html = styled.html`
    html, body, div, span, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, a, em, img, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, article, footer, header, nav, section, main {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
`;

export const Container = styled.div`
    max-width: 1640px;
    position: relative;
    margin: 0 auto;
`;

export const SecaoHome = styled.section`
    text-align: center;
`;

export const BotaoHome = styled.div`
    width: 250px;
    color: #FFF;
    border: 3px solid #FFF;
    border-radius: 50px;
    padding: 20px 10px; 
    text-transform: uppercase;
    letter-spacing: .1em;
    margin: 0 auto 60px auto;
`;

export const BotaoHomeP = styled.p`
    color: #FFF;
    font-size: 25px;
    font-family: Georgia;
    font-weight: normal;
`;

export const BgHome = styled.div`
    width: 100%;
    background-color: #6FAECB;
    padding: 60px 0;
`;

export const BgFooter = styled.div`
    width: 100%;
    background-color: #255870;
    padding: 30px 0;
`;

export const TextoFooter = styled.div`
    font-size: 20px;
    color: #FFF;
    font-weight: normal;
    font-family: Arial;
`;

export const Titulo = styled.h1`
    color: #3D3D3D;
    font-size: 40px;
    font-weight: bold;
    font-family: Georgia;
    margin: 60px 0 20px 0;
`;

export const TituloBranco = styled.h1`
    color: #FFF;
    font-size: 40px;
    font-weight: bold;
    font-family: Georgia;
`;

export const TituloInterno = styled.h2`
    color: #3D3D3D;
    font-size: 36px;
    font-family: Georgia;
    font-weight: bold;
    margin-bottom: 60px;
`;

export const Subtitulo = styled.h3`
    color: #3D3D3D;
    font-size: 25px;
    font-weight: normal;
    font-family: Arial;
    margin-bottom: 60px;
`;

export const Flexbox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
`;

export const FlexItem = styled.div`
    text-align: center;
`;

export const TituloFlexItem = styled.p`
    color: #3D3D3D;
    font-size: 25px;
    font-family: Georgia;
    font-weight: bold;
`;

export const SobreHomeP = styled.p`
    color: #FFF;
    font-size: 25px;
    font-family: Georgia;
    font-weight: normal;
    margin-bottom: 60px
`;