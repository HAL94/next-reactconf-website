import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
const websiteLinks = [
  {
    title: 'Home',
    link: '/',
    id: '6cb8-11ed-a1eb-0242ac120002',
  },
  {
    title: 'Why Us',
    id: '95da-4120-ba98-ae1ac32fb3ee',
    isDropdown: true,
    children: [
      {
        title: 'Why Saudi Arabia?',
        link: '/why-saudi-arabia',
        id: 'c3b7-4a2b-8044-fe42345b3df6',
      },
      {
        title: 'Why Exhibit With Us?',
        link: '/why-exhibit-with-us',
        id: '888e-4e20-a6fb-1b9a44a7d484',
      },
    ],
  },
  {
    title: 'About',
    link: '/about-us',
    id: '5603-460b-8ed7-2aade68386da',    
  },
  {
    title: 'Saudi Tech Industry',
    link: '/saudi-tech-industry',
    id: 'c11a-4f82-90bc-16da40bd2c3a',
  },
  {
    title: 'Speakers',
    link: '/speakers',
    id: 'abaf-453c-88bc-0617364366dc',
  },
  {
    title: 'Contact',
    link: '/contact',
    id: 'a513-4d6f-b7f4-0f3d24990871',
  },
];

const getFooterLink = (link) => link.link === '/contact' || link.link === '/speakers' || link.link === '/about-us' || link.link === '/';
export default function RootLayout({ children }) {
  const footerLinks = websiteLinks.filter(getFooterLink)
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar websiteLinks={websiteLinks} />
      {children}
      <Footer footerLinks={footerLinks} className={'mt-auto'} />
    </div>
  );
}
