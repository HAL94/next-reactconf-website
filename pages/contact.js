import Link from 'next/link';
import { AiFillInstagram, AiFillPhone, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { BiTimeFive, BiWorld } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa';
import Section from '../components/Section/Section';
import RootLayout from '../layout/RootLayout';

const ContactUs = () => {
  return (
    <Section className="py-20 lg:px-16 px-7 bg-[#fafafa]">
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 container mx-auto lg:max-w-[1200px]">
        <div className="col-span-3 flex flex-col justify-start items-start">
          <h1 className="text-3xl font-semibold text-secondary text-left">
            Get In Touch
          </h1>
          <form className="w-full grid grid-cols-4 gap-4 p-4 pl-0">
            <div className="col-span-4 lg:col-span-2">
              <input
                name="fullName"
                type="text"
                className="border rounded p-4 w-full bg-[#e9e9ed] placeholder:text-black placeholder:opacity-25"
                placeholder="Full Name"
              />
            </div>
            <div className="col-span-4 lg:col-span-2">
              <input
                name="country"
                type="text"
                className="border rounded p-4 w-full bg-[#e9e9ed] placeholder:text-black placeholder:opacity-25"
                placeholder="Country"
              />
            </div>
            <div className="col-span-4 lg:col-span-2">
              <input
                name="phone"
                type="text"
                className="border rounded p-4 w-full bg-[#e9e9ed] placeholder:text-black placeholder:opacity-25"
                placeholder="Phone"
              />
            </div>
            <div className="col-span-4 lg:col-span-2">
              <input
                name="email"
                type="email"
                className="border rounded p-4 w-full bg-[#e9e9ed] placeholder:text-black placeholder:opacity-25"
                placeholder="Email"
              />
            </div>
            <div className="col-span-4">
              <select name="subject" className="border rounded p-4 w-full">
                <option value={null}>-- Subject --</option>
                <option value={'exhibitor'}>Exhibitor</option>
                <option value={'sponsership'}>Sponsership Opportunity</option>
                <option value={'partnership'}>Partnership Opportunity</option>
                <option value={'other'}>Other</option>
              </select>
            </div>
            <div className="col-span-4">
              <select name="subject" className="border rounded p-4 w-full">
                <option value={null}>-- How did you hear about us? --</option>
                <option value={'google-search-engine'}>
                  Google Search Engine
                </option>
                <option value={'linkedin'}>LinkedIn</option>
                <option value={'instagram'}>Instagram</option>
                <option value={'facebook'}>Facebook</option>
                <option value={'magazines'}>Magazine</option>
                <option value={'tech-times'}>Tech Times</option>
                <option value={'others'}>others</option>
              </select>
            </div>
            <div className="col-span-4">
              <textarea
                style={{ boxSizing: 'border-box' }}
                name="message"
                placeholder="Your Message"
                className="p-3 w-full bg-[#e9e9ed] placeholder:text-black placeholder:opacity-25"
                rows={6}
              />
            </div>
          </form>
        </div>
        <div className="col-span-1 flex flex-col justify-start items-center">
          <h1 className="text-center text-3xl font-semibold text-secondary self-start">
            Contact Info
          </h1>
          <div className="flex flex-row justify-center items-center self-start pt-4">
            <div className="bg-[#c7d8f5] rounded p-4 cursor-pointer">
              <BiTimeFive size={25} color="#319bce" />
            </div>
            <div className="text-sm leading-7 text-secondary ml-4">
              Sun - Fri: 9.00am to 5.00pm <br /> Sat: 12.00pm to 4.00pm
            </div>
          </div>
          <div className="flex flex-row justify-center items-center self-start pt-4">
            <div className="bg-[#c7d8f5] rounded p-4 cursor-pointer">
              <BiWorld size={25} color="#319bce" />
            </div>
            <div className="text-sm leading-7 text-secondary ml-4">
              King Abdulaziz Road, Grand Center 3rd floor, Office No.13
            </div>
          </div>
          <div className="flex flex-row justify-center items-center self-start pt-4">
            <div className="bg-[#c7d8f5] rounded p-4 cursor-pointer">
              <AiFillPhone size={25} color="#319bce" />
            </div>
            <div className="text-sm leading-7 text-secondary ml-4">
              +966-11-123-5343 <br /> +966-59-111-1111
            </div>
          </div>
          <div className="flex flex-row justify-around items-start my-5">
            <div className="border rounded p-2 cursor-pointer">
              <Link href={'#'} target="_blank" referrerPolicy="noreferer">
                <AiOutlineTwitter size={25} color="#1DA1F2" />
              </Link>
            </div>
            <div className="border rounded p-2 ml-2 cursor-pointer">
              <Link href={'#'} target="_blank" referrerPolicy="noreferer">
                <FaFacebook size={25} color="#4267B2" />
              </Link>
            </div>
            <div className="border rounded p-2 ml-2 cursor-pointer">
              <Link href={'#'} target="_blank" referrerPolicy="noreferer">
                <AiFillInstagram size={25} color="#405DE6" />
              </Link>
            </div>
            <div className="border rounded p-2 ml-2 cursor-pointer">
              <Link href={'#'} target="_blank" referrerPolicy="noreferer">
                <AiFillYoutube size={25} color="#FF0000" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

ContactUs.Layout = RootLayout;

export default ContactUs;
