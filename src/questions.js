import React, { useState } from "react";
import mais from "./assets/sinalmais.png"
import menos from "./assets/sinalmenos.png"

export function Question({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="faq-container">
      <article className="faq-question">
        <p
          className="cursor-pointer text-faq text-lilac font-semibold"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {question}
        </p>
        <ul className="list">
          {!showAnswer && (
            <li>
              <button
                type="button"
                className="button-selected"
                onClick={() => setShowAnswer(true)}
              ><img src={mais} alt="sinal de mais"></img></button>
            </li>
          )}
          {showAnswer && (
            <li>
              <button
                type="button"
                className="button-normal"
                onClick={() => setShowAnswer(false)}
              ><img src={menos} alt="sinal de menos"></img></button>
            </li>
          )}
        </ul>
      </article>
      <article className="faq-answer">{showAnswer && <p>{answer}</p>}</article>
    </div>
  );
}