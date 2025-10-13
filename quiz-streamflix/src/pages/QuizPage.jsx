import React, { useState } from "react";
import QuizStart from "../components/quiz/QuizStart";
import QuizQuestion from "../components/quiz/QuizQuestion";
import QuizResults from "../components/quiz/QuizResults";


const quizQuestions = [
  { id: 1, question: "Qui a réalisé le film 'Inception' (2010) ?", options: ["Steven Spielberg","Christopher Nolan","James Cameron","Ridley Scott"], correctAnswer: "Christopher Nolan" },
  { id: 2, question: "Quel film a remporté l'Oscar du meilleur film en 2020 ?", options: ["1917","Joker","Parasite","Once Upon a Time in Hollywood"], correctAnswer: "Parasite" },
  { id: 3, question: "Dans quel film trouve-t-on la réplique culte 'May the Force be with you' ?", options: ["Star Trek","Star Wars","Interstellar","Avatar"], correctAnswer: "Star Wars" },
  { id: 4, question: "Qui incarne Iron Man dans l'univers cinématographique Marvel ?", options: ["Chris Evans","Chris Hemsworth","Robert Downey Jr.","Mark Ruffalo"], correctAnswer: "Robert Downey Jr." },
  { id: 5, question: "Quel est le film d'animation le plus rentable de tous les temps ?", options: ["Le Roi Lion (2019)","La Reine des Neiges 2","Toy Story 4","Les Indestructibles 2"], correctAnswer: "Le Roi Lion (2019)" },
  { id: 6, question: "Combien d'Oscars a remporté le film 'Titanic' (1997) ?", options: ["8","11","14","9"], correctAnswer: "11" },
  { id: 7, question: "Quel réalisateur est connu pour ses films 'Pulp Fiction' et 'Kill Bill' ?", options: ["Martin Scorsese","Quentin Tarantino","David Fincher","Guy Ritchie"], correctAnswer: "Quentin Tarantino" },
  { id: 8, question: "Dans 'Le Seigneur des Anneaux', qui doit détruire l'anneau unique ?", options: ["Aragorn","Gandalf","Frodon","Sam"], correctAnswer: "Frodon" },
  { id: 9, question: "Quel acteur joue le rôle de Jack Sparrow dans 'Pirates des Caraïbes' ?", options: ["Orlando Bloom","Johnny Depp","Geoffrey Rush","Javier Bardem"], correctAnswer: "Johnny Depp" },
  { id: 10, question: "Quel film de science-fiction se déroule en grande partie dans une ville appelée Gotham ?", options: ["Spider-Man","Superman","Batman","Iron Man"], correctAnswer: "Batman" }
];

export default function QuizPage() {
  const [step, setStep] = useState("start"); // start, question, results
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const startQuiz = () => {
    setStep("question");
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const handleAnswer = (selected) => {
    setAnswers([...answers, selected]);
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep("results");
    }
  };

  const restartQuiz = () => {
    setStep("start");
    setCurrentQuestion(0);
    setAnswers([]);
  };

  return (
    <div className="quiz-container container py-5">
      {step === "start" && <QuizStart startQuiz={startQuiz} />}
      {step === "question" && (
        <QuizQuestion
          questionData={quizQuestions[currentQuestion]}
          currentIndex={currentQuestion}
          totalQuestions={quizQuestions.length}
          handleAnswer={handleAnswer}
        />
      )}
      {step === "results" && (
        <QuizResults
          userAnswers={answers}
          quizQuestions={quizQuestions}
          restartQuiz={restartQuiz}
          goHome={() => setStep("start")}
        />
      )}
    </div>
  );
}
