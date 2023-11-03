

export default function TitleDomino({ className }) {

  const calculateDelay = (index) => {
    return "delay-[" + (index*10) +"ms]"
  } 


  return (
    <h1 className={`${className} group`}>
      {'AN EMERGING VIDEO PRODUCTION HOUSE'.split('').map((letter,index) => (
        <span key={index}
        style={{transitionDelay: (index*20)+"ms"}}
        className={`text-logo-white transition-all lg:group-hover:text-logo `}>{letter}</span>
      ))}
    </h1>
  )
}