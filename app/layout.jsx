
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Dubiz - Business Setup & PRO Services in Dubai',
  description: 'Your trusted partner for business setup, PRO services, and golden visa solutions in the UAE.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}