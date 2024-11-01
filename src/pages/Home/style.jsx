import styled from 'styled-components';
import { GrLocation } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { BiSolidDownArrow } from "react-icons/bi";
import { RiShoppingCartFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { Carousel } from 'react-bootstrap';


export const DivContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0px;
    overflow: hidden;
    @media (max-width: 320px) {
        padding: 0 10px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 10px;
    }
`;

export const HeaderEstilizado = styled.header`
background-color: #131921;
position: relative;
width: 100%;
height: 63px;
@media (max-width: 320px) {
        height: auto;
        flex-direction: column;
        align-items: center;
    }

@media (max-width: 768px) {
        height: auto; 
    }
`;

export const ImgLogoAmazon = styled.img`
    position: relative;
    width: 130px;
    height: 130px;
    margin-top: 13px;
    bottom: 41px;
    @media (max-width: 320px) {
        width: 80px; 
    }

    @media (max-width: 768px) {
        width: 100px; 
        height: 100px;
    }
    
`;

export const DivCep = styled.div`
    position: relative;
    width: 400px;
    bottom: 133px;
    left: 200px;
    color: #fff;
    @media (max-width: 320px) {
        bottom: 20px;
    }
    @media (max-width: 768px) {
        width: 100%; 
        text-align: center; 
    }

`;

export const SpanCep = styled.span`
    @import url('https://fonts.cdnfonts.com/css/amazon-ember');
    font-family: 'Amazon Ember', sans-serif;
    font-size: 12px;
    color: #CCCCCC;
`;

export const SpanAtualizarCep = styled.span`
    @import url('https://fonts.cdnfonts.com/css/amazon-ember');
    font-family: 'Amazon Ember', sans-serif;
    font-size: 14px;
    position: relative;
    right: 16px;
    color: #fff;
`;

export const IconLocation = styled(GrLocation)`
    position: relative;
    right: 20px;
`;

export const DivSearchBar = styled.div`
    position: relative;
    bottom: 190px;
    left: 460px;
    @media (max-width: 320px) {
        flex-direction: column; 
        align-items: center;
    }
    @media (max-width: 768px) {
        width: 100%; 
        display: flex;
        flex-direction: column;
        align-items: center; 
    }
`;

export const SearchInput = styled.input`
    position: relative;
    height: 38px;
    bottom: 20px;
    width: 900px;
    left: 69px;
    border: none;
    @media (max-width: 320px) {
        width: 80%; 
    }
    @media (max-width: 768px) {
        width: 100%; 
        margin-bottom: 10px; 
    }
`;

export const SearchButton = styled.button`
    position: relative;
    left: 69px;
    border: none;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
    height: 38px;
    bottom: 21px;
    width: 40px;
    background-color: #FEBD69;
    
    
`;

export const IconeLupa = styled(IoSearchOutline)`
    position: relative;
    font-size: 20px;
`;

export const DivFiltro = styled.div`
    background-color: #D4D4D4;
    width: 40px;
    position: relative;
    top: 18px;
    height:38px;
    width: 70px;
    text-align: center;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
`;
export const SpanFiltro = styled.span`
    @import url('https://fonts.cdnfonts.com/css/amazon-ember');
    font-family: 'Amazon Ember', sans-serif;
    font-size: 12px;
    color: #555;
    position: relative;
    top: 8px;
`;

export const SetaBaixo = styled(BiSolidDownArrow)`
    position: relative;
    left: 6px;
    height: 8px;
    width: 10px;
    color: #555;
    top: 7px;
`;

export const DivLogin = styled.div`
    position: relative;
    bottom: 256px;
    color: #fff;
    left: 1504px;
    @media (max-width: 320px) {
        bottom: 20px;
    }
`;

export const SpanLogin = styled.span`
    @import url('https://fonts.cdnfonts.com/css/amazon-ember');
    font-family: 'Amazon Ember', sans-serif;
    font-size: 12px;
    `;

export const SpanConta = styled.span`
    @import url('https://fonts.cdnfonts.com/css/amazon-ember');
    font-family: 'Amazon Ember', sans-serif;
    font-size: 14px;
    `;

export const SetaBaixo2 = styled(BiSolidDownArrow)`
position: relative;
left: 6px;
height: 8px;
width: 10px;
color: #A7ACB2;
`;

export const DivDevolucoes = styled.div`
    position: relative;
    bottom: 304px;
    left: 1648px;
    color: #fff;
`;

export const SpanDevolucoes = styled.span`
     @import url('https://fonts.cdnfonts.com/css/amazon-ember');
    font-family: 'Amazon Ember', sans-serif;
    font-size: 12px;
`;

export const SpanPedidos = styled.span`
    @import url('https://fonts.cdnfonts.com/css/amazon-ember');
    font-family: 'Amazon Ember', sans-serif;
    font-size: 14px;
`;

export const IconeCarrinho = styled(RiShoppingCartFill)`
    position: relative;
    bottom: 345px;
    left: 1740px;
    color: #fff;
    font-size: 40px;
`;

export const SpanCarrinho = styled.span`
    @import url('https://fonts.cdnfonts.com/css/amazon-ember');
    font-family: 'Amazon Ember', sans-serif;
    font-size: 14px;
    position: relative;
    bottom: 309px;
    left: 1745px;
    color: #fff;
`;

export const DivDominio = styled.div`
    position: relative;
    bottom: 384px;  
    left: 116px;
    width: 30px;
`;

export const SpanDominio = styled.span`
    @import url('https://fonts.cdnfonts.com/css/amazon-ember');
    font-family: 'Amazon Ember', sans-serif;
    font-size: 13.5px;
    color: #fff;
`;

export const Header2 = styled.header`
    background-color: #232F3E;
    position: relative;
    width: 100vw;
    height: 40px;

`;

export const IconeMenu = styled(GiHamburgerMenu)`
    position: relative;
    color: #fff;
    left: 40px;
    top: 10px;
    font-size: 17px;
`;

export const DivTextoHeader2 = styled.div`
    @import url('https://fonts.cdnfonts.com/css/amazon-ember');
    font-family: 'Amazon Ember', sans-serif;
    font-size: 14px;
    position: relative;
    display: flex;
    bottom: 10px;
    left: 64px;
    color: #fff;
    gap: 40px;      
    white-space: nowrap;
`;

export const SpanPresenteNatal = styled.span`
    @import url('https://fonts.cdnfonts.com/css/amazon-ember');
    font-family: 'Amazon Ember', sans-serif;
    font-size: 16px;
    position: relative;
    left: 110px;
`;

export const SetaBaixo3 = styled(BiSolidDownArrow)`
    position: relative;
    font-size: 8px;
    right: 35px;
    top: 4px;
    color: #A7ACB2;
`;

export const Carrossel = styled(Carousel)`
    width: 600px; 
    margin: 20px auto; 

    .carousel-item img {
        width: 100%;
        height: 300px; 
        object-fit: cover; 
    }

    .carousel-control-prev,
    .carousel-control-next {
        filter: invert(1); 
    }
    .carousel-item img {
        width: 100%; 
        height: auto; 
    }
`;

export const DivPromocao1 = styled.div`
    position: relative;
    right: 740px;
    border:  1px solid #DDDDDD;
    border-radius: 4px;
    width: 350px;
    height: 400px;
    @media (max-width: 768px) {
        width: 90%; 
        margin: 10px auto; 
    }
`;

export const CardPromocao = styled.div`
    justify-content: space-between;
`;

export const CardImages = styled.img`
    width: 38%; 
    padding: 0 5px 0 5px;
    height: 170px;
    margin: 1%; 
    border-radius: 4px; 
`;

export const ContainerImage = styled.div`
    display: flex; 
    flex-wrap: wrap; 
    justify-content: space-between; 
`;

export const LinkVerMais = styled.div`
    text-decoration: none;
    position: relative;
    color: #0066C0;
    top: 170px;
    right: 270px;
`;

export const SpanOfertas = styled.span`
    position: relative;
    left: 20px;
`;

export const DivPromocao2 = styled.div`
    position: relative;
    bottom: 410px;
    border:  1px solid #DDDDDD;
    right: 240px;
    border-radius: 4px;
    width: 350px;
    height: 400px;
    `;

    export const CardImages2 = styled.img`
        height: 60%;
        position: relative;
        top: 20px;
        left: 25px;
    `;

    export const LinkOferta = styled.a`
        position: relative;
        top: 60px;
        left: 27px;
        text-decoration: none;
        color: #007185;
    `;

    export const SpanOfertasDoDia = styled.span`
        position: relative;
        left: 25px;
    `;

    export const CardImages3 = styled.img`
        height: 60%;
        position: relative;
        top: 20px;
        left: 25px;
    `;

    export const DivPromocao3 = styled.div`
        position: relative;
        bottom: 807px;
        border:  1px solid #DDDDDD;
        left: 270px;
        border-radius: 4px;
        width: 350px;
        height: 400px;
    `;

    export const SpanKindle = styled.span`
        position: relative;
        left: 23px;
    `;
    
    export const DivLoginSeguro = styled.div`
        position: relative;
        bottom: 1209px;
        border:  1px solid #DDDDDD;
        left: 700px;
        border-radius: 4px;
        width: 370px;
        height: 120px;
    `;

    export const SpanLoginSeguro = styled.span`
        @import url('https://fonts.cdnfonts.com/css/amazon-ember');
        font-family: 'Amazon Ember', sans-serif;
        font-size: 21px;
        position: relative;
        top: 10px;
        left: 25px;
    `;

    export const ButtonLoginSeguro = styled.button`
        @import url('https://fonts.cdnfonts.com/css/amazon-ember');
        font-family: 'Amazon Ember', sans-serif;
        font-size: 13px;
        border: none;
        background-color: #F7CA00;
        position: relative;
        right: 10px;
        top: 45px;
        border-radius: 20px;
    `;

    export const ButtonAtualizarCep = styled.button`
        border: none;
        background-color: #131921;
        color: #fff;
    `;