import { Card } from "@/components/Card";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex bg-gray-600 min-h-screen flex-col items-center justify-between p-24 ${sora.className}`}
    >
      <Card question="Caçar tesouros Caçar tesouros Caçar tesouros" />
    </main>
  );
}
