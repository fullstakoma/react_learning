import { useState } from "react";
import React from "react";

import { COMPANY_INTRODUCTION } from "./data.js";
import { USECASES } from "./data.js";
import Header from "./components/header/Header.jsx";

import BusinessIntroduction from "./components/BusinessIntroduction.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selecedButton) {
    setSelectedTopic(selecedButton);
  }

  let tabContent = <p>サービスを選んでください</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h2>{USECASES[selectedTopic].title}</h2>
        <p>{USECASES[selectedTopic].usecase}</p>
        <h3>{USECASES[selectedTopic].subTitle}</h3>
        <p>{USECASES[selectedTopic].successStory}</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="company-introduction">
          <h2>提供サービス</h2>
          <ul>
            {COMPANY_INTRODUCTION.map((companyIntroduction) => (
              <BusinessIntroduction
                key={companyIntroduction.title}
                {...companyIntroduction}
              />
            ))}
          </ul>
        </section>
        <section id="usecases">
          <h2>ユースケースとお客様からの声</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("InsightAI")}>
              Insight AI
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "SmartVision"}
              onSelect={() => handleSelect("SmartVision")}
            >
              Smart Vision
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "VoiceFlow"}
              onSelect={() => handleSelect("VoiceFlow")}
            >
              Voice Flow
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "AutoBrain"}
              onSelect={() => handleSelect("AutoBrain")}
            >
              Auto Brain
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
