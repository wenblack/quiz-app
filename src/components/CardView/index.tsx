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
      <h1 className="flex justify-center items-center text-gray-100">
        Internal server error
      </h1>
    );
  }
  return (
    <main
      className={`flex h-full pt-2  w-full gap-4 md:gap-4 flex-col lg:flex-row  bg-gray-600 items-center justify-around  ${sora.className}`}
    >
      {data.map((item, i) => (
        <Card key={i} question={item.question} isAnswer={item.isAnswer} />
      ))}
    </main>
  );
}
