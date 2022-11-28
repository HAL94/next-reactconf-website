import Banner from '../components/Banner/Banner';
import DescriptionArticle from '../components/DescriptionArticle/DescriptionArticle';
import IconCircle from '../components/IconCircle/IconCircle';
import Section from '../components/Section/Section';
import RootLayout from '../layout/RootLayout';
import RiyadImage2 from '../public/riyadhbanner2.png';

const WhySaudiArabia = () => {
  return (
    <Section className={'min-h-screen'}>
      <Banner bannerImage={RiyadImage2} bannerText={'Riyadh, Saudi Arabia'} />

      <div className="flex relative flex-col justify-center items-center py-20 lg:px-16 px-7 container mx-auto lg:max-w-[1200px]">
        <IconCircle />
        <DescriptionArticle subtitle="Why Us?" title="Why Saudi Arabia">
          Saudi Arabia bestows the most significant potential buyer market found
          in the Gulf Cooperation Council region. Saudi Arabia remains devoted
          to revolutionizing its economy and attracting new business in addition
          to the continuous economic broadening and diversification through
          Vision 2030- a state-supported project pointed towards decreasing the
          nation&apos;s dependence on oil through economic enhancement and
          diversification. Being the biggest in the region, with an estimated
          221 billion riyals in the food industry alone, making Saudi Arabia a
          highly lucrative market for investments in restaurants, wholesalers,
          hypermarkets, along with entertainment projects. <br />
          <br /> To mention a few huge projects, Neom City ($500M), Amaala (2500
          hotel rooms, 700 private villas, 200 outlets), Red Sea Development
          (Megaproject that focuses on building a place for tourists right on
          the red sea), Al-Qiddiya entertainment city (Almost as big as Las
          Vegas). <br />
          <br /> Not only this, International Monetary Fund (IMF) declared Saudi
          Arabia as the World&apos;s Fastest growing economy with a non-oil
          growth of 7.2% with a per capita income of $33,500. Ranked 6th in the
          world for macroeconomic stability, Saudi Arabia is getting to be known
          for its “Europeanisation” of taste, easy capital movement, and
          repatriation of profits. <br />
          <br /> Moving on towards the food industry, food consumption is 3130
          calories per capita per day with an annual growth of 18.5% and an
          import of $14.2 Billion per annum. Due to the rising population,
          consumption will grow to $70 Billion per annum. Kingdom of Saudi
          Arabia plays a pivotal role in uplifting and supporting the food
          industry by launching an $800 million Food Security Initiative. <br />
          <br /> The younger population susceptible to western trends makes
          Saudi a good entry point whereas demand for organic foods is steadily
          increasing with the increase in health consciousness. Considering all
          these facts, Saudi Arabia tends to become the best choice for
          exhibiting in the food industry, close deals, and uplift your entire
          business to a whole new level leading you to sustainable success and
          prosperity.{' '}
        </DescriptionArticle>
      </div>
    </Section>
  );
};

WhySaudiArabia.Layout = RootLayout;

export default WhySaudiArabia;
