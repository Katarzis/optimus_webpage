import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

export default function MainLayout() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ugrás a tartalomhoz
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
