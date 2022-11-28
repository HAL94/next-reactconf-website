import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const logo =
  'https://cdn.sanity.io/images/akehlmtp/production/087c47773247a5050a71af881230fbb90eb93540-500x500.png';
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
  AiFillPhone,
  AiFillHeart,
} from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { BiTimeFive, BiWorld } from 'react-icons/bi';
import styles from './Footer.module.css';

const Footer = ({ className, footerLinks }) => {
  return (
    <div className={`bg-black ${className}`}>
      <div className="container mx-auto p-10 my-0">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          <div className="col-span-1 flex flex-col justify-center items-start">
            <Image src={logo} width={100} height={200} alt="App Logo" />
            <p className="text-gray-200 text-sm leading-6">
              The exhibition we organize driven by an enthusiasm for building
              positive relationships among exhibitors and clients positions you
              in culture through shared values and beliefs
            </p>
            <div className="flex flex-row justify-around items-start my-5">
              <div className="bg-[#c7d8f5] rounded p-2 cursor-pointer">
                <Link href={'#'} target="_blank" referrerPolicy="noreferer">
                  <AiOutlineTwitter size={25} color="#319bce" />
                </Link>
              </div>
              <div className="bg-[#c7d8f5] rounded p-2 ml-2 cursor-pointer">
                <Link href={'#'} target="_blank" referrerPolicy="noreferer">
                  <FaFacebook size={25} color="#319bce" />
                </Link>
              </div>
              <div className="bg-[#c7d8f5] rounded p-2 ml-2 cursor-pointer">
                <Link href={'#'} target="_blank" referrerPolicy="noreferer">
                  <AiFillInstagram size={25} color="#319bce" />
                </Link>
              </div>
              <div className="bg-[#c7d8f5] rounded p-2 ml-2 cursor-pointer">
                <Link href={'#'} target="_blank" referrerPolicy="noreferer">
                  <AiFillYoutube size={25} color="#319bce" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-start items-start pt-5 px-2">
            <h2
              className={`text-2xl text-gray-200 uppercase ${styles['widget-title']} leading-8 pb-3`}
            >
              Useful Links
            </h2>
            <ul className="list-none mt-6">
              {footerLinks.map((link) => (
                <li key={`footer_${link.id}`} className="text-gray-200 mb-3">
                  <Link
                    href={link.link}
                    className="px-4 border-l border-[#319bce] text-md leading-8"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 flex flex-col justify-start items-start pt-5 px-2">
            <h2
              className={`text-2xl text-gray-200 uppercase ${styles['widget-title']} leading-8 pb-3`}
            >
              Contact Us
            </h2>
            <div className="flex justify-start items-center mt-6">
              <BiTimeFive size={25} color="#319bce" />
              <div className="text-sm leading-7 text-gray-200 ml-4">
                Sun - Fri: 9.00am to 5.00pm <br /> Sat: 12.00pm to 4.00pm
              </div>
            </div>
            <div className="flex justify-start items-center mt-6">
              <BiWorld size={25} color="#319bce" />
              <div className="text-sm leading-7 text-gray-200 ml-4">
                <strong>Saudi Office</strong>
                <br />
                King Abdulaziz Road, Grand Center 3rd floor, Office No.13
              </div>
            </div>
            <div className="flex justify-start items-center mt-6">
              <AiFillPhone size={25} color="#319bce" />
              <div className="text-sm leading-7 text-gray-200 ml-4">
                +966-11-123-5343 <br /> +966-59-111-1111
              </div>
            </div>
            <div className="flex justify-start items-center mt-6">
              <FiSend size={25} color="#319bce" />
              <div className="text-sm leading-7 text-gray-200 ml-4">
                sales@reactors.com.sa
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-start items-start pt-5 px-2">
            <h2
              className={`text-2xl text-gray-200 uppercase ${styles['widget-title']} leading-8 pb-3`}
            >
              News Letter
            </h2>
            <div className="container mx-auto my-4">
              <form className="p-3 pl-0 flex flex-col">
                <input
                  style={{ padding: '.375rem .75rem' }}
                  type="email"
                  className="rounded leading-snug focus:border-[#2017a2] bg-clip-padding focus:shadow-md border-[#ced4da] transition-all duration-300 ease-in border"
                  placeholder="Your email address"
                  name="email"
                  required
                />
                <button className="form-button my-3">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-black border-t border-primary p-5 text-gray-200 text-lg flex justify-center items-center">
        &#169; {new Date().toLocaleDateString('default', { year: 'numeric' })}{' '}
        Reactors. Built with &nbsp;{' '}
        <span>
          <AiFillHeart size={20} color="red" />
        </span>{' '}
        &nbsp; by &nbsp;{' '}
        <Link
          className="bg-[#ff9063] font-semibold rounded p-1"
          target="_blank"
          href="https://github.com/HAL94"
        >
          @HAL94
        </Link>
      </div>
    </div>
  );
};

export default Footer;
