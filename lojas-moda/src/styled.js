import styled from 'styled-components'

export const Cabecalho = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap');
    display: flex;
    background-color: #6FAECB;
    justify-content: space-between;
    align-items: center;
    padding: 10px 80px;

    .logo-img svg {
        width: 200px;
    }

    ul {
        display: flex;
        list-style-type: none;
        flex-wrap: wrap;
    }

    ul li {
        margin: 0px 20px;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: bold;
        
    }

    a {
        color: #FFF;
        text-decoration: none;
    }

    @media (max-width: 820px) {
        flex-direction: column;
        justify-content: center;
    }

    @media (max-width: 640px) {
        ul {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        ul li {
            margin: 10px 0px;
        }
    }
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

    a {
        text-decoration: none;
        color: #FFF;
    }
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
    max-width: 1640px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 124px;

    @media (max-width: 1800px) {
        flex-direction: column;
        justify-content: center;

    }
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

export const ListaSobre = styled.ul`
    font-family: Arial;
    font-size: 20px;
    line-height: 30px;
    margin: 120px auto 363px auto;
    font-style: italic;
    font-weight: bold;
    color: #3d3d3d;

    @media (max-width: 640px) {
        margin: 120px auto 160px auto;

    }
`;

export const FlexboxSobre = styled.div`
    max-width: 1640px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1800px) {
        flex-direction: column;
        justify-content: center;

    }
`;

export const FlexItemSobre = styled.div`
    text-align: center;
    margin: 40px auto 80px auto;

    @media (max-width: 1800px) {
        margin: 40px auto 40px auto;

    }
`;