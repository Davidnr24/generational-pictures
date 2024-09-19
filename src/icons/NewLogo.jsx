import logo_large from '../assets/new_logo.png';
import logo_mid from '../assets/new_logo_mini.png';
import logo_small from '../assets/new_logo.png';


export default function NewLogo({ className, setCurrent, width = "w-full", height = "h-auto", size = "large" }) {


  return (
    <>
      {
        size === "large" && <a href="/" onClick={setCurrent} className={className}>
          <img className={`${width} ${height}`} src={logo_large} alt="" />
        </a>
      }
      {
        size === "mid" && <a href="/" onClick={setCurrent} className={className}>
          <img className={`${width} ${height}`} src={logo_mid} alt="" />
        </a>
      }
      {
        size === "small" && <a href="/" onClick={setCurrent} className={className}>
          <img className={`${width} ${height}`} src={logo_small} alt="" />
        </a>
      }
    </>

  )
}