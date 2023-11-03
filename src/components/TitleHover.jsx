

export default function TitleHover({ className }) {



  return (
    <h1 className={`${className}`}>
      {'AN EMERGING VIDEO PRODUCTION HOUSE'.split('').map((letter) => (
        <span className='text-logo-white hover:text-logo'>{letter}</span>
      ))}
    </h1>
  )

}