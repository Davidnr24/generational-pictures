import { Link } from "react-router-dom";
import logo from '../assets/new_logo.png';


export default function NewLogo({className, setCurrent, width="w-full", height="h-auto"}) {


  return (

      <a href="/" onClick={setCurrent} className={className}>
        <img className={`${width} ${height}`} src={logo} alt="" />
      </a>
  )
}