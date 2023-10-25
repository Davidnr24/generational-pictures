import { Link } from "react-router-dom";
import logo from '../assets/kostianis_logo.png';


export default function Logo({ setCurrent }) {


  return (

    <div className="w-auto h-16 relative">
      <Link to="/kostianis-web" onClick={setCurrent} className="">
        <img className="h-16 w-auto" src={logo} alt="" />
        <div className="absolute w-full h-full top-0 left-0 text-white ">
          <h1 className="ml-12 mt-[12px] font-cairoPlay text-[17px]">Kostianis Productions</h1>
        </div>
      </Link>
    </div>
  )
}