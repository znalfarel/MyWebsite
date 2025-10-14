//links
import Link from "next/link";

//icons
import {
  RiTelegramLine, 
  RiInstagramLine, 
  RiTiktokLine, 
  RiLinkedinLine} from "react-icons/ri";

const Socials = () => {
  return ( 
  <div className="flex items-center gap-x-4 text-lg md:text-xl xl:text-2xl">
    <Link href={'https://t.me/Rhalimawan'} className="hover:text-accent transition-all duration-300">
      <RiTelegramLine />
    </Link>
    <Link href={'https://www.instagram.com/znfrl.eth'} className="hover:text-accent transition-all duration-300">
      <RiInstagramLine />
    </Link>
    <Link href={'https://www.tiktok.com/@zencomp_'} className="hover:text-accent transition-all duration-300">
      <RiTiktokLine />
    </Link>
    <Link href={'https://www.linkedin.com/in/znalfarel'} className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine />
    </Link>
  </div>
  );
};

export default Socials;
