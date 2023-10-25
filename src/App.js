import logo from './icons/logo.svg';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ChrisWork from './pages/ChrisWork'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './navigation/NavBar';
import Footer from './navigation/Footer';
import Marketing from './pages/Marketing';
import HypeVideos from './pages/HypeVideos';
import StoryTelling from './pages/StoryTelling';
import { Fragment, useState } from 'react'
import ScrollToTop from './navigation/ScrollToTop';






function App() {
  const [current, setCurrent] = useState("home");

  const marginTop = 'mt-[120px]'

  const paths = [
    { name: 'Home', element: <Home className={marginTop} setCurrent={setCurrent}/>, path: '/kostianis-web' },
    { name: 'Chris Work', element: <ChrisWork className={marginTop} />, path: 'kostianis-web/chris-work' },
    { name: 'About Us', element: <About />, path: 'kostianis-web/about' },
    { name: 'Lets talk', element: <Contact />, path: 'kostianis-web/contact' },
    { name: 'Marketing', element: <Marketing />, path: 'kostianis-web/chris-work/marketing' },
    { name: 'Story Telling', element: <StoryTelling />, path: 'kostianis-web/chris-work/story-telling' },
    { name: 'Hype Videos', element: <HypeVideos />, path: 'kostianis-web/chris-work/hype-videos' },
  
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
