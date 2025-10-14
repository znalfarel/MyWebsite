//next image
import Image from "next/image";

//next link
import Link from "next/link";

//icons
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return <div className="mx-auto xl:mx-0 relative z-10 -translate-y-6">
    <Link href={'/work'} className="relative w-[140px] h-[140px] md:w-[160px] md:h-[160px] xl:w-[180px] xl:h-[180px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
    <Image 
      src={'/rounded-text.png'} 
      width={141} 
      height={148} 
      alt='' 
      className="animate-spin-slow w-full h-full max-w-[110px] max-h-[118px] md:max-w-[130px] md:max-h-[138px] xl:max-w-[141px] xl:max-h-[148px]"/>
      <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
  </div>;
};

export default ProjectsBtn;
