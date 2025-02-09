// pricing/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

// icons
import { IoIosArrowForward } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

// brands logo
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
import logo4 from "../images/logo4.png";
import logo5 from "../images/logo5.png";
import logo6 from "../images/logo6.png";

const PricingPage = () => {
  return (
    <>
      <Header />
      <div className="blog-page p-16 md:p-8">
        <div className="bl-menu flex flex-col items-center justify-center w-full">
          <span className="text-lg text-gray-600 font-bold">PRICING</span>
          <h1 className="text-4xl text-dark-blue font-extrabold mb-6">Simple Pricing</h1>

          <div className="bl-menu-tx flex items-center mb-6">
            <span className="text-gray-600">Home</span>
            <IoIosArrowForward className="mx-2" />
            <span className="text-gray-600">Pricing</span>
          </div>

          {/* PRICING SECTION */}
          <div className="w-full flex flex-col items-center mb-12">
            <h2 className="text-2.5xl font-extrabold text-dark-blue mb-2">Pricing</h2>
            <p className="w-1/2 text-center text-gray-600 mb-4">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>

            <div className="flex items-center justify-center gap-5 mb-6">
              <span className="text-medium font-extrabold text-dark-blue">Monthly</span>
              <div className="relative flex items-center w-[45px] h-[25px] bg-white border border-[#23A6F0] rounded-full">
              <div className="absolute w-[19px] h-[19px] bg-[#D0D0D0] rounded-full left-1 top-[3px] transition-transform transform-gpu"></div>
            </div>
              <span className="text-medium font-extrabold text-dark-blue">Yearly</span>
              <div className="price-off bg-blue-200 text-primary font-bold rounded-full px-4 py-1">Save 25%</div>
            </div>

              {/* FREE PLAN */}
            <div className="price-models flex flex-col md:flex-row gap-10">
              <div className="same-model w-full md:w-1/3 bg-white border-[#23A6F0] border-2 border-primary p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-2">FREE</h3>
                <p className="price-para text-gray-600 mb-4">Organize across all apps by hand</p>
                <div className="price-tag flex items-center mb-4">
                  <div className="price-dollar text-4xl font-bold text-primary mr-2">0</div>
                  <div className="price-cl flex flex-col">
                    <span className="dollar text-lg text-primary font-bold">$</span>
                    <span className="days text-sm text-blue-400">Per Month</span>
                  </div>
                </div>

                <div className="price-list flex items-center mb-2">
                  <FaCircleCheck className="text-green-500 mr-2" />
                  <span>Unlimited product updates</span>
                </div>
                <div className="price-list flex items-center mb-2">
                  <FaCircleCheck className="text-green-500 mr-2" />
                  <span>Unlimited product updates</span>
                </div>
                <div className="price-list flex items-center mb-2">
                  <FaCircleCheck className="text-green-500 mr-2" />
                  <span>Unlimited product updates</span>
                </div>
                <div className="price-list flex items-center mb-2">
                  <FaCircleCheck className="text-green-500 mr-2" />
                  <span>1GB Cloud storage</span>
                </div>
                <div className="price-list flex items-center mb-4">
                  <FaCircleCheck className="text-green-500 mr-2" />
                  <span>Email and community support</span>
                </div>

                <button className="w-full hover:scale-105 bg-blue-500 text-white py-2 rounded-md">Try for free</button>
 {/* ```tsx */}
              </div>

              {/* STANDARD PLAN */}
              <div className="diff-model w-full md:w-1/3 text-white bg-[#252B42] border-[#23A6F0] border-2 border-primary p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-white mb-2">STANDARD</h3>
                <p className="price-para text-white mb-4">Organize across all apps by hand</p>
                <div className="price-tag flex items-center mb-4">
                  <div className="price-dollar text-4xl font-bold text-primary mr-2">9.99</div>
                  <div className="price-cl flex flex-col">
                    <span className="dollar text-lg text-primary font-bold">$</span>
                    <span className="days text-sm text-blue-400">Per Month</span>
                  </div>
                </div>

                <div className="price-list flex items-center mb-2">
                  <FaCircleCheck className="text-green-500 mr-2" />
                  <span>Unlimited product updates</span>
                </div>
                <div className="price-list flex items-center mb-2">
                  <FaCircleCheck className="text-green-500 mr-2" />
                  <span>Unlimited product updates</span>
                </div>
                <div className="price-list flex items-center mb-2">
                  <FaCircleCheck className="text-green-500 mr-2" />
                  <span>Unlimited product updates</span>
                </div>
                <div className="price-list flex items-center mb-2">
                  <FaCircleCheck className="text-green-500 mr-2" />
                  <span>1GB Cloud storage</span>
                </div>
                <div className="price-list flex items-center mb-4">
                  <FaCircleCheck className="text-green-500 mr-2" />
                  <span>Email and community support</span>
                </div>

                <button className="w-full hover:scale-105 text-white bg-blue-500 py-2 rounded-md">Try for free</button>
              </div>

              {/* PREMIUM PLAN */}
              <div className="same-model w-full md:w-1/3 border-[#23A6F0] bg-white border-2 border-primary p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-2">PREMIUM</h3>
                <p className="price-para text-gray-600 mb-4">Organize across all apps by hand</p>
                <div className="price-tag flex items-center mb-4">
                  <div className="price-dollar text-4xl font-bold text-primary mr-2">19.99</div>
                  <div className="price-cl flex flex-col">
                    <span className="dollar text-lg text-primary font-bold">$</span>
                    <span className="days text-sm text-blue-400">Per Month</span>
                  </div>
                </div>

                <div className="price-list flex items-center mb-2">
                  <FaCircleCheck className="text-green-500 mr-2" />
                  <span>Unlimited product updates</span>
                </div>
                <div className="price-list flex items-center mb-2">
                  <FaCircleCheck className="text-green-500 mr-2" />
                  <span>Unlimited product updates</span>
                </div>
                <div className="price-list flex items-center mb-2">
                  <FaCircleCheck className="text-green-500 mr-2" />
                  <span>Unlimited product updates</span>
                </div>
                <div className="price-list flex items-center mb-2">
                  <FaCircleCheck className="text-green-500 mr-2" />
                  <span>1GB Cloud storage</span>
                </div>
                <div className="price-list flex items-center mb-4">
                  <FaCircleCheck className="text-green-500 mr-2" />
                  <span>Email and community support</span>
                </div>

                <button className="w-full hover:scale-105 bg-blue-500 text-white py-2 rounded-md">Try for free</button>
              </div>
            </div>
          </div>

          {/* BRANDS SECTION */}
          <div className="ab-brands text-center my-10">
            <p className="text-lg font-semibold mb-5">Trusted By Over 4000 Big Companies</p>
            <div className="grid grid-cols-1 gap-y-10  sm:flex sm:items-center sm:gap-15">
              <Image src={logo1} alt="logo-1" className="logoimg ml-14 w-24 transition-transform duration-400 ease-in-out hover:scale-110" />
              <Image src={logo2} alt="logo-2" className="logoimg ml-14 w-24 transition-transform duration-400 ease-in-out hover:scale-110" />
              <Image src={logo3} alt="logo-3" className="logoimg ml-14 w-24 transition-transform duration-400 ease-in-out hover:scale-110" />
              <Image src={logo4} alt="logo-4" className="logoimg ml-14 w-24 transition-transform duration-400 ease-in-out hover:scale-110" />
              <Image src={logo5} alt="logo-5" className="logoimg ml-14 w-24 transition-transform duration-400 ease-in-out hover:scale-110" />
              <Image src={logo6} alt="logo-6" className="logoimg ml-14 w-24 transition-transform duration-400 ease-in-out hover:scale-110" /*```tsx*/
              />
            </div>
          </div>

          {/* FAQ'S SECTION */}
          <div className=" mb-10">
            <h2 className="text-3xl font-bold text-center text-dark-blue">Pricing FAQs</h2>
            <p className=" text-gray-600 my-4 text-center">
              Problems trying to resolve the conflict between the <br /> two major realms of Classical physics
            </p>

            <div className="lex flex-col items-center sm:grid sm:grid-cols-2 my-8">
              {Array(6).fill(0).map((_, index) => (
                <div className="faqs-list flex mb-4 w-full" key={index}>
                  <div className="faq-col-1 flex items-start">
                    <div className="faq-icon text-primary">
                      <IoIosArrowForward />
                    </div>
                    <div className="faq-text ml-2">
                      <h4 className="font-semibold text-dark-blue">The quick fox jumps over the lazy dog</h4>
                      <p className="text-gray-600">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h6 className="text-gray-600 text-center">Haven&apos;t got your answer? Contact our support</h6>
          </div>

          {/* TRIAL SECTION */}
          <div className="trial text-center my-10">
            <h2 className="text-2xl font-bold text-dark-blue">Start your 14 days free trial</h2>
            <p className="text-gray-600 mb-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
            </p>

            <button className="bg-blue-500 text-white py-2 px-4 hover:scale-105 rounded-md">Try it free now</button>

            <div className="trial-icon flex justify-center gap-4 mt-4">
              <BsTwitter className="tr-twitter text-2xl text-primary transition-transform duration-400 ease-in-out hover:scale-110" />
              <FaFacebookSquare className="tr-facebook text-2xl text-blue-600 transition-transform duration-400 ease-in-out hover:scale-110" />
              <FaInstagram className="tr-instagram text-2xl text-dark-blue transition-transform duration-400 ease-in-out hover:scale-110" />
              <FaLinkedin className="tr-linkedin text-2xl text-blue-800 transition-transform duration-400 ease-in-out hover:scale-110" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PricingPage;