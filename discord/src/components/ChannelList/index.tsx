import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';

import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Caneis de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName='chat-livre' selected />
      <ChannelButton channelName='trabalho' />
      <ChannelButton channelName='lolzinho' />
      <ChannelButton channelName='csgo' />
    </Container>
  );
};

export default ChannelList;
