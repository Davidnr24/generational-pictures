import IntroCard from "./IntroCard.jsx";

const columns = [
	{
		title: 'Who we are',
		description: 'Led by Emmy-Award winning director of photography Chris Kostianis, Kostianis Productions is dedicated \
      to his work ethic of exceeding expectations by consistently delivering our finest work. We aim to transform your ideas into compelling visual realities.',
	},
  {
		title: 'What we do',
		description: '',
	},
  {
		title: 'Our principles',
		description: '',
	},
]

function Intro(){

  return (
    <div className="mx-auto grid grid-cols-1 2xl:max-w-[2000px] md:grid-cols-1 lg:grid-cols-3 items-start justify-evenly gap-5 pt-20">
      {columns.map((col) => (
        <IntroCard title={col.title} description={col.description}/>
      ))}
    </div>
  )
}

export default Intro;