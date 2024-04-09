import { Card } from "@/components/Card";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex  flex-col lg:flex-row  bg-gray-600 min-h-screen  items-center justify-around sm:justify-between p-24 ${sora.className}`}
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
