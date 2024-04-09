import circleImage from "@/assets/circle.svg";
import Image from "next/image";
import { CheckCircleSolid } from "iconoir-react";
interface CardProps {
  question: string;
  onClickFunction: () => void;
  isAnswer?: boolean;
}

export function Card({ question, isAnswer, onClickFunction }: CardProps) {
  if (isAnswer === true) {
    return (
      <>
        <section
          onClick={() => {
            onClickFunction();
          }}
          className="hidden md:block hover:border-green-dark w-64 h-40 justify-center hover:cursor-pointer bg-gray-400 rounded-lg border-4 border-green-light"
        >
          <div className=" w-full h-12   hover:cursor-pointer hover:opacity-70 flex flex-row p-3 justify-end ">
            <CheckCircleSolid className="text-green-light rounded-full  bg-green-dark" />
          </div>
          <p className="h-full pb-24 text-h2 text-center text-gray-100 p-5 w-full flex items-center justify-center">
            {question}
          </p>
        </section>
        <section
          onClick={() => {
            onClickFunction();
          }}
          className="flex w-[80vw] hover:border-green-dark md:hidden h-20  hover:cursor-pointer bg-gray-400 rounded-lg border-4 border-green-light"
        >
          <p className="h-full pl-8 text-h2 text-center text-gray-100 p-5 w-full flex items-center justify-center">
            {question}
          </p>
          <div className="h-12 right-1 top-1  hover:cursor-pointer hover:opacity-70 flex flex-row p-3 justify-end ">
            <CheckCircleSolid className="text-green-light rounded-full  bg-green-dark" />
          </div>
        </section>
      </>
    );
  } else if (isAnswer === false) {
    return (
      <>
        <section
          onClick={() => {
            onClickFunction();
          }}
          className="hidden md:block w-64 h-40 justify-center hover:cursor-pointer bg-gray-400 rounded-lg border-4 hover:border-red-dark border-red-light"
        >
          <div className=" w-full h-12   hover:cursor-pointer hover:opacity-70 flex flex-row p-3 justify-end ">
            <CheckCircleSolid className="text-red-light rounded-full  bg-red-dark" />
          </div>
          <p className="h-full pb-24 text-h2 text-center text-gray-100 p-5 w-full flex items-center justify-center">
            {question}
          </p>
        </section>
        <section
          onClick={() => {
            onClickFunction();
          }}
          className="flex w-[80vw] md:hidden h-20 hover:border-red-dark hover:cursor-pointer bg-gray-400 rounded-lg border-4 border-red-light"
        >
          <p className="h-full pl-8 text-h2 text-center text-gray-100 p-5 w-full flex items-center justify-center">
            {question}
          </p>
          <div className="h-12 right-1 top-1  hover:cursor-pointer hover:opacity-70 flex flex-row p-3 justify-end ">
            <CheckCircleSolid className="text-red-light rounded-full  bg-red-dark" />
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section
        onClick={() => {
          onClickFunction();
        }}
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
        onClick={() => {
          onClickFunction();
        }}
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
