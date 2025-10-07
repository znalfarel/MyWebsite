//links
import Link from "next/link";

//icons
import {
  RiYoutubeLine, 
  RiInstagramLine, 
  RiTiktokLine, 
  RiLinkedinLine} from "react-icons/ri";

const Socials = () => {
  return ( 
  <div className="flex items-center gap-x-5 text-lg">
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiYoutubeLine />
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
