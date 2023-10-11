import logo from './icons/logo.svg';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ChrisWork from './pages/ChrisWork'
import Skills from './pages/Skills'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './navigation/NavBar';
import Footer from './navigation/Footer';
import { Fragment, useState } from 'react'

const paths = [
  {name: 'Home', element: <Home/>, path: '/kostianis-web'},
  {name: 'Chris Work', element: <ChrisWork/>, path: 'kostianis-web/chris-work'},
  {name: 'Skills', element: <Skills/>, path: 'kostianis-web/skills'},
  {name: 'About Us', element: <About/>, path: 'kostianis-web/about'},
  {name: 'Lets talk', element: <Contact/>, path: 'kostianis-web/contact'},
]


function App() {
  const [current, setCurrent] = useState("home");
  return (
  <div className='h-full'>
    <Router className="bg-black">
      <Navbar current={current} setCurrent={(current) => setCurrent(current)}/>
      <Routes>
        {paths.map((path) => {
          return <Route path={path.path} element={path.element} />
        })}
      </Routes>
      <Footer current={current} setCurrent={(current) => setCurrent(current)}/>
    </Router>
  </div>
  );
}

export default App;
