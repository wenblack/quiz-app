import { Card } from "@/components/Card";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

export function CardView() {
  return (
    <main
      className={`flex w-full  flex-col lg:flex-row  bg-gray-600 h-full  items-center justify-around sm:justify-between ${sora.className}`}
    >
      <Card
        onClickFunction={() => {}}
        isAnswer
        question="Caçar tesouros Caçar tesouros Caçar tesouros"
      />
      <Card
        isAnswer={false}
        onClickFunction={() => {}}
        question="Caçar tesouros Caçar tesouros Caçar tesouros"
      />
      <Card
        onClickFunction={() => {}}
        question="Caçar tesouros Caçar tesouros Caçar tesouros"
      />
      <Card onClickFunction={() => {}} question=" tesouros Caçar tesouros" />
    </main>
  );
}
