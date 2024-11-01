import { LogoAmazon, DivLogo, CaixaLogin, FazerLoginTitulo, EmailH4, BotaoContinuar, SpanTermos, 
    LinkAjuda, InputLogin, SetaDireita, DivLinha, DivContainer, BotaoCriarConta, DivDividerReverso, DivFooter,  
    SimboloCopyRight, DivCopyRight, SpanDominio} from "./style.jsx"
import {Divider} from "@mui/material";

export const Login = () => {

    const handleLogin = () => {
        alert("Entrando...");
      };

    const handleCadastro = () => {
        alert("Criando nova conta...");
      };

    return(

    <div>

    <DivContainer>

        <DivLogo>

            <LogoAmazon src = '/logoAmazon.png' alt = 'Ola' />

            <SpanDominio>.com.br</SpanDominio>

        </DivLogo>

        <CaixaLogin>

            <FazerLoginTitulo>Fazer Login</FazerLoginTitulo>

            <EmailH4>E-mail ou número de telefone celular</EmailH4>

            <InputLogin type="email" />

            <BotaoContinuar onClick={handleLogin}>Continuar</BotaoContinuar>

            <SpanTermos>Ao continuar, você concorda com as <strong>Condições de Uso</strong> da Amazon. Por favor verifique a <strong>Notificação de Privacidade</strong>, 

            <strong>Notificação de Cookies</strong> e a <strong>Notificação de Anúncios Baseados em Interesse</strong>.</SpanTermos>

            <LinkAjuda href="">Precisa de ajuda?</LinkAjuda>

            <SetaDireita />

        </CaixaLogin>

        <DivLinha>

            <Divider><p>Novo na Amazon?</p></Divider>

        </DivLinha>

        <BotaoCriarConta onClick={handleCadastro}>Criar sua conta da Amazon</BotaoCriarConta>

        <DivDividerReverso>

            <Divider></Divider>

        </DivDividerReverso>

        <DivFooter  href="">

            <span>Condições de Uso</span>

            <span>Política de Privacidade</span>

            <span>Ajuda</span>

            <span>Cookies</span>

            <span>Anúncios Baseados em Interesses</span>

        </DivFooter>

        <DivCopyRight>

            <SimboloCopyRight />

            <span>2021-2024 Amazon.com, Inc. ou suas afiliadas</span>

        </DivCopyRight>
        
     </DivContainer>

    </div>

    )
}