import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import LogoSvg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const Signin: React.FC = () => (
  <Container>
    <Content>
      <img src={LogoSvg} alt="Go Barber" />

      <form>
        <h1>Faça seu login</h1>

        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>

        <a href="link">Esqueci minha senha</a>
      </form>

      <a href="link">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default Signin;
