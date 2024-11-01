import {
  HeaderEstilizado,
  ImgLogoAmazon,
  DivContainer,
  DivCep,
  SpanCep,
  SpanAtualizarCep,
  IconLocation,
  DivSearchBar,
  SearchButton,
  SearchInput,
  IconeLupa,
  DivFiltro,
  SpanFiltro,
  SetaBaixo,
  DivLogin,
  SpanLogin,
  SetaBaixo2,
  SpanConta,
  DivDevolucoes,
  SpanDevolucoes,
  SpanPedidos,
  IconeCarrinho,
  SpanCarrinho,
  DivDominio,
  SpanDominio,
  Header2,
  IconeMenu,
  DivTextoHeader2,
  SpanPresenteNatal,
  SetaBaixo3,
  Carrossel,
  CardPromocao,
  DivPromocao1,
  CardImages,
  ContainerImage,
  SpanOfertas,
  DivPromocao2,
  CardImages2,
  LinkOferta,
  SpanOfertasDoDia,
  CardImages3,
  DivPromocao3,
  SpanKindle,
  DivLoginSeguro,
  SpanLoginSeguro,
  ButtonLoginSeguro,
  ButtonAtualizarCep,
} from "./style";
import LogoAmazon from "../../assets/img/LogoAmazon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import React, { useState, useEffect } from "react";

export const Home = () => {
  const handleSearch = (event) => {
    event.preventDefault();
    alert("Buscando...");
  };

  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    console.log("Componente Home montado!");
    return () => {
      console.log("Componente Home desmontado!");
    };
  }, []);

  const handleCepUpdate = () => {
    setClickCount(clickCount + 1);
    alert(`CEP atualizado! Você clicou ${clickCount + 1} vezes.`);
  };

  return (
    <DivContainer>
      <HeaderEstilizado>
        <ImgLogoAmazon src={LogoAmazon} />

        <DivCep>
          <SpanCep>A entrega será feita em Bela Vista 01319900</SpanCep>
          <br />

          <IconLocation />

          <strong>
            <ButtonAtualizarCep onClick={handleCepUpdate}>
              Atualizar CEP
            </ButtonAtualizarCep>
          </strong>
        </DivCep>

        <DivSearchBar>
          <form onSubmit={handleSearch}>
            <DivFiltro>
              <SpanFiltro>Todos</SpanFiltro>
              <SetaBaixo />
            </DivFiltro>

            <SearchInput
              type="text"
              name="searchInput"
              placeholder="Pesquisa Amazon.com.br"
              required
            />

            <SearchButton type="submit">
              <IconeLupa />
            </SearchButton>
          </form>
        </DivSearchBar>

        <DivLogin>
          <SpanLogin>Olá, faça seu login</SpanLogin>
          <br />
          <strong>
            <SpanConta>Contas e Listas</SpanConta>
          </strong>
          <SetaBaixo2 />
        </DivLogin>

        <DivDevolucoes>
          <SpanDevolucoes>Devoluções</SpanDevolucoes>
          <br />
          <strong>
            <SpanPedidos>e Pedidos</SpanPedidos>
          </strong>
        </DivDevolucoes>

        <IconeCarrinho />
        <strong>
          <SpanCarrinho>Carrinho</SpanCarrinho>
        </strong>

        <DivDominio>
          <SpanDominio>.com.br</SpanDominio>
        </DivDominio>
      </HeaderEstilizado>

      <Header2>
        <IconeMenu />

        <DivTextoHeader2>
          <span>Todos</span>

          <span>Vendas na Amazon</span>

          <span>Mais Vendidos</span>

          <span>Oferta do Dia</span>

          <span>Prime</span>
          <SetaBaixo3 />

          <span>Livros</span>

          <span>Música</span>

          <span>Novidades na Amazon</span>

          <span>Eletrônicos</span>

          <span>Ideias de Presente</span>

          <span>Computadores</span>

          <span>Casa</span>

          <span>Games</span>

          <strong>
            <SpanPresenteNatal>Veja presentes de Natal</SpanPresenteNatal>
          </strong>
        </DivTextoHeader2>
      </Header2>

      <Carrossel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/719zqkz6osL._SX3000_.jpg"
            alt="Primeiro Slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/71X1m5yhYHL._SX3000_.jpg"
            alt="Segundo Slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/71UZf4O7MCL._SX3000_.jpg"
            alt="Terceiro Slide"
          />
        </Carousel.Item>
      </Carrossel>

      <CardPromocao>
        <DivPromocao1>
          <strong>
            <SpanOfertas>Ofertas Melhores Avaliadas</SpanOfertas>
          </strong>

          <ContainerImage>
            <CardImages
              src="https://m.media-amazon.com/images/I/51J5poXTtpL._AC_SY145_.jpg"
              alt=""
            />

            <CardImages
              src="https://m.media-amazon.com/images/I/61lIyAi9jxL._AC_SY145_.jpg"
              alt=""
            />

            <CardImages
              src="https://m.media-amazon.com/images/I/417cAXNnVQL._AC_SY145_.jpg"
              alt=""
            />

            <CardImages
              src="https://m.media-amazon.com/images/I/712jWs461ZL._AC_SY145_.jpg"
              alt=""
            />
          </ContainerImage>
        </DivPromocao1>

        <DivPromocao2>
          <strong>
            <SpanOfertasDoDia>
              OFERTAS do Dia: Até 40% de desconto
            </SpanOfertasDoDia>
          </strong>

          <CardImages2 src="https://images-na.ssl-images-amazon.com/images/G/32/br-events/2024/Value/gateway/10891_XCM_Desktop_CatCard_value_379x304._SY304_CB560975651_.jpg" />

          <LinkOferta href="">Ofertas do Dia</LinkOferta>
        </DivPromocao2>

        <DivPromocao3>
          <strong>
            <SpanKindle>Conheça os Novos E-readers Kindle</SpanKindle>
          </strong>

          <CardImages3 src="https://images-na.ssl-images-amazon.com/images/G/32/kindle/journeys/E9XbtL9RfzDlDqvf/MjliOWYwMzUt-w379._SY304_CB543311676_.jpg" />

          <LinkOferta href="">Confira os Lançamentos</LinkOferta>
        </DivPromocao3>

        <DivLoginSeguro>
          <SpanLoginSeguro>
            Acesse uma conta para ter a melhor experiência
          </SpanLoginSeguro>

          <ButtonLoginSeguro>Fazer login de forma segura</ButtonLoginSeguro>
        </DivLoginSeguro>
      </CardPromocao>
    </DivContainer>
  );
};
