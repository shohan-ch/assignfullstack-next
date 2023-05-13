import HomeView from "@/components/Home/HomeView";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <HomeView />;
}
