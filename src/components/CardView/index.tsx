import { Card } from "@/components/Card";
import { Sora } from "next/font/google";
import { CardProps } from "@/components/Card";
const sora = Sora({ subsets: ["latin"] });

interface CardViewProps {
  data: CardProps[];
  showResult: boolean;
  functionShowResult: () => void;
  successFunction: () => void;
}

export function CardView({
  data,
  functionShowResult,
  successFunction,
  showResult,
}: CardViewProps) {
  if (data === undefined) {
    return (
      <h1 className="flex justify-center items-center text-gray-100">
        Internal server error
      </h1>
    );
  }
  return (
    <main
      className={`flex h-full pt-2  w-full gap-4  flex-col lg:flex-row  bg-gray-600 items-center justify-around  ${sora.className}`}
    >
      {data.map((item, i) => (
        <Card
          key={i}
          onclick={functionShowResult}
          text={item.text}
          isAnswer={item.isAnswer}
          showResult={showResult}
          successFunction={successFunction}
        />
      ))}
    </main>
  );
}
