import circleImage from "@/assets/circle.svg";
import Image from "next/image";
import { Check, Xmark } from "iconoir-react";

export interface CardProps {
  question: string;
  isAnswer?: boolean;
  showResult?: boolean;
  onclick?: () => void;
  successFunction?: () => void;
}

export function Card({
  question,
  isAnswer,
  onclick,
  successFunction,
  showResult,
}: CardProps) {
  async function saveAnswers() {
    if (isAnswer === true) {
      if (successFunction) {
        successFunction();
      }
    }
    if (onclick) {
      onclick();
    }
  }

  if (showResult === true) {
    if (isAnswer === true) {
      return (
        <>
          <section className="hidden md:block hover:border-green-dark w-64 h-40 justify-center hover:cursor-not-allowed bg-gray-400 rounded-lg border-4 border-green-light">
            <div className=" w-full h-12   hover:cursor-pointer hover:opacity-70 flex flex-row p-3 justify-end ">
              <Check className="text-green-light rounded-full  bg-green-dark" />
            </div>
            <p className="h-full pb-24 text-h2 text-center text-gray-100 p-5 w-full flex items-center justify-center">
              {question}
            </p>
          </section>
          <section className="flex w-[80vw]  hover:border-green-dark md:hidden h-20  hover:cursor-not-allowed bg-gray-400 rounded-lg border-4 border-green-light">
            <p className="h-full p-2 pl-8 text-h2 text-center text-gray-100  w-full flex items-center justify-center">
              {question}
            </p>
            <div className="h-12 right-1 top-1  hover:cursor-pointer hover:opacity-70 flex flex-row p-3 justify-end ">
              <Check className="text-green-light rounded-full  bg-green-dark" />
            </div>
          </section>
        </>
      );
    }
    if (isAnswer === false) {
      return (
        <>
          <section className="hidden md:block w-64 h-40 justify-center hover:cursor-not-allowed bg-gray-400 rounded-lg border-4 hover:border-red-dark border-red-light">
            <div className=" w-full h-12   hover:cursor-pointer hover:opacity-70 flex flex-row p-3 justify-end ">
              <Xmark className="text-red-light rounded-full  bg-red-dark" />
            </div>
            <p className="h-full pb-24 text-h2 text-center text-gray-100 p-5 w-full flex items-center justify-center">
              {question}
            </p>
          </section>
          <section className="flex w-[80vw] md:hidden h-20 hover:border-red-dark hover:cursor-not-allowed bg-gray-400 rounded-lg border-4 border-red-light">
            <p className="h-full pl-8 text-h2 text-center text-gray-100 p-2 w-full flex items-center justify-center">
              {question}
            </p>
            <div className="h-12 right-1 top-1  hover:cursor-pointer hover:opacity-70 flex flex-row p-3 justify-end ">
              <Xmark className="text-red-light rounded-full  bg-red-dark" />
            </div>
          </section>
        </>
      );
    }
  }

  return (
    <>
      <section
        onClick={saveAnswers}
        className="hidden md:block w-64 h-40 justify-center hover:cursor-pointer bg-gray-400 rounded-lg border-4 hover:border-gray-200  border-gray-300"
      >
        <div className=" w-full h-12   hover:cursor-pointer hover:opacity-70 flex flex-row p-3 justify-end ">
          <Image src={circleImage} alt="IconCircle" />
        </div>
        <p className="h-full pb-24 text-h2 text-center text-gray-100 p-5 w-full flex items-center justify-center">
          {question}
        </p>
      </section>
      <section
        onClick={saveAnswers}
        className="flex w-[80vw] md:hidden h-20  hover:cursor-pointer bg-gray-400 rounded-lg border-4 hover:border-gray-200  border-gray-300"
      >
        <p className="h-full pl-8 text-h2 text-center text-gray-100 p-5 w-full flex items-center justify-center">
          {question}
        </p>
        <div className="h-12 right-1 top-1  hover:cursor-pointer hover:opacity-70 flex flex-row p-3 justify-end ">
          <Image src={circleImage} alt="IconCircle" />
        </div>
      </section>
    </>
  );
}
