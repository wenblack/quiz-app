import { Check } from "iconoir-react";
import { SetAnswersContextNumber } from "@/hooks/answersCount";

interface props {
  value: number;
}

export function Header({ value }: props) {
  return (
    <header className="w-[80vw] lg:w-full  items-center pb-6 flex justify-between">
      <p className="text-gray-100 font-bold text-score">
        👋 Quiz<span className="font-normal">Time</span>
      </p>
      <span className="flex h-10 w-20 border text-green-dark bg-gray-400 rounded-md gap-1 items-center justify-center border-green-dark">
        <SetAnswersContextNumber value={value} />
        <Check className="text-green-dark" />
      </span>
    </header>
  );
}
