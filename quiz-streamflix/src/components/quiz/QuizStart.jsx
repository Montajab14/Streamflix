import React from "react";

export default function QuizStart({ startQuiz }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#221f1f",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#e50914", fontFamily: '"Netflix Sans", Helvetica, sans-serif', marginBottom: "1rem" }}>
        Quiz Cinéma - Testez vos connaissances !
      </h1>
      <h5 style={{ color: "#999999", marginBottom: "1.5rem" }}>
        10 questions sur l'univers du cinéma
      </h5>
      <p style={{ color: "#ffffff", marginBottom: "2rem", maxWidth: "600px" }}>
        Mettez vos connaissances à l'épreuve et découvrez si vous êtes un vrai cinéphile !
      </p>
      <button
        onClick={startQuiz}
        style={{
          backgroundColor: "#e50914",
          color: "#ffffff",
          border: "none",
          borderRadius: "25px",
          padding: "10px 25px",
          fontWeight: "bold",
          cursor: "pointer",
          fontSize: "1rem",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.target.style.opacity = 0.85)}
        onMouseOut={(e) => (e.target.style.opacity = 1)}
      >
        Commencer le quiz
      </button>
    </div>
  );
}
