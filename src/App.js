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

    if (currentPath == '/' || currentPath == '') return 'home';
    else if (currentPath == '/chris-work') return 'chris-work';
    else if (currentPath == '/about') return 'about';
    else if (currentPath == '/contact') return 'contact';
    else if (currentPath == '/chris-work/marketing') return 'chris-work';
    else if (currentPath == '/chris-work/hype-videos') return 'chris-work';
    else if (currentPath == '/chris-work/storytelling') return 'chris-work';
    else return ""
  });

  const marginTop = 'mt-[120px]'

  const paths = [
    { name: 'Home', element: <Home className={marginTop} setCurrent={setCurrent} />, path: '/' },
    { name: 'Chris Work', element: <ChrisWork className={marginTop} />, path: '/chris-work' },
    { name: 'About Us', element: <About className={marginTop} />, path: '/about' },
    { name: 'About Us', element: <Privacy className={marginTop}/>, path: '/privacy' },
    { name: 'Lets talk', element: <Contact className={marginTop}/>, path: '/contact' },
    { name: 'Marketing', element: <ChrisWorkElem className={marginTop} displayPage='marketing' />, path: '/chris-work/marketing' },
    { name: 'Storytelling', element: <ChrisWorkElem className={marginTop} displayPage='storytelling'/>, path: '/chris-work/storytelling' },
    { name: 'Hype Videos', element: <ChrisWorkElem  className={marginTop} displayPage='hype-videos'/>, path: '/chris-work/hype-videos' },

  ]


  return (
    <div className='h-full w-[100vw]'>
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
