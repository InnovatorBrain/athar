import './App.css';

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Footer from './components/Footer';
// import Resources from './pages/Resources';
import Contact from './pages/Contact';
// import PrivateRoutes from './PrivateRoute';
import Faq from './pages/Faq';
import Login from './pages/Login';
import Footer from './components/Footer/Footer';
import Signup from './pages/Signup';
import Headings from './components/PageNotFount/PageNotFount';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/resources' element={<Resources />} /> */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/faqs' element={<Faq />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        {/* <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<><div className="Dashboard-main-container"><DashboardLayout/></div></>} />
        </Route> */}

        <Route path="*" element={<><div className='404Page'> <Headings title="Oops, we couldn't find that page." text="Sorry, it seems like you've wandered off the beaten path. Explore our mission elsewhere on our site, or navigate back to discover more about our initiatives and goals." link="/Home" linkText="CropShield home page" /></div></>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;









