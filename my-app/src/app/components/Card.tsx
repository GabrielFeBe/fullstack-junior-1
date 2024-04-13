import Image, { StaticImageData } from "next/image";

interface Props {
  image:StaticImageData,
  header: string,
  text:string
  }

  export default function Card({image,header,text} : Props) {
  
    return (
      <div className="w-[328px] h-[177px]">
      <Image src={image} width={64} height={64} alt="Design projects icon"/>
      <h2 className="text-[#333333] text-[18px] font-bold mt-[24px]">{header}</h2>
      <p className="text-[#909090] text-[18px] mt-[8px]">
      {text}
      </p>
      </div>
    )
  }
  