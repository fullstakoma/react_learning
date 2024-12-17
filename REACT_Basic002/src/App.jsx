import React, { useState, Fragment } from "react";
import "./App.css";
import Card from "./components/Card";
import ErrorBoundary from "./components/ErrorBoundary";
import en from "./translations/en";
import jp from "./translations/jp";
import StatusSummary from "./components/StatusSummary";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [cards, setCards] = useState([]);
  const [language, setLanguage] = useState("en");

  const t = language === "en" ? en : jp;

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "jp" : "en"));
  };

  const addCard = () => {
    const newCard = {
      id: Date.now(),
      title: `${t.todolists} ${cards.length + 1}`,
      todos: [],
    };
    setCards([...cards, newCard]);
  };

  const deleteCard = (cardId) => {
    setCards(cards.filter((card) => card.id !== cardId));
  };

  const handleAddTodo = (cardId, newTodo) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, todos: [...card.todos, newTodo] } : card
      )
    );
  };

  const handleEditTitle = (cardId, newTitle) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, title: newTitle } : card
      )
    );
  };

  const handleEditTodo = (cardId, todoId, value, type = "description") => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId
          ? {
              ...card,
              todos: card.todos
                .map((todo) => {
                  if (todo.id === todoId) {
                    if (type === "delete") return null;
                    return { ...todo, [type]: value };
                  }
                  return todo;
                })
                .filter(Boolean), // 削除されたタスクを除去
            }
          : card
      )
    );
  };

  return (
    <div>
      <Header
        toggleLanguage={toggleLanguage}
        addCard={addCard}
        t={t}
        language={language}
      />
      <Fragment>
        <ErrorBoundary>
          <main>
            <StatusSummary cards={cards} t={t} />
            <button id="add-card-button" onClick={addCard}>
              {t.addCard}
            </button>
            {cards.map((card) => (
              <Card
                key={card.id}
                cardId={card.id}
                title={card.title}
                todos={card.todos}
                handleAddTodo={handleAddTodo}
                handleEditTitle={handleEditTitle}
                handleDeleteCard={deleteCard}
                handleEditTodo={handleEditTodo}
                t={t}
              />
            ))}
          </main>
        </ErrorBoundary>
      </Fragment>
      <Footer />
    </div>
  );
}

export default App;
