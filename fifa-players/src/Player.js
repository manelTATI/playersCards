import React from 'react';
import Card from 'react-bootstrap/Card';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  const labelStyle = { fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' };
  const detailStyle = { fontWeight: 700 };
  const details = React.createElement('div', { style: { borderTop: '1px solid rgba(255, 246, 205, 0.4)', display: 'grid', gap: '8px', gridTemplateColumns: '1fr 1fr', paddingTop: '14px', textAlign: 'center' } },
    React.createElement('div', null, React.createElement('div', { style: labelStyle }, 'Nation'), React.createElement('div', { style: detailStyle }, nationality)),
    React.createElement('div', null, React.createElement('div', { style: labelStyle }, 'Age'), React.createElement('div', { style: detailStyle }, age)),
  );
  return React.createElement(Card, { className: 'player-card', style: { background: 'linear-gradient(145deg, #3b260b 0%, #b47a1c 48%, #f5d477 100%)', border: '2px solid #f5d477', borderRadius: '22px', color: '#fff8df', overflow: 'hidden', height: '100%' } },
    React.createElement(Card.Body, { style: { padding: '18px' } },
      React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' } },
        React.createElement('div', { style: { fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase' } }, 'FIFA Elite'),
        React.createElement('div', { style: { backgroundColor: '#211607', borderRadius: '10px', color: '#f5d477', fontSize: '1.35rem', fontWeight: 900, padding: '5px 10px' } }, jerseyNumber),
      ),
      React.createElement(Card.Img, { variant: 'top', src: imageUrl, alt: name, style: { border: '4px solid rgba(255, 246, 205, 0.85)', borderRadius: '50%', display: 'block', height: '190px', margin: '18px auto', objectFit: 'cover', width: '190px' } }),
      React.createElement(Card.Title, { style: { fontSize: '1.45rem', fontWeight: 900, marginBottom: '4px', textAlign: 'center' } }, name),
      React.createElement(Card.Text, { style: { color: '#fff2bb', fontSize: '0.95rem', marginBottom: '16px', textAlign: 'center' } }, team),
      details,
    ),
  );
};

Player.defaultProps = {
  name: 'Unknown Player',
  team: 'Free Agent',
  nationality: 'Unknown',
  jerseyNumber: 0,
  age: 0,
  imageUrl: 'https://placehold.co/190x190/211607/f5d477?text=Player',
};

export default Player;