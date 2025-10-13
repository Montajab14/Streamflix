import React from "react";

export default function QuizResults({ 
  userAnswers, 
  quizQuestions, 
  restartQuiz, 
  goHome 
}) {
  const score = userAnswers.filter(
    (answer, index) => answer === quizQuestions[index].correctAnswer
  ).length;

  let message = "";
  if (score <= 3) message = "Vous devriez regarder plus de films.... ";
  else if (score <= 6) message = "Pas mal ! Un vrai amateur de cinéma !";
  else if (score <= 8) message = "Excellent ! Vous êtes un cinéphile confirmé !!!";
  else message = "Parfait ! Vous êtes un expert du 7ème art ! 🏆";

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#221f1f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#e50914", marginBottom: "1rem" }}>
        Vous avez obtenu {score}/{quizQuestions.length} !
      </h2>
      <p style={{ color: "#ffffff", marginBottom: "2rem" }}>{message}</p>

      <div style={{ width: "100%", maxWidth: "600px", textAlign: "left", marginBottom: "2rem" }}>
        {quizQuestions.map((q, index) => {
          const correct = q.correctAnswer === userAnswers[index];
          return (
            <div key={q.id} style={{
              backgroundColor: "#2a2a2a",
              borderRadius: "10px",
              padding: "1rem",
              marginBottom: "1rem"
            }}>
              <p style={{ fontWeight: "bold", color: "#ffffff" }}>{q.question}</p>
              <p>
                Votre réponse:{" "}
                <span style={{ color: correct ? "green" : "red", fontWeight: "bold" }}>
                  {userAnswers[index]} {correct ? "✓" : "✗"}
                </span>
              </p>
              {!correct && (
                <p style={{ color: "#00ff00", fontStyle: "italic" }}>
                  Bonne réponse: {q.correctAnswer}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        <button
          onClick={restartQuiz}
          style={{
            padding: "10px 25px",
            borderRadius: "25px",
            fontWeight: "bold",
            backgroundColor: "#e50914",
            color: "#ffffff",
            border: "none",
            cursor: "pointer",
            transition: "0.3s"
          }}
          onMouseOver={e => e.target.style.opacity = 0.85}
          onMouseOut={e => e.target.style.opacity = 1}
        >
          Recommencer le quiz
        </button>
        <button
          onClick={goHome}
          style={{
            padding: "10px 25px",
            borderRadius: "25px",
            fontWeight: "bold",
            backgroundColor: "transparent",
            color: "#e50914",
            border: "2px solid #e50914",
            cursor: "pointer",
            transition: "0.3s"
          }}
          onMouseOver={e => {
            e.target.style.backgroundColor = "#e50914";
            e.target.style.color = "#ffffff";
          }}
          onMouseOut={e => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#e50914";
          }}
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
}
