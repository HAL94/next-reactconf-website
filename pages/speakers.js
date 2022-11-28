import RootLayout from '../layout/RootLayout';
import Section from '../components/Section/Section';
import client from '../sanity-client';
import { getSpeakers } from '../groc-queries';
import Speaker from '../components/Speaker/Speaker';

export async function getStaticProps() {
  try {
    const speakers = await client.fetch(getSpeakers);
    return {
      props: {
        speakers,
      },
    };
  } catch (error) {
    return {
      props: {
        speakers: null,
      },
    };
  }
}
const Speakers = ({ speakers }) => {
  console.log('speakers', speakers);
  return (
    <Section className="min-h-screen py-20 lg:px-16 px-7 bg-[#fafafa]">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 container mx-auto lg:max-w-[1200px]">
        <h1 className="text-4xl text-black leading-2 uppercase p-3 border">
          Speakers at Reactors 2023
        </h1>
        {speakers &&
          speakers.map((speaker) => (
            <Speaker
              key={speaker._id}
              className="col-span-1 relative max-h-[400px] min-h-[350px]"
              {...speaker}
            />
          ))}
      </div>
    </Section>
  );
};

Speakers.Layout = RootLayout;

export default Speakers;
