import { CardView } from "@/components/CardView";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col lg:flex-row  bg-gray-600 h-screen  items-center justify-around sm:justify-between p-24 ${sora.className}`}
    >
      <CardView />
    </main>
  );
}
