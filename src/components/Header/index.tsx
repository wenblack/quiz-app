import { Check } from "iconoir-react";

interface HeaderProps {
  questionsRight: number;
}

export function Header({ questionsRight }: HeaderProps) {
  return (
    <footer className="w-[80vw] lg:w-full items-center pb-6 flex justify-between">
      <p className="text-gray-100 font-bold text-score">
        👋 Quiz<span className="font-normal">Time</span>
      </p>
      <span className="flex h-10 w-20 border text-green-dark bg-gray-400 rounded-md gap-1 items-center justify-center border-green-dark">
        {questionsRight}
        <Check className="text-green-dark" />
      </span>
    </footer>
  );
}
