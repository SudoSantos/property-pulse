import '@/assets/styles/global.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
 
export const metadata = {
  title: 'PropertyPulse | Find The Perfect Rental',
  description: "Find your dream rental property",
  keywords: 'rental, className= rentals, find properties',
}

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
