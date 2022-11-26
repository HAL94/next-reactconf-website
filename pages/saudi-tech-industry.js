import IconCircle from '../components/IconCircle/IconCircle';
import Section from '../components/Section/Section';
import RootLayout from '../layout/RootLayout';
import styles from '../styles/about-us.module.css';
import RiyadImage2 from '../public/riyadhbanner2.png';

const SaudiTechIndustry = () => {
  return (
    <Section className="min-h-screen">
      <div
        className={`${styles.banner} flex justify-center items-center w-full h-[250px] lg:h-[500px]`}
      >
        <div
          className="w-full bg-[length:140%] lg:bg-[length:100%] h-full absolute flex justify-center items-center"
          style={{
            backgroundImage: `url(${RiyadImage2.src})`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1 className="text-5xl font-semibold text-white absolute z-[11]">
            Saudi Tech Industry
          </h1>
        </div>
      </div>
      <div className="flex relative flex-col justify-center items-center py-20 lg:px-16 px-7 container mx-auto lg:max-w-[1200px]">
        <IconCircle />
        <p className="text-lg self-start uppercase font-semibold tracking-widest my-5 text-primary">
          A Thriving industry
        </p>
        <h1 className="self-start text-6xl font-semibold text-secondary mb-5">
          Tech industry in Saudi Arabia
        </h1>
        <div className="text">
          The Saudi Arabia food industry stays the strongest area in the overall
          economy. Saudi Arabia is home to a developing food manufacturing and
          processing field which profits by population and growth in income,
          state support, lifestyle changes, and great economic alliance.
          <br />
          <br />
          Market development is foreseen because of expanding urbanization,
          quick extension in food delivery benefits, an expanding number of
          youthful grown-ups, and working populace.
          <br />
          <br />
          The worldwide chains have followed the system of localization and
          customization through canny adjustments. Investment in the area is
          projected to reach $59 billion in 2021, an expansion of around 64%
          more than 2013. For the restaurant business, positive results from
          Vision 2030 include broad venture for space for shopping, amusement,
          and accommodation.
          <br />
          <br />
          The Saudi Arabia food industry produced $150 million in incomes in
          2018. This increment was 19% higher than the incomes procured the
          prior year. The market size for bistros and cafes is generally $5.7
          billion. Saudi Arabia and the United Arab Emirates represent 90% of
          the drink and food sector in the Gulf Cooperation Council district.
          <br />
          <br />
          Most Saudi food producers rely upon imports for food ingredients.
          Saudi Arabia imported $2.7 billion worth of intermediate food items in
          2019, generally for additional processing. Over 32.9 million tons of
          food items and drinks are utilized in Saudi Arabia every year.
          <br />
          <br />
          The Food industry plays a pivotal and vital role in the employment of
          locals. More than 131,000 individuals have direct work openings in
          Saudi Arabia as a result of the food business. In the course of recent
          years, the workforce has ascended by 13% in the fragment.
          <br />
          <br />
          Considering all these stats makes it imperative to realize the
          potential of exponential growth in the Saudi food industry leading to
          evident success and proving to be a gateway to success while spreading
          out throughout the region.
        </div>
      </div>
    </Section>
  );
};

SaudiTechIndustry.Layout = RootLayout;

export default SaudiTechIndustry;
