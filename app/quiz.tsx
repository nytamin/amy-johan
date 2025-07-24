import React from "react";

export default function Quiz() {
  const steps = [
    {
      clueImg: "quiz/clue0.jpg",
      clueHint:
        "Här står Amy i skogen och filurar. Välj den kartbild som passar bäst!",
      alternatives: [
        "quiz/answer-0-0.jpg",
        "quiz/answer-0-1.jpg",
        "quiz/answer-0.jpg",
      ],
      correctIndex: 2,
    },
    {
      clueImg: "quiz/clue1.jpg",
      clueHint: "Var är Amy här?",
      alternatives: [
        "quiz/answer-1.jpg",
        "quiz/answer-1-1.jpg",
        "quiz/answer-1-0.jpg",
      ],
      correctIndex: 0,
    },
    {
      clueImg: "quiz/clue2.jpg",
      clueHint: "Var är Alve här?",
      alternatives: [
        "quiz/answer-2-0.jpg",
        "quiz/answer-2-1.jpg",
        "quiz/answer-2.jpg",
      ],
      correctIndex: 2,
    },
    {
      clueImg: "quiz/clue3.jpg",
      clueHint:
        "Är det en älg? Är det en skärm? Nej det är ju Amy som är ute och leker kontroll!",
      alternatives: [
        "quiz/answer-3-0.jpg",
        "quiz/answer-3.jpg",
        "quiz/answer-3-1.jpg",
      ],
      correctIndex: 1,
    },
    {
      clueImg: "quiz/clue4.jpg",
      clueHint: "Var är Johan och Amy och vandrar här måntro?",
      alternatives: [
        "quiz/answer-4-0.jpg",
        "quiz/answer-4-1.jpg",
        "quiz/answer-4.jpg",
      ],
      correctIndex: 2,
    },
  ];

  const [currentStep, setCurrentStep] = React.useState(0);
  const [wrongAnswer, setWrongAnswer] = React.useState(false);

  const step = steps[currentStep];

  if (!step) {
    // forward to bordsplacering:
    window.location.hash = `page=bordsplacering`;
  }

  return (
    <>
      <div className="m-4 text-left text-section mx-auto max-w-[40em]">
        <h2 className="text-xl my-1">Quiz!</h2>

        {step ? (
          <div>
            <p>
              Haha, här kommer ett <b>BONUS-bus</b>!!
            </p>
            <p>
              Innan du får se din plats vid bordet behöver du lösa en liten
              kluring!
              <br />
              (Har du svårt att hitta rätt, så be närmaste orienterare om
              hjälp!)
            </p>
            <br />

            <div
              style={{
                minHeight: "60em",
              }}
            >
              <p>
                <img
                  src={step.clueImg}
                  alt="Clue"
                  style={{
                    maxWidth: "500px",
                    maxHeight: "500px",
                  }}
                />
              </p>
              <p>{step.clueHint}</p>
              <div>
                {wrongAnswer ? (
                  <div>
                    Tyvärr, det var fel svar!
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setWrongAnswer(false);
                      }}
                    >
                      Försök igen.
                    </a>
                  </div>
                ) : (
                  <div>
                    {step.alternatives.map((alt, index) => (
                      <a
                        key={index}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (index === step.correctIndex) {
                            setCurrentStep((prev) => prev + 1);
                          } else {
                            setWrongAnswer(true);
                          }
                        }}
                        style={{
                          margin: "5px",
                        }}
                      >
                        <img
                          src={alt}
                          style={{
                            display: "inline-block",
                            maxWidth: "30%",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
                          }}
                        />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p>Bra jobbat! Nu kan du se din plats vid bordet!</p>
            <div>
              <img src="quiz/bordsplacering.jpg" alt="Bordsplacering" />
            </div>
          </div>
        )}
      </div>
      <div className="m-4 text-left text-section mx-auto max-w-[40em]"></div>
    </>
  );
}
