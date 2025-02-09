import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import ContactImg from "@/app/images/ContactImg.png"
import Phone from "@/app/images/Phone.png"
import Location from "@/app/images/Location.png"
import Mail from "@/app/images/Mail.png"
import arrow from "@/app/images/arrow.png"
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'

const Contact = () => {
  return (
    <div>
      <Header />
      {/* Contact Page */}
      <div className="w-[1440px] mx-auto max-w-[90%] my-10 flex flex-col gap-10">
        <div className="flex flex-col gap-10 sm:flex-row justify-between items-center">
          <div className="flex flex-col gap-5 lg:gap-10 items-center sm:items-start">
            <span className="text-main font-bold text-xs lg:text-base hidden sm:block">CONTACT US</span>
            <h1 className="text-main font-bold text-[40px] md:text-5xl text-center sm:text-start">Get in touch today!</h1>
            <p className="text-secondary font-medium text-base md:text-lg text-center sm:text-start">We know how large objects will act,
              but things on a small scale</p>
            <div className="flex flex-col gap-5">
              <h3 className="text-main sm:text-2xl text-xl font-bold">Phone : +451 215 215 </h3>
              <h3 className="text-main sm:text-2xl text-xl font-bold">Fax : +451 215 215</h3>
            </div>
            <div className="flex justify-between gap-5 items-center w-fit text-main">
              <FaFacebook className="w-[30px] h-[30px]" />
              <FaInstagram className="w-[30px] h-[30px]" />
              <FaTwitter className="w-[30px] h-[30px]" />
            </div>
          </div>
          <div>
            <Image src={ContactImg} alt="contact-img" />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-10 my-10">
          <span className="text-main font-bold text-xs lg:text-base">VISIT OUR OFFICE</span>
          <h2 className="font-bold text-main lg:text-[40px] text-3xl text-center w-fit">We help small businesses
            with big ideas</h2>
          <div className="sm:grid-cols-3 grid-cols-1 gap-10 grid sm:gap-5 my-10 w-fit">

            <div className="flex flex-col gap-5 items-center justify-center w-fit group p-10 hover:bg-main hover:scale-110">
              <Image src={Phone} alt="team-img" />
              <div className="flex flex-col gap-3 text-main group-hover:text-white">
                <h5 className="sm:text-sm text-xs font-bold">georgia.young@example.com</h5>
                <h5 className="sm:text-sm text-xs font-bold">georgia.young@example.com</h5>
              </div>
              <span className="text-main font-bold text-xs lg:text-base group-hover:text-white">Get Support</span>
              <button className="px-5 py-3 border border-primary text-primary rounded-3xl sm:text-sm text-xs">Submit Request</button>
            </div>
            <div className="flex flex-col gap-5 items-center justify-center w-fit group p-10 hover:bg-main hover:scale-110">
              <Image src={Location} alt="team-img" />
              <div className="flex flex-col gap-3 text-main group-hover:text-white">
                <h5 className="sm:text-sm text-xs font-bold">georgia.young@example.com</h5>
                <h5 className="sm:text-sm text-xs font-bold">georgia.young@example.com</h5>
              </div>
              <span className="text-main font-bold text-xs lg:text-base group-hover:text-white">Get Support</span>
              <button className="px-5 py-3 border border-primary text-primary rounded-3xl sm:text-sm text-xs">Submit Request</button>
            </div>
            <div className="flex flex-col gap-5 items-center justify-center w-fit group p-10 hover:bg-main hover:scale-110">
              <Image src={Mail} alt="team-img" />
              <div className="flex flex-col gap-3 text-main group-hover:text-white">
                <h5 className="sm:text-sm text-xs font-bold">georgia.young@example.com</h5>
                <h5 className="sm:text-sm text-xs font-bold">georgia.young@example.com</h5>
              </div>
              <span className="text-main font-bold text-xs lg:text-base group-hover:text-white">Get Support</span>
              <button className="px-5 py-3 border border-primary text-primary rounded-3xl sm:text-sm text-xs">Submit Request</button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-10">
          <Image src={arrow} alt="arrow" />
          <span className="text-main font-bold text-xs lg:text-base">WE Can&apos;t WAIT TO MEET YOU</span>
          <h2 className="font-bold text-main lg:text-[40px] text-3xl w-fit">Let&apos;s Talk</h2>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <button className="bg-blue-500 px-10 py-3 rounded-lg text-white font-bold mb-8">
          Try it free now
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
