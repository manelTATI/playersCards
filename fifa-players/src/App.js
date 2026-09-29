import React from 'react';
import Container from 'react-bootstrap/Container';
import PlayersList from './PlayersList';
import './App.css';

const App = () => {
  return React.createElement('main', { className: 'app-shell' }, React.createElement(Container, null,
    React.createElement('header', { className: 'app-header' },
      React.createElement('p', { className: 'eyebrow' }, 'Ultimate Team Collection'),
      React.createElement('h1', null, 'FIFA Player Cards'),
      React.createElement('p', { className: 'subtitle' }, 'Meet the icons who define the beautiful game.'),
    ),
    React.createElement(PlayersList),
  ));
};

export default App;