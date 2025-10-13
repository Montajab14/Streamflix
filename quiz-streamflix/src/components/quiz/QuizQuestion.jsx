import React, { useState } from "react";

export default function QuizQuestion({ 
  questionData, 
  currentIndex, 
  totalQuestions, 
  handleAnswer 
}) {
  const [selected, setSelected] = useState(null);

  const onSelect = (option) => setSelected(option);

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
      <h4 style={{ color: "#ffffff", marginBottom: "1rem" }}>
        Question {currentIndex + 1}/{totalQuestions}
      </h4>
      <p style={{ color: "#ffffff", fontSize: "1.2rem", marginBottom: "2rem" }}>
        {questionData.question}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", width: "100%", maxWidth: "500px" }}>
        {questionData.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(option)}
            style={{
              padding: "10px 20px",
              borderRadius: "25px",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
              backgroundColor: selected === option ? "#e50914" : "transparent",
              color: selected === option ? "#ffffff" : "#ffffff",
              border: "2px solid #e50914",
              transition: "0.3s",
            }}
            onMouseOver={(e) => e.target.style.opacity = 0.85}
            onMouseOut={(e) => e.target.style.opacity = 1}
          >
            {option}
          </button>
        ))}
      </div>

      <button
        onClick={() => handleAnswer(selected)}
        disabled={!selected}
        style={{
          marginTop: "2rem",
          padding: "10px 25px",
          borderRadius: "25px",
          fontWeight: "bold",
          fontSize: "1rem",
          cursor: selected ? "pointer" : "not-allowed",
          backgroundColor: "#e50914",
          color: "#ffffff",
          border: "none",
          opacity: selected ? 1 : 0.6,
          transition: "0.3s",
        }}
      >
        {currentIndex + 1 === totalQuestions ? "Voir mes résultats" : "Question suivante"}
      </button>
    </div>
  );
}
