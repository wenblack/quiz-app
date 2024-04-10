"use client";

import { createContext, useContext, useState } from "react";
interface AnswersContextProps {
  value?: number;
}

const AnswersContext = createContext(0);

export function SetAnswersContextNumber({ value }: AnswersContextProps) {
  const [answersNumber, setAnswersNumber] = useState(0);

  () => {
    setAnswersNumber(value ? value : 0);
  };

  return (
    <AnswersContext.Provider value={value ? value : 0}>
      <QuestionsRight />
    </AnswersContext.Provider>
  );
}

export function QuestionsRight() {
  let answersNumber = useContext(AnswersContext);
  return answersNumber;
}
