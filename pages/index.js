import HeroSection from '../components/HeroSection/HeroSection';
import Section from '../components/Section/Section';
import Navbar from '../components/Navbar/Navbar';
import WhyUs from '../components/WhyUs/WhyUs';
import { getConfInfo, getExhibitorList, getSponserInfo, getSectorsList } from '../groc-queries';
import client from '../sanity-client';
import SponserList from '../components/SponserList/SponserList';
import ExhibitorList from '../components/ExhibitorList/ExhibitorList';
import WhyUnique from '../components/WhyUnique/WhyUnique';
import SectorsList from '../components/SectorsList/SectorsList';
import JoinUs from '../components/JoinUs/JoinUs';

export async function getStaticProps() {
  try {
    const confResult = await client.fetch(getConfInfo);
    const sponserResult = await client.fetch(getSponserInfo);
    const exhibitorResult = await client.fetch(getExhibitorList);
    const sectorsResult = await client.fetch(getSectorsList);

    const names = confResult[0].images.imageKey;
    const urls = confResult[0].images.imageUrl;

    const images = {};
    for (let x = 0; x < names.length; x++) {
      images[names[x]] = urls[x];
    }

    confResult[0]['images'] = images;

    // console.log('confResult', confResult[0]);
    // console.log('sponserResult', sponserResult);
    return {
      props: {
        confDetails: confResult[0],
        sponserResult: sponserResult,
        exhibitorResult: exhibitorResult,
        sectorsResult: sectorsResult
      },
    };
  } catch (error) {
    console.log('error fetching conf details', error);
    return {
      props: {
        confDetails: null,
      },
    };
  }
}
export default function Home({ confDetails, sponserResult, exhibitorResult, sectorsResult }) {
  return (
    <>
      <Section className='min-h-screen'>
        <Navbar />
        <HeroSection confDetails={confDetails} />
      </Section>
      <Section className='min-h-screen bg-[#fafafa]'>
        <WhyUs
          aboutConf={confDetails.confDescription}
          whyUsImage={confDetails.images['whyUs']}
        />
      </Section>
      <Section className="py-20 lg:px-16 px-7 min-h-screen">
        <SponserList sponserList={sponserResult} />
      </Section>
      <Section className="bg-[#fafafa] py-20 lg:px-16 px-7">
        <ExhibitorList exhibitorList={exhibitorResult} />
      </Section>
      <Section className="py-20 lg:px-16 px-7">
        <WhyUnique />
      </Section>
      <Section className="py-20 lg:px-16 px-7 bg-[#fafafa]">
        <SectorsList sectorsList={sectorsResult} />
      </Section>
      <Section className="py-20 lg:px-16 px-7 min-h-screen">
        <JoinUs/>
      </Section>
    </>
  );
}
