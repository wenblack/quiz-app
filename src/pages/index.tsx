import { CardView } from "@/components/CardView";
import { Sora } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useState } from "react";
const sora = Sora({ subsets: ["latin"] });

const apiResponse = {
  question: "Assinale a alternativa incorreta:",
  answers: [
    {
      question: "O arquivo app.json.",
      isAnswer: false,
    },
    {
      question: "A pasta node_modules",
      isAnswer: true,
    },
    {
      question: "O arquivo App.tsx ",
      isAnswer: false,
    },
    {
      question: "O arquivo App.tsx",
      isAnswer: false,
    },
  ],
};

export default function Home() {
  const [isResult, setIsResult] = useState(false);
  function handleSwitchResult() {
    if (isResult === true) {
      setIsResult(false);
    }
    if (isResult === false) {
      setIsResult(true);
    }
  }

  return (
    <main
      className={`flex flex-col  bg-gray-600 h-screen items-center py-8 px-24 ${sora.className}`}
    >
      <Header questionsRight={3} />
      <h1 className="text-h1 h-44 pt-6 lg:h-fit w-screen px-[10vw] text-center text-gray-100 ">
        {apiResponse.question}
      </h1>
      <CardView
        functionShowResult={handleSwitchResult}
        isResult={isResult}
        data={apiResponse.answers}
      />
      <Footer actualQuestion={4} totalQuestion={5} isDisabled={isResult} />
    </main>
  );
}
