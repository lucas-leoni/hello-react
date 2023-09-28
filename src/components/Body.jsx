import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function Body() {
  return (
    <div className="container">
      <div className="container sticky-top p-0">
        <Navbar />
      </div>
      <div className="my-5">
        <Outlet />
      </div>
      <div className="container fixed-bottom">
        <Footer />
      </div>
    </div>
  );
}
