//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  
} from "react-icons/rx";

import {
  FaNetworkWired,
  FaWifi,
  FaTools,
  FaVideo,
  FaCut,
} from "react-icons/fa";

//import required modules
import { FreeMode, Pagination } from "swiper";

// data
export const serviceData = [
  {
    icon: <FaWifi />,
    title: 'Networking',
    description: 'Design, install, and manage secure network infrastructures. We ensure fast, reliable connectivity for all your business operations and data transfer needs.',
  },
  {
    icon: <FaTools />,
    title: 'Techinician',
    description: 'Personal laptop repair, troubleshooting, and virus removal. Get expert help to keep your personal computer and gadgets running perfectly.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Build a personal website or custom tool for your projects. I create simple, unique digital solutions for your personal needs and hobbies.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'LCreate custom graphics, logos, or personal artwork. I help bring your visual ideas to life for social media, hobbies, or personal projects.',
  },
  {
    icon: <FaCut />,
    title: 'Editing',
    description: 'Refine your videos. Get clean, professional edits for your personal content, ensuring it looks and reads perfectly.',
  },
];

const ServiceSlider = () => {
  return <Swiper breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15,
    }
  }}
  freeMode={true}
  pagination={{
    clickable: true
  }}
  modules={[FreeMode, Pagination]}
  className="md:h-[400px] sm:h-[410px]">
    {
      serviceData.map((item, index) => {
        return <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">{item.icon}</div>
            {/* title & desc */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>
            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
            </div>
          </div>
        </SwiperSlide>
    })}
  </Swiper>;
};

export default ServiceSlider;
