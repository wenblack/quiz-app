import circleImage from "@/assets/circle.svg";
import Image from "next/image";

interface CardProps {
  question: string;
}

export function Card({ question }: CardProps) {
  return (
    <div className="w-64 h-80 justify-center  bg-gray-400 rounded-lg border-4 hover:border-gray-200  border-gray-300">
      <span className="w-full hover:cursor-pointer hover:opacity-70 flex flex-row p-3 justify-end ">
        <Image src={circleImage} alt="IconCircle" />
      </span>
      <p className="h-full text-h2 text-center text-gray-100 p-5 w-full flex items-center justify-center">
        {question}
      </p>
    </div>
  );
}
