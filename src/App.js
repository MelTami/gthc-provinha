import "./styles/styles.css"
import icon from "./assets/Star 1.png"
import React, { useState } from "react";
import { Question } from "./questions";
import { faqData } from "./Questionsfaq";

function App() {
    const [cards] = useState(faqData);
    return (
        <div class="faq">
            <div class="title">
                <img src={icon} alt="Estrela verde"/>
                <h1> FAQs </h1>
            </div>
            <div class="faq-container" id="faq">

                {cards.map((card, index) => (
                    <Question {...card} key={index} />
                ))}

            </div>
        </div >

    );
}

export default App