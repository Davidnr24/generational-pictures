

function IntroCard({title, description}){

  return (
    <div className="flex flex-col w-full justify-center text-center font-poppins md:px-2 px-4 grow">
      <div className="text-4xl text-black grow">{title}</div>
      <div className="text-xl text-gray-400 pt-10 ">{description}</div>
    </div>
  )
}

export default IntroCard;