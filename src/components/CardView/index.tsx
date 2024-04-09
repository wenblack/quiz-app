import { Card } from "@/components/Card";
import { Sora } from "next/font/google";
import { CardProps } from "@/components/Card";
const sora = Sora({ subsets: ["latin"] });

interface CardViewProps {
  data: CardProps[];
}

export function CardView({ data }: CardViewProps) {
  if (data === undefined) {
    return (
      <h1 className="flex flex-1 justify-center items-center text-gray-100">
        Internal server error
      </h1>
    );
  }
  return (
    <main
      className={`flex w-full gap-0 md:gap-4 flex-col lg:flex-row  bg-gray-600 h-full  items-center justify-around sm:justify-between ${sora.className}`}
    >
      {data.map((item, i) => (
        <Card key={i} question={item.question} isAnswer={item.isAnswer} />
      ))}
    </main>
  );
}
