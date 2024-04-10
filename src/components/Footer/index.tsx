import { NavArrowRight } from "iconoir-react";

interface FooterProps {
  actualQuestion: number;
  totalQuestion: number;
  isDisabled: boolean;
}

export function Footer({
  actualQuestion,
  totalQuestion,
  isDisabled,
}: FooterProps) {
  if (isDisabled === false) {
    return (
      <footer className="w-[80vw] lg:w-full items-center pt-6 flex justify-between">
        <p className="text-gray-100 font-bold text-score">
          {actualQuestion}/
          <span className="text-questions">{totalQuestion}</span>
        </p>
        <button disabled className="hover:cursor-not-allowed ">
          <NavArrowRight className="bg-gray-300 h-9 w-9  rounded-full text-gray-200"></NavArrowRight>
        </button>
      </footer>
    );
  }
  return (
    <footer className="w-[80vw] lg:w-full items-center pt-6 flex justify-between">
      <p className="text-gray-100 font-bold text-score">
        {actualQuestion}/<span className="text-questions">{totalQuestion}</span>
      </p>
      <button>
        <NavArrowRight className="hover:bg-gray-100 bg-gray-300 h-9 w-9  rounded-full text-gray-200"></NavArrowRight>
      </button>
    </footer>
  );
}
