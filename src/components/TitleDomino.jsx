

export default function TitleDomino({ className }) {

  const calculateDelay = (index) => {
    return "delay-[" + (index * 10) + "ms]"
  }


  return (
    <h1 className={`${className} group`}>
      {'BRINGING YOUR IDEAS'.split('').map((letter, index) => (
        <span key={index}
          style={{ transitionDelay: (index * 25) + "ms" }}
          className={`text-logo-white transition-all lg:group-hover:text-logo `}>{letter}</span>
      ))}
      <br/>
      {'TO LIFE, TOGETHER.'.split('').map((letter, index) => (
        <span key={index}
          style={{ transitionDelay: (index * 25 + 17*25) + "ms" }}
          className={`text-logo-white transition-all lg:group-hover:text-logo `}>{letter}</span>
      ))}
    </h1>
  )
}