import Image from "next/image";
import smilingTeam from '../../public/smiling-creative-business-team-discussing-over-lap-566JQTQ 1.png'
import arrow from '../../public/Arrow.png'


export default function Home() {
  return (
    <main className="w-[1920px] h-[1080px] flex">
    <section className="w-[1112px] h-[100%] bg-[#5365ef] relative">
    <p className="text-[24px] ml-[160px] mt-[160px] text-[#fbfbfb] h-[40px] leading-[40px]">Hi, There!</p>
    <p className="w-[864px] text-[#fbfbfb] ml-[160px] mt-[16px] text-[64px] font-bold h-[240px] leading-[80px]">
      We are a growing-up Creative Agency from Indonesia!
      </p>
      <p className="w-[784px] text-[#fbfbfb] text-[24px] ml-[160px] mt-[32px] h-[80px] leading-[40px]">
      We provides you with modest and professional design templates that come from the synergy of design and technology
      </p>
      <button className="h-[80px] w-[299px] flex justify-center items-center bg-[#fbfbfb] text-[#333333] text-[24px] leading-[40px] gap-[8px] ml-[160px] mt-[54px]">
        Let’s Collaborate
        <Image src={arrow} width={48} height={48} alt="Let's colaborate arrow"/>
        </button>
    <div className="bg-white absolute bottom-0 w-[1352px] h-[297px]"></div>
    </section>

    <Image src={smilingTeam} width={808} height={1080} alt="A Happy working team looking at a computer"/>
    </main>
  );
}
