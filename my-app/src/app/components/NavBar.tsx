import Link from 'next/link'


export default function NavBar(){
  return (
    <nav className="w-[512px] h-[27px] mt-[46px] mb-[47px] flex items-center justify-between mr-[200px]">
    <Link href={'/'} className="text-[18px] text-[#fbfbfb] ">
    Home
    </Link>
    <Link href={'/'} className="text-[18px] text-[#fbfbfb] ">
    About
    </Link>
    <Link href={'/'} className="text-[18px] text-[#fbfbfb] ">
    Service
    </Link>
    <Link href={'/'} className="text-[18px] text-[#fbfbfb] ">
    Portfolio
    </Link>
    <Link href={'/'} className="text-[18px] text-[#fbfbfb] ">
    Blog
    </Link>
  </nav>
  )
}