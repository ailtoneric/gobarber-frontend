import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import LogoSvg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const Signup: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={LogoSvg} alt="Go Barber" />

      <form>
        <h1>Faça seu cadastro</h1>

        <Input type="text" name="name" icon={FiUser} placeholder="Nome" />
        <Input type="text" name="email" icon={FiMail} placeholder="Email" />
        <Input
          type="password"
          name="password"
          icon={FiLock}
          placeholder="Senha"
        />

        <Button type="submit">Entrar</Button>
      </form>

      <a href="link">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
);

export default Signup;
