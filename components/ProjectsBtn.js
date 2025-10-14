//next image
import Image from "next/image";

//next link
import Link from "next/link";

//icons
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return <div className="mx-auto xl:mx-0 relative z-10">
    <Link href={'/work'} className="relative w-[150px] h-[150px] xl:w-[180px] xl:h-[180px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
    <Image 
      src={'/rounded-text.png'} 
      width={141} 
      height={148} 
      alt='' 
      className="animate-spin-slow w-full h-full max-w-[125px] max-h-[132px] xl:max-w-[141px] xl:max-h-[148px]"/>
      <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
  </div>;
};

export default ProjectsBtn;
