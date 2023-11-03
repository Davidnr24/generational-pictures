import logo from './icons/logo.svg';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ChrisWork from './pages/ChrisWork'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './navigation/NavBar';
import Footer from './navigation/Footer';
import { Fragment, useState } from 'react'
import ScrollToTop from './navigation/ScrollToTop';
import Privacy from './pages/Privacy';
import ChrisWorkElem from './pages/ChrisWorkElem';



function App() {
  const [current, setCurrent] = useState(() => {

    const currentPath = window.location.pathname;
    console.log(currentPath)

    if (currentPath == '/kostianis-web/' || currentPath == '/kostianis-web') return 'home';
    else if (currentPath == '/kostianis-web/chris-work') return 'chris-work';
    else if (currentPath == '/kostianis-web/about') return 'about';
    else if (currentPath == '/kostianis-web/contact') return 'contact';
    else if (currentPath == '/kostianis-web/chris-work/marketing') return 'chris-work';
    else if (currentPath == '/kostianis-web/chris-work/hype-videos') return 'chris-work';
    else if (currentPath == '/kostianis-web/chris-work/storytelling') return 'chris-work';
    else return ""
  });

  const marginTop = 'mt-[120px]'

  const paths = [
    { name: 'Home', element: <Home className={marginTop} setCurrent={setCurrent} />, path: '/kostianis-web/' },
    { name: 'Chris Work', element: <ChrisWork className={marginTop} />, path: 'kostianis-web/chris-work' },
    { name: 'About Us', element: <About />, path: 'kostianis-web/about' },
    { name: 'About Us', element: <Privacy />, path: 'kostianis-web/privacy' },
    { name: 'Lets talk', element: <Contact />, path: 'kostianis-web/contact' },
    { name: 'Marketing', element: <ChrisWorkElem displayPage='marketing' />, path: 'kostianis-web/chris-work/marketing' },
    { name: 'Storytelling', element: <ChrisWorkElem displayPage='storytelling'/>, path: 'kostianis-web/chris-work/storytelling' },
    { name: 'Hype Videos', element: <ChrisWorkElem displayPage='hype-videos'/>, path: 'kostianis-web/chris-work/hype-videos' },

  ]


  return (
    <div className='h-full'>
      <Router className="bg-black">

        <Navbar current={current} setCurrent={(current) => setCurrent(current)} />
        <ScrollToTop />
        <Routes>
          {paths.map((path) => {
            return <Route path={path.path} element={path.element} />
          })}
        </Routes>
        <Footer current={current} setCurrent={(current) => setCurrent(current)} />
      </Router>
    </div>
  );
}

export default App;
