import { Header } from "@/sections/header/Header";
import { Header } from "@/sections/banner/Banner";
import { Header } from "@/sections/diversos/Diversos";
import { Header } from "@/sections/opcoes/Opcoes";
import { Header } from "@/sections/kit/Kit";
import { Header } from "@/sections/redes/Redes";
import { Header } from "@/sections/map/Map";
import { Header } from "@/sections/parceiros/Parceiros";
import { Header } from "@/sections/footer/Footer";

export default function Home() {
  return (
    <main>
      <Header/>
      <Banner/>
      <Diversos/>
      <Opcoes/>
      <Kit/>
      <Redes/>
      <Map/>
      <Parceiros/>
      <Footer/>
    </main>
  )
}
