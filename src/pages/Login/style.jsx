import styled from "styled-components";
import { VscTriangleRight } from "react-icons/vsc";
import { FaRegCopyright } from "react-icons/fa";

export const DivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0px;
`;

export const LogoAmazon = styled.img`
  width: 100px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 100px;
    height: 80px;
  }
`;

export const DivLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
`;

export const SpanDominio = styled.span`
  margin-top: 7px;
  @import url("https://fonts.cdnfonts.com/css/amazon-ember");
  font-family: "Amazon Ember", sans-serif;
  font-size: 13px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const CaixaLogin = styled.div`
  border: 1px solid;
  border-radius: 10px;
  color: #dddddd;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 350px;
  flex-direction: column;
  position: relative;
`;

export const FazerLoginTitulo = styled.h2`
  @import url("https://fonts.cdnfonts.com/css/amazon-ember");
  font-family: "Amazon Ember", sans-serif;
  font-size: 28px;
  position: absolute;
  top: 10px;
  left: 15px;
  margin: 0;
  color: #111;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const InputLogin = styled.input`
  display: flex;
  margin-left: 0px;
  width: 90%;
  height: 25px;
  border-radius: 4px;
  color: #dddddd;
  border: 1px solid ${(props) => (props.hasError ? "red" : "gray")};
  border-radius: 4px;
  outline: none;
  margin-top: 15px;
  @media (min-width: 768px) {
    height: 30px;
  }
`;

export const EmailH4 = styled.h4`
  position: absolute;
  color: #000;
  margin-bottom: 220px;
  left: 17px;
  right: 100px;
  font-weight: 700;
  @import url("https://fonts.cdnfonts.com/css/amazon-ember");
  font-family: "Amazon Ember", sans-serif;
  font-size: 13px;
  bottom: 36px;
  @media (min-width: 768px) {
    font-size: 13px;
  }
`;

export const BotaoContinuar = styled.button`
  background-color: #f7ca00;
  margin-top: 20px;
  border: none;
  width: 90%;
  height: 30px;
  border-radius: 10px;
  @media (min-width: 768px) {
    height: 35px;
  }
  cursor: pointer;
`;

export const SpanTermos = styled.span`
  @import url("https://fonts.cdnfonts.com/css/amazon-ember");
  font-family: "Amazon Ember", sans-serif;
  font-size: 12px;
  color: #000;
  margin-top: 20px;
  margin-left: 17px;
  line-height: 1.4;
  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

export const LinkAjuda = styled.a`
  @import url("https://fonts.cdnfonts.com/css/amazon-ember");
  font-family: "Amazon Ember", sans-serif;
  font-size: 13px;
  display: flex;
  position: absolute;
  top: 300px;
  right: 212px;
  text-decoration: none;

  &:visited {
    color: #0066c0;
  }
  @media (min-width: 768px) {
    font-size: 13px;
  }
`;

export const MeuIcone = styled.svg`
  width: ${(props) => props.size || "24px"};
  height: ${(props) => props.size || "24px"};
`;

export const SetaDireita = styled(VscTriangleRight)`
  position: absolute;
  display: flex;
  top: 302px;
  right: 325px;
  color: #656565;
  height: 10px;
  @media (min-width: 768px) {
    height: 12px;
  }
`;

export const DivLinha = styled.div`
  @import url("https://fonts.cdnfonts.com/css/amazon-ember");
  font-family: "Amazon Ember", sans-serif;
  font-size: 12px;
  color: #767676;
  width: 19%;
`;

export const BotaoCriarConta = styled.button`
  @import url("https://fonts.cdnfonts.com/css/amazon-ember");
  font-family: "Amazon Ember", sans-serif;
  font-size: 13px;
  border: 1px solid #dddddd;
  border-radius: 10px;
  color: #000;
  background-color: #fff;
  width: 19%;
  height: 29px;
  cursor: pointer;

  @media (max-width: 320px) {
    width: 90%;
    padding: 8px;
    text-align: center;
    box-sizing: border-box;
    font-size: 13px;
    padding: 10px 0;
    line-height: 1.2;
  }
  @media (min-width: 768px) {
    font-size: 13px;
    height: 40px;
  }
`;

export const DivDividerReverso = styled.div`
  margin-top: 30px;
  color: #000;
  width: 70vw;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;

export const DivFooter = styled.a`
  @import url("https://fonts.cdnfonts.com/css/amazon-ember");
  font-family: "Amazon Ember", sans-serif;
  font-size: 13px;
  display: flex;
  text-decoration: none;
  font-size: 11px;
  flex-direction: row;
  padding-right: 10px;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
  color: #0066c0;
  &:visited {
    color: #0066c0;
  }
  @media (min-width: 768px) {
    font-size: 11px;
    gap: 30px;
  }
`;

export const SimboloCopyRight = styled(FaRegCopyright)`
  color: #555;
  font-size: 9px;
`;

export const DivCopyRight = styled.div`
  @import url("https://fonts.cdnfonts.com/css/amazon-ember");
  font-family: "Amazon Ember", sans-serif;
  font-size: 13px;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 11px;
  gap: 5px;
  margin-top: 20px;
  color: #555;
  line-height: 1.465 !important;
  @media (min-width: 768px) {
    font-size: 11px;
  }
`;
