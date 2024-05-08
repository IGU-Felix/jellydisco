import Box from "./components/Box/Box";
import Image from "next/image";
import MusicBox from "./components/MusicBox/MusicBox";
import Butao from "./components/Butao/Butao";

export default function Home() {
  return (
   <div className="bg-login bg-cover h-screen flex">
    <section>
      <Box />
      <div className="justify-center">
        <Butao />
      </div>
    </section>
    <div className="h-[400] self-center ml-[350px]">
      <Image src="/img/Logo.png" width={400} height={400} alt="LogoDisco"/>
    </div>
      <MusicBox />
   </div>
  );
} 