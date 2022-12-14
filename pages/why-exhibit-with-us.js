import Section from '../components/Section/Section';
import RootLayout from '../layout/RootLayout';
import Banner from '../components/Banner/Banner';
import WhyUsImage from '../public/whychooseus.jpg';

import IconCircle from '../components/IconCircle/IconCircle';
import DescriptionArticle from '../components/DescriptionArticle/DescriptionArticle';

const WhyChooseUs = () => {
  return (
    <Section className={'min-h-screen'}>
      <Banner bannerImage={WhyUsImage} bannerText={'Why Choose Us'} />

      <div className="flex relative flex-col justify-center items-center py-20 lg:px-16 px-7 container mx-auto lg:max-w-[1200px]">
        <IconCircle />
        <DescriptionArticle subtitle="Why Us?" title="Why Exhibit with us?">
          In case you&apos;re not showing at Saudi Food Expo you&apos;re passing
          up an entire scope of game-evolving benefits. Advantages that could
          very well have that vital effect in changing your business into a
          business that can rival the big players in your industry. A key fact
          is that 1 out of 2 visitors sign deals at exhibitions. <br />
          <br /> Two words: Human Interaction. To bring deals to a close drives
          your need to fabricate trust. It&apos;s a lot simpler to acquire a
          client&apos;s trust when they are before you instead of via telephone
          or over email. Indeed, even in this computerized age, nothing beats up
          close and personal. Close deals and Book meetings with them during the
          occasion to fortify those connections while assembling new ones, all
          in one place. <br />
          <br /> Exhibiting at our exhibition gives you a front-row seat to make
          direct deals. Exhibiting here would open additional opportunities and
          return what you paid for. At Saudi Food Expo we make sure to provide
          an outstandingly designed platform, booth, to aid you in creating the
          most inviting environment. <br />
          <br /> Attendees who put forth the effort to come to our exhibition do
          so in light of the fact that they are effectively hoping to sign new
          deals. The greater part of the participants will be potential clients
          who are keen on your industry and the items or administrations you
          offer and are ready to close the deal on the spot as our exhibition
          will give a stage for you to sell straightforwardly to
          decision-makers.
          <br />
          <br /> Exhibiting here will give you one of only a handful few
          opportunities where you approach similar clients as your bigger rivals
          do. This makes Saudi Food Expo an important stage to fortify your
          image and position your business as a pioneer in Saudi Food Expo.
          Also, talking about your rivals, you can advance your business in a
          climate where you have similar outreach to similar clients like the
          big players in your field do. So, in the end, we ask you{' '}
        </DescriptionArticle>
      </div>
    </Section>
  );
};

WhyChooseUs.Layout = RootLayout;

export default WhyChooseUs;
