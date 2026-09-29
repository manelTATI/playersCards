import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Player from './Player';
import { players } from './players';

const PlayersList = () => {
  return React.createElement(Row, { className: 'g-4' }, players.map((player) => React.createElement(Col, { key: `${player.name}-${player.jerseyNumber}`, xs: 12, sm: 6, lg: 3 }, React.createElement(Player, { ...player }))));
};

export default PlayersList;