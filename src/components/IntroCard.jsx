

function IntroCard({title, description}){

  const underlineStyleC = {
		background: 'linear-gradient(90deg, rgba(192,192,0,1) 14%, rgba(192,192,192,1) 14%, rgba(192,192,192,1) 28%, rgba(0,192,192,1) 28%, rgba(0,192,192,1) 42%, rgba(0,192,0,1) 42%, rgba(0,192,0,1) 56%, rgba(192,0,192,1) 56%, rgba(192,0,192,1) 70%, rgba(192,0,0,1) 70%, rgba(192,0,0,1) 84%, rgba(0,0,192,1) 84%'
	}


  return (
    <div className="flex flex-col w-full justify-center text-center font-poppins md:px-2 px-4 grow">
      <div className="text-4xl text-black grow">{title}</div>
      {description}
    </div>
  )
}

export default IntroCard;