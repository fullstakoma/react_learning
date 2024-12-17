import React from "react";
import "./Header.css";

function Header({ toggleLanguage, t }) {
  return (
    <header className="header">
      <h1 className="title">{t.title}</h1>
      <button
        className="language-select"
        onClick={toggleLanguage}
        style={{ marginLeft: "10px" }}
      >
        {t.title === "To Do List" ? "日本語" : "English"}
      </button>
    </header>
  );
}

export default Header;
