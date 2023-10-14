import styles from '@/app/page.module.css';
import  Header  from "@/sections/header/Header";
import  Banner  from "@/sections/banner/Banner";
import  Diversos  from "@/sections/diversos/Diversos";
import  Opcoes  from "@/sections/opcoes/Opcoes";
import  Kit  from "@/sections/kit/Kit";
import  Redes  from "@/sections/redes/Redes";
import  Map  from "@/sections/map/Map";
import  Parceiros  from "@/sections/parceiros/Parceiros";
import  Footer  from "@/sections/footer/Footer";

export default function Home() {
  return (
    <main className={`${styles.Page} container`}>
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
