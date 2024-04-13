import Image from "next/image";
import smilingTeam from '../../public/smiling-creative-business-team-discussing-over-lap-566JQTQ 1.png'
import grayArrow from '../../public/grayArrow.png'
import digitalArt from '../../public/Design.png'
import Card from "./components/Card";
import socialMedia from '../../public/Social Media.png'
import webDesign from '../../public/Web Design.png'
import PurpleSection from "./components/PurpleSection";


export default function Home() {
  return (
    <main className="w-[1920px] h-[1080px] flex">
    <section className="w-[1112px] h-[100%] bg-[#5365ef] relative">
      <PurpleSection></PurpleSection>
    <div className="bg-white absolute bottom-0 w-[1352px] h-[297px] flex">

    <button className="ml-[60px] w-[40px] h-[89px] flex flex-col items-center justify-center gap-[8px] mt-[104px]">
      <span className="text-[18px] leading-[40px] text-[#909090] transform -rotate-90">Scroll</span>
      <Image src={grayArrow} width={32} height={32} alt="Let's colaborate arrow"/>
    </button>
    
    <article className="w-[1144px] h-[177px] mt-[60px] mb-[60px] ml-[60px] mr-[48px] flex justify-center items-center gap-[80px]">
      <Card text="Make your website user friendly and look more professional" header="Web Design Projects" image={webDesign}></Card>
      <Card text="Gain more followers or subscribers with the right template" header="Social Media Templates" image={socialMedia}></Card>
      <Card text="Complete your digital work with appropriate artwork" header="Digital Artwork" image={digitalArt}></Card>
    </article>

    </div>
    </section>

    <Image src={smilingTeam} width={808} height={1080} alt="A Happy working team looking at a computer"/>
    </main>
  );
}
