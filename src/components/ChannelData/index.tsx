import React from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  return (
    <Container>
      <Messages>
        <ChannelMessage
          author='Hermes HCG'
          date='02/02/2020'
          content='Hoje é meu aniversário!!!'
        />
        <ChannelMessage
          isBot
          hasMention
          author='Rodolfo Mariano'
          date='02/02/2020'
          content='Cê anima assistir de férias com o ex ??'
        />
        <ChannelMessage
          author='From you'
          date='02/02/2020'
          content={
            <>
              <Mention>@Rodolfo Mariano</Mention> Tá maluco?? Sai fora com essas
              idéias 😡
            </>
          }
        />
        <ChannelMessage
          isBot
          hasMention
          author='Rodolfo Mariano'
          date='02/02/2020'
          content='😞'
        />
      </Messages>

      <InputWrapper>
        <Input placeholder='Conversar em #chat-livre' />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
