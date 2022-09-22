import React from 'react';
import bigLogo from '../assets/img/big-logo.png';

export default function EnterScreen({
  showScreenTwo,
  deckState,
  setDeckState,
  deck1,
  deck2,
}) {
  return (
    <section className="screenOne">
      <img src={bigLogo} alt="" />
      <h1>ZapRecall</h1>
      <select
        onChange={(e) => {
          const selectedDeck = e.target.value;
          if (selectedDeck === 'deck1') {
            setDeckState(deck1);
          } else if (selectedDeck === 'deck2') {
            setDeckState(deck2);
          }
        }}
      >
        <option value="" selected disabled hidden>
          Escolha um dos decks:
        </option>
        <option value="deck1">Protocolo HTTP</option>
        <option value="deck2">Internet</option>
      </select>
      <button
        onClick={() => {
          if (deckState === '') {
            return alert('Vocẽ precisa escolher um dos decks!');
          }
          showScreenTwo('screenTwo');
        }}
      >
        <p>Iniciar Recall!</p>
      </button>
    </section>
  );
}
