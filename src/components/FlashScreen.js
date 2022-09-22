import React, { useState } from 'react';
import Question from './Question';
import Footer from './Footer';
import logo from '../assets/img/logo.png';

export default function FlashScreen({ deckState }) {
  const [answerZap, setAnswerZap] = useState([]);

  function mix() {
    if (answerZap.length === 0) {
      return 0.5 - Math.random();
    }
  }
  return (
    <section className="screenTwo">
      <header>
        <img src={logo} alt="ZapRecall logo" />
        <h1>ZapRecall</h1>
      </header>
      <section className="main">
        <section className="questions">
          {deckState.sort(mix).map((question, index) => (
            <Question
              key={index}
              questionNumber={index}
              question={question.question}
              answer={question.answer}
              setAnswered={setAnswerZap}
              answerZap={answerZap}
            />
          ))}
        </section>
      </section>

      <Footer answerZap={answerZap} answerNumber={answerZap.length} />
    </section>
  );
}
