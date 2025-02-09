import React from 'react'

// icons
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { TfiAlarmClock } from "react-icons/tfi";
import { VscGraphLine } from "react-icons/vsc";


// image component
import Image from "next/image";
import women from "@/app/images/shop-hero-1.jpg"
import Men from "@/app/images/filter1.jpg"
import women2 from "@/app/images/filter2.jpg"
import div1 from "@/app/images/filter3.jpg"
import div2 from "@/app/images/filter4.jpg"

//
import Personimg from "@/app/images/shop-hero.png";
import SecPersonimg from "@/app/images/asian-woman-man.png";


const Main = () => {
  return (
    <div>
      <div className="block relative w-full h-[716px]">
        <Image
          src={women}
          alt="Summer collection"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 70%" // Adjust to focus on the hand of the girl
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center lg:items-start gap-4 px-4 sm:px-8 text-white">
        <h5 className="font-Montserrat font-semibold text-sm sm:text-base lg:text-lg pl-14 pt-12">
          SUMMER 2020
        </h5>
        <h1 className="font-Montserrat font-semibold text-3xl sm:text-4xl lg:text-[58px] leading-tight text-center lg:text-left max-w-full lg:max-w-[600px] pl-14 pt-5">
          NEW COLLECTION
        </h1>
        <h4 className="font-Montserrat font-normal text-base sm:text-lg lg:text-xl text-center lg:text-left max-w-full lg:max-w-[500px] pl-14 pt-5">
          We know how large objects will act, but things on a small scale.
        </h4>
        <button className="px-6 py-3 sm:px-8 sm:py-4 bg-[#2DC071] text-white text-sm sm:text-base lg:text-lg rounded-md font-Montserrat hover:bg-[#25a061] transition duration-300 mt-5 ml-14">
          SHOP NOW
        </button>
      </div>

      <div className="w-full flex justify-center py-[10px] relative bg-[#f5f5f5]">
        <div className="w-full lg:w-[1050px] h-auto flex flex-col gap-[30px] bg-[#FAFAFA] p-[20px] sm:p-[40px]">
          {/* Title Section */}
          <div className="flex flex-col items-center gap-[10px]">
            <h3 className="font-Montserrat font-semibold text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px]">
              EDITOR&apos;S PICK
            </h3>
            <p className="w-full sm:w-[347px] font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373] text-center">
              Problems trying to resolve the conflict between
            </p>
          </div>
          {/* Images Section */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:flex lg:gap-[30px]">
            {/* Men Image */}
            <div className="relative w-full lg:w-[510px] h-[500px] lg:h-[500px] mb-[20px] lg:mb-0">
              <Image
                src={Men}
                alt="men"
                className="w-full h-full object-cover rounded-md"
              />
              <button className="absolute bottom-[16px] left-1/2 transform -translate-x-1/2 bg-white px-[30px] sm:px-[50px] py-[8px] sm:py-[10px] shadow-md font-Montserrat font-bold text-[#252B42] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] hover:bg-gray-100">
                MEN
              </button>
            </div>
            {/* Women Image */}
            <div className="relative w-full lg:w-[240px] h-[500px] lg:h-[500px] mb-[20px] lg:mb-0">
              <Image
                src={women2}
                alt="women"
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-[16px] left-1/2 transform -translate-x-1/2 bg-white px-[30px] sm:px-[48px] py-[8px] sm:py-[12px] shadow-md">
                <h2 className="font-Montserrat font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#252B42]">
                  WOMEN
                </h2>
              </button>
            </div>
            {/* Accessories and Kids */}
            <div className="flex flex-col gap-[20px] w-full lg:w-[240px]">
              {/* Accessories Image */}
              <div className="relative w-full h-[242px]">
                <Image
                  src={div1}
                  alt="accessories"
                  className="w-full h-full object-cover"
                />
                <button className="absolute bottom-[16px] left-1/2 transform -translate-x-1/2 bg-white px-[20px] sm:px-[24px] py-[8px] sm:py-[12px] shadow-md">
                  <h2 className="font-Montserrat font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#252B42]">
                    ACCESSORIES
                  </h2>
                </button>
              </div>
              {/* Kids Image */}
              <div className="relative w-full h-[242px]">
                <Image
                  src={div2}
                  alt="kids"
                  className="w-full h-full object-cover"
                />
                <button className="absolute bottom-[16px] left-1/2 transform -translate-x-1/2 bg-white px-[20px] sm:px-[24px] py-[8px] sm:py-[12px] shadow-md">
                  <h2 className="font-Montserrat font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#252B42]">
                    KIDS
                  </h2>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="third-section pt-10">
        <span>Featured Products</span>
        <h3>BESTSELLER PRODUCTS</h3>
        <p>Problems trying to resolve the conflict between</p>

        <div className="cards-cont">
          <div className="card">
            <div className="card-img"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-2"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-3"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-4"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-5"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-6"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-7"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-8"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-[#23856D] rounded-[5px] py-[80px] flex justify-center">
      <div className="w-[90%] max-w-[1440px] flex flex-col lg:flex-row gap-[30px] items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 flex flex-col gap-[20px] text-center lg:text-left">
          <h4 className="font-Montserrat font-normal text-[20px] text-white">
            SUMMER 2020
          </h4>
          <h1 className="font-Montserrat font-bold text-[36px] lg:text-[58px] leading-[40px] lg:leading-[80px] text-white">
            Vita Classic Product
          </h1>
          <p className="font-Montserrat font-medium text-[14px] leading-[20px] text-white">
            We know how large objects will act, We know how are objects will
            act, We know
          </p>
          <div className="flex flex-col lg:flex-row gap-[15px] items-center lg:items-start">
            <h3 className="font-Montserrat font-bold text-[24px] text-white">
              $16.48
            </h3>
            <button className="rounded-[5px] bg-[#2DC071] py-[10px] px-[20px]">
              <h1 className="font-Montserrat text-[14px] text-white">
                ADD TO CART
              </h1>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-[70%] lg:w-[510px]">
            <Image
              src={Personimg}
              alt="picman"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="relative w-full h-auto">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row gap-[30px] px-4 lg:px-0">
        {/* Image Section */}
        <div className="relative w-full lg:w-[707px] h-[400px] lg:h-[682px] flex justify-center">
          <Image
            src={SecPersonimg}
            alt="couple"
            className="object-cover"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-[573px] h-auto flex flex-col gap-[20px] justify-center items-center lg:items-start text-center lg:text-left mt-[20px] lg:mt-0">
          <h5 className="text-[14px] lg:text-[16px] font-Montserrat font-bold leading-[24px] text-[#BDBDBD]">
            SUMMER 2020
          </h5>
          <h2 className="lg:w-[375px] text-[24px] lg:text-[40px] font-Montserrat font-bold leading-[32px] lg:leading-[50px] text-[#252B42]">
            Part of the Neural Universe
          </h2>
          <h4 className=" lg:w-[375px] text-[16px] lg:text-[20px] font-Montserrat font-normal leading-[24px] lg:leading-[30px] text-[#737373]">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="flex flex-wrap justify-center lg:justify-start gap-[10px]">
            <button className="w-[140px] lg:w-[156px] h-[52px] rounded-[5px] py-[12px] px-[20px] lg:px-[40px] bg-[#2DC071] flex justify-center items-center">
              <h1 className="text-[14px] font-Montserrat font-bold text-white">
                BUY NOW
              </h1>
            </button>
            <button className="w-[140px] lg:w-[156px] h-[52px] rounded-[5px] py-[12px] px-[20px] lg:px-[40px] border border-[#2DC071] flex justify-center items-center">
              <h1 className="text-[14px] font-Montserrat font-bold whitespace-nowrap text-[#2DC071]">
                READ MORE
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>

      <div className="sixth-section">
        <div className='text-center pb-16'>
          <span className='text-lg'>Practice Advice</span>
          <h3 className='py-5'>Featured Posts</h3>
          <p className="text-center">
            Problems trying to resolve the conflict between <br /> the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid sm:grid-cols-3 sm:gap-5 ">
          <div className="card-1">
            <div className="card-image"></div>
            <div className="card-text">
              <ul>
                <li><span className="feature-blue">Google</span></li>
                <li>Trending</li>
                <li>New</li>
              </ul>

              <h3>Loudest à la Madison #1 (Lintegral)</h3>

              <p>
                We focus on ergonomics and meeting you where you work. Its only
                a keystroke away.
              </p>

              <div className="details">
                <div className="date">
                  <TfiAlarmClock className="
                fea-date" />
                  22 April 2021
                </div>
                <div className="comments">
                  <VscGraphLine className="
                fea-comment" />
                  10 comments
                </div>
              </div>

              <div className="feature-btn">
                Learn More <IoIosArrowForward className="feat-btn" />
              </div>
            </div>
          </div>

          <div className="card-1">
            <div className="card-image-2"></div>
            <div className="card-text">
              <ul>
                <li><span className="feature-blue">Google</span></li>
                <li>Trending</li>
                <li>New</li>
              </ul>

              <h3>Loudest à la Madison #1 (Lintegral)</h3>

              <p>
                We focus on ergonomics and meeting you where you work. Its only
                a keystroke away.
              </p>

              <div className="details">
                <div className="date">
                  <TfiAlarmClock className="
                fea-date" />
                  22 April 2021
                </div>
                <div className="comments">
                  <VscGraphLine className="
                fea-comment" />
                  10 comments
                </div>
              </div>

              <div className="feature-btn">
                Learn More <IoIosArrowForward className="feat-btn" />
              </div>
            </div>
          </div>


          <div className="card-1">
            <div className="card-image-3"></div>
            <div className="card-text">
              <ul>
                <li><span className="feature-blue">Google</span></li>
                <li>Trending</li>
                <li>New</li>
              </ul>

              <h3>Loudest à la Madison #1 (Lintegral)</h3>

              <p>
                We focus on ergonomics and meeting you where you work. Its only
                a keystroke away.
              </p>

              <div className="details">
                <div className="date">
                  <TfiAlarmClock className="
                fea-date" />
                  22 April 2021
                </div>
                <div className="comments">
                  <VscGraphLine className="
                fea-comment" />
                  10 comments
                </div>
              </div>

              <div className="feature-btn">
                Learn More <IoIosArrowForward className="feat-btn" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Main
