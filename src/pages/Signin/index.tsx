import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import LogoSvg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const Signin: React.FC = () => (
  <Container>
    <Content>
      <img src={LogoSvg} alt="Go Barber" />

      <form>
        <h1>Faça seu login</h1>

        <Input type="text" name="email" icon={FiMail} placeholder="Email" />
        <Input
          type="password"
          name="password"
          icon={FiLock}
          placeholder="Senha"
        />

        <Button type="submit">Entrar</Button>

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
