import { CardView } from "@/components/CardView";
import { Sora } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { apiResponse } from "@/utils/data";

const sora = Sora({ subsets: ["latin"] });
const MySwal = withReactContent(Swal);

export default function Home() {
  const [isResult, setIsResult] = useState(false);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(apiResponse.length - 1);

  function Alert(rightAnswers: number, total: number) {
    let percentage = (rightAnswers / total) * 100;

    if (percentage > 70) {
      MySwal.fire({
        title: "Parabéns !",
        icon: "success",
        text: `Você acertou ${rightAnswers} de  ${total} perguntas`,
        showConfirmButton: true,
        showCancelButton: false,
        showCloseButton: true,
      });
    } else if (percentage > 40) {
      MySwal.fire({
        title: "Quase lá!",
        icon: "warning",
        text: `Você acertou ${rightAnswers} de  ${total} perguntas. 
  Estude um pouco mais`,
        showConfirmButton: true,
        showCancelButton: false,
        showCloseButton: true,
      });
    } else {
      MySwal.fire({
        title: "Não foi dessa vez",
        icon: "error",
        text: `Você acertou ${rightAnswers} de  ${total} perguntas. 
  Deseja refazer o teste?`,
        showConfirmButton: true,
        showCancelButton: false,
        showCloseButton: true,
      });
    }
  }

  function handleSwitchResult() {
    setIsResult(true);
  }
  function nextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setIsResult(false);
    }
  }
  function handleUpdateRightAnswers() {
    setCount(count + 1);
  }

  return (
    <main
      className={`flex flex-col  bg-gray-600 h-screen items-center py-8 px-24 ${sora.className}`}
    >
      <Header value={count} />
      <h1 className="text-h1 h-44 pt-6 lg:h-fit w-screen px-[10vw] text-center text-gray-100 ">
        {apiResponse[currentPage].question}
      </h1>
      <CardView
        functionShowResult={handleSwitchResult}
        data={apiResponse[currentPage].answers}
        showResult={isResult}
        successFunction={handleUpdateRightAnswers}
      />
      <Footer
        onClick={() => {
          if (totalPages === currentPage) {
            Alert(count, totalPages + 1);
          } else {
            nextPage();
          }
        }}
        actualQuestion={currentPage + 1}
        totalQuestion={totalPages + 1}
        isDisabled={isResult}
      />
    </main>
  );
}
