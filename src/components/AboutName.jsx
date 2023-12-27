
//background-position:50%_50%

export default function AboutName( { name, ps, pic, bgPos="bg-center", bgSize="bg-cover" }) {

  return (
    <div className='flex md:flex-row lg:even:flex-row-reverse flex-col gap-5 md:gap-0 w-full mt-16'>
      <div className='flex justify-start lg:justify-center items-center md:w-[40%] w-full'>
      <div className={`h-[300px] bg-logo w-[300px] rounded-full ${bgPos} ${bgSize}`}
            style={{ backgroundImage: `url(${pic})` }} />
      </div>

      <div className='flex flex-col justify-start items-start gap-3 md:w-[60%] w-full'>
        <h1 className='font-zenKaku text-white text-4xl font-semibold'>About {name}</h1>
        {ps.map((p) => (
          <p className="font-zenKaku text-white">
            {p}
          </p>
        ))}
      </div>
    </div>
  )
} 