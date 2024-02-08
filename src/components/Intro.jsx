import IntroCard from "./IntroCard.jsx";

const descriptionStyle = 'text-lg font-zenKaku text-white pt-10'

const columns = [
  {
    title: 'Who we are',
    description: <div
      className={descriptionStyle}>A
      <span className="font-bold text-logo"> dynamic</span>,
      <span className="font-bold text-logo"> detail-oriented</span>, and
      <span className="font-bold text-logo"> multicultural</span>
      <span> video production company dedicated to filming and producing powerful visual experiences.</span>
    </div>,
  },
  {
    title: 'What we do',
    description: <div className={descriptionStyle}>
      <span> Whether you seek corporate videos, marketing content, creative media, or high-quality visuals to elevate your project and bring your ideas to life, Generational Pictures aims to transform your ideas into compelling visual realities.
      </span>
    </div>,
  },
  {
    title: 'Our principles',
    description: <div className={descriptionStyle}>
      <span>Led by Chris Kostianis, Emmy-Award-Winning Director of Photography, 
        <span className="font-oxygen"> Generational Pictures </span>
        is dedicated to his diligent work ethic. Exceeding expectations by consistently delivering our finest work.</span>
    </div>,
  },
]

function Intro() {

  return (
    <div className="h-fit mx-auto grid grid-cols-1 2xl:max-w-[2000px] md:grid-cols-1 bg-black lg:grid-cols-3 items-start justify-evenly gap-16 md:gap-28 lg:gap-5 lg:pt-0 pt-20
    ">
      {columns.map((col) => (
        <IntroCard title={col.title} description={col.description} />
      ))}
    </div>
  )
}

export default Intro;