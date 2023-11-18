import { Link } from "react-router-dom";
import logo from '../assets/kostianis_logo.png';


export default function Logo({className, setCurrent, width, height, text }) {


  return (

    <div className={`${className} ${width} ${height} relative`}>
      <Link to="" onClick={setCurrent} className="">
        <img className={`${width} ${height}`} src={logo} alt="" />
        <div className="absolute w-full h-full top-0 left-0 text-white ">
          <h1 className={`${text} font-zenKaku `}>Kostianis Productions</h1>
        </div>
      </Link>
    </div>
  )
}