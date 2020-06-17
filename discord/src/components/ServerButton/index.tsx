import React from 'react';

import { Button } from './styles';

import logo from '../../assets/logo.svg';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <Button
      isHome={isHome}
      mentions={mentions}
      hasNotifications={hasNotifications}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src={logo} alt='Luiza Labs' />}
    </Button>
  );
};

export default ServerButton;
