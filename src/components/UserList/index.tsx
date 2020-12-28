import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname='Vinícius Crisol' />

      <Role>Offline - 13</Role>
      <UserRow nickname='Rodolfo Mariano' isBot />
      <UserRow nickname='Usuário' />
      <UserRow nickname='Usuário' />
      <UserRow nickname='Usuário' />
      <UserRow nickname='Usuário' />
      <UserRow nickname='Usuário' />
      <UserRow nickname='Usuário' />
      <UserRow nickname='Usuário' />
      <UserRow nickname='Usuário' />
      <UserRow nickname='Usuário' />
      <UserRow nickname='Usuário' />
      <UserRow nickname='Usuário' />
      <UserRow nickname='Usuário' />
      <UserRow nickname='Usuário' />
      <UserRow nickname='Usuário' />
      <UserRow nickname='Usuário' />
      <UserRow nickname='Usuário' />
      <UserRow nickname='Usuário' />
      <UserRow nickname='Usuário' />
      <UserRow nickname='Usuário' />
      <UserRow nickname='Usuário' />
      <UserRow nickname='Usuário' />
      <UserRow nickname='Usuário' />
    </Container>
  );
};

export default UserList;
