import Section from '../components/Section/Section';
import RootLayout from '../layout/RootLayout';

const Register = () => {
  return (
    <Section className="py-20 lg:px-16 px-7 bg-[#fafafa] flex-auto">
      <div className="flex justify-center items-center min-h-[600px]">
        <h1 className="text-center text-6xl font-semibold text-secondary mb-36">
          Registration Coming Soon
        </h1>
      </div>
    </Section>
  );
};

Register.Layout = RootLayout;

export default Register;
