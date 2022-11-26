import Section from '../components/Section/Section';
import RootLayout from '../layout/RootLayout';
import styles from '../styles/about-us.module.css';
import AboutBanner from '../public/aboutbanner.webp';
// import IconCircle from '../public/icon-circle-1.png';
import IconCircle from '../components/IconCircle/IconCircle';

import { FiTarget } from 'react-icons/fi';
import { AiFillEye } from 'react-icons/ai';
import { SlEnvolope } from 'react-icons/sl';
import useAppearAnimation from '../hooks/useAppearAnimation';

const AboutUs = () => {
  useAppearAnimation({
    animateClass: styles.reveal,
    activeClass: styles.active,
  });
  useAppearAnimation({
    animateClass: styles['reveal-circle'],
    activeClass: styles['reveal-circle-active'],
  });
  return (
    <Section className={'min-h-screen'}>
      <div
        className={`${styles.banner} flex justify-center items-center w-full h-[250px] lg:h-[500px]`}
      >
        <div
          className="w-full bg-[length:140%] lg:bg-[length:100%] h-full absolute flex justify-center items-center"
          style={{
            backgroundImage: `url(${AboutBanner.src})`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1 className="text-5xl font-semibold text-white absolute z-[11]">
            About Us
          </h1>
        </div>
      </div>

      <div className="flex relative flex-col justify-center items-center py-20 lg:px-16 px-7 container mx-auto lg:max-w-[1200px]">
        <div className={`grid lg:grid-cols-3 grid-cols-1 gap-4`}>
          <div
            className={`${styles.reveal} col-span-1 flex flex-col group justify-center items-center p-6 border shadow-lg transition-all duration-300 ease-in lg:hover:shadow-none cursor-pointer`}
          >
            <div className="bg-[#f1f6fe] p-4 transition-all duration-300 ease-in rounded lg:group-hover:scale-105">
              <FiTarget size={50} color="#319bce" />
            </div>
            <div className="flex flex-col my-4 justify-center items-center">
              <span className="text-xl text-secondary">Our Mission</span>
              <p className="w-full text-center mb-3 mt-2">
                Zeroing in on Tech Industry while presenting exhibitors access
                to a higher value exhibition
              </p>
            </div>
          </div>
          <div
            className={`${styles.reveal} col-span-1 flex flex-col group justify-center items-center p-6 border shadow-lg transition-all duration-300 ease-in lg:hover:shadow-none cursor-pointer`}
          >
            <div className="bg-[#f1f6fe] p-4 transition-all duration-300 ease-in rounded lg:group-hover:scale-105">
              <AiFillEye size={50} color="#319bce" />
            </div>
            <div className="flex flex-col my-4 justify-center items-center">
              <span className="text-xl text-secondary">Our Vision</span>
              <p className="w-full text-center mb-3 mt-2">
                Our vision is to be the most trusted and acknowledged Technology
                Exhibition
              </p>
            </div>
          </div>
          <div
            className={`${styles.reveal} col-span-1 flex flex-col group justify-center items-center p-6 border shadow-lg transition-all duration-300 ease-in lg:hover:shadow-none cursor-pointer`}
          >
            <div className="bg-[#f1f6fe] p-4 transition-all duration-300 ease-in rounded lg:group-hover:scale-105">
              <SlEnvolope size={50} color="#319bce" />
            </div>
            <div className="flex flex-col my-4 justify-center items-center">
              <span className="text-xl text-secondary">Our Message</span>
              <p className="w-full text-center mb-3 mt-2">
                We make a deep dive into understanding your exhibition goals as
                we live and inhale &quot;outside the box&quot;
              </p>
            </div>
          </div>
        </div>
        <IconCircle />
        <p className="text-lg self-start uppercase font-semibold tracking-widest my-5 text-primary">
          ABOUT US
        </p>
        <h1 className="self-start text-6xl font-semibold text-secondary mb-5">
          Welcome to Reactors
        </h1>
        <div className="text">
          Real change starts when an idea inspires activity, regardless of how
          little. By increasing understanding of your business ventures, we give
          the most ideal positioning of your brand during the moments of
          greatest impact, assuring that you reach your clients in the perfect
          spot, at the opportune time, with the correct platform leading to
          signing new contracts and prosperity. <br />
          <br /> There&apos;s something lovely in figuring stuff out. It permits
          us the particularly human capacity to experience life through the
          perspective of &apos;why?&apos;. By providing you the perfect platform
          through Saudi Food Expo, we aim to provide you with not only a
          branding opportunity but also a wealth-building foundation through
          acquiring new deals right on the spot. <br />
          <br /> The exhibition we organize driven by an enthusiasm for building
          positive relationships among exhibitors and clients positions you in
          culture through shared values and beliefs. <br />
          <br /> Yes, we do mistakes, we are human beings (talented, creative
          with various skill-set). We learn from it for sure. That is why we
          present to you an unparalleled platform that focuses beyond marketing.
          At Saudi Food Expo, we uphold the true belief and purpose of an
          exhibition that evidently leads to an increase in revenue by signing
          new deals and expanding businesses in the region.
          <br />
          <br /> Presently, the duty of brand, marketing, and sales cooperating
          as one amicable unit is an unquestionable requirement. To accomplish a
          noteworthy platform to get that going, we bring a profound plunge into
          understanding your business industry, objectives, and why you exist.
          There&apos;s a great deal of research included, and a lot of
          soul-looking as well, as together we answer addresses like what&apos;s
          your character, why clients should care, and how your image impacts
          the world. Only through this, we can achieve what we&apos;ve set out
          for.
          <br />
          <br />
          At Reactors, that’s what we live for. Our motivation is to zero in on
          helping exhibitors conquer sales and locate the best deal for
          themselves right here at Reactors. Be it customers, exhibitors,
          clients, and networks. It&apos;s tied in with benefiting one another.
          Gaining from one another all under one roof.
          <br />
          <br />
          We present to you a ground-breaking exhibition that unites marketing
          and sales, making an extraordinary and important experience. It
          matters to us when you&apos;re spending hard-earned money to be a part
          of an exhibition that should provide results and yield beyond
          marketing, just the way you need it to.
          <br />
          <br />
          At the point when everything meets up in wonderful agreement that is
          the place which we call Saudi Food Expo – it&apos;s the place where
          your new chapters start. Possibly it&apos;s a strong and striking new
          deal. Perhaps it&apos;s a razor-sharp marketing campaign.
          <br />
          <br />
          Between sharing, boosting, and tuning in for input, we discover a beat
          of right-place-right-time that supports commitment, attracts new
          deals, and drives your business. Our ultimate goal is to get you on
          the journey of endless possibilities. It&apos;s often the little
          changes that have the greatest impact and we pride ourselves on
          bringing that change.
        </div>
      </div>
    </Section>
  );
};

AboutUs.Layout = RootLayout;

export default AboutUs;
