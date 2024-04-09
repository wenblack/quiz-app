import { CardView } from "@/components/CardView";
import { Sora } from "next/font/google";
import { Footer } from "@/components/Footer";
const sora = Sora({ subsets: ["latin"] });

const apiResponse = {
  question: "Assinale a alternativa incorreta:",
  answers: [
    {
      question: "O arquivo app.json é o local onde ficam as configurações.",
      isAnswer: false,
    },
    {
      question: "A pasta node_modules nunca pode ser  apagada.",
      isAnswer: true,
    },
    {
      question: "O arquivo App.tsx é o arquivo principal do app.",
      isAnswer: false,
    },
  ],
};

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col lg:pt-24 bg-gray-600 h-screen items-center py-8 px-24 ${sora.className}`}
    >
      <h1 className="text-h1 h-44 lg:h-fit w-screen px-[10vw] text-center text-gray-100 ">
        {apiResponse.question}
      </h1>
      <CardView data={apiResponse.answers} />
      <Footer actualQuestion={4} totalQuestion={5} isDisabled={false} />
    </main>
  );
}
