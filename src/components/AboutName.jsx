
//background-position:50%_50%

export default function AboutName({ name, ps, pic, bgPos = "bg-center", bgSize = "bg-cover" }) {

  return (
    <div className='flex md:flex-row lg:even:flex-row-reverse flex-col justify-between gap-5 md:gap-0 w-full mt-16'>
      <div className='flex justify-center items-center md:w-[30%] w-full'>
        <div className={`lg:h-[300px] lg:w-[300px] md:h-[200px] md:w-[200px] h-[200px] w-[200px] bg-logo rounded-full ${bgPos} ${bgSize}`}
          style={{ backgroundImage: `url(${pic})` }} />
      </div>

      <div className='flex flex-col justify-center items-start gap-3 md:w-[60%] w-full'>
        <h1 className='font-zenKaku text-white text-4xl font-semibold [text-align:center] md:[text-align:left] w-full'>About {name}</h1>
        {ps.map((p) => (
          <p className="font-zenKaku text-white [text-align:center] md:[text-align:left]">
            {p}
          </p>
        ))}
      </div>
    </div>
  )
} 