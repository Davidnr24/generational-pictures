import IntroCard from "./IntroCard.jsx";

const descriptionStyle = 'text-lg font-zenKaku text-white font-extralight pt-10'

const columns = [
  {
    title: 'Who we are',
    description: <div
      className={descriptionStyle}>A
      <span className="font-bold text-logo"> dynamic</span>,
      <span className="font-bold text-logo"> detail-oriented</span>, and
      <span className="font-bold text-logo"> cross-cultural</span>
      <span> video production company dedicated to filming and producing powerful visual experiences.</span>
    </div>,
  },
  {
    title: 'What we do',
    description: <div className={descriptionStyle}>
      <span> Whether you seek corporate videos, marketing content, creative media, or any form of high-quality visuals to elevate your project bring your ideas to life, Kostianis Productions aims to transform your ideas into compelling visual realities.
      </span>
    </div>,
  },
  {
    title: 'Our principles',
    description: <div className={descriptionStyle}>
      <span>Led by Chris Kostianis, Emmy-Award-Winning Director of Photography, 
        <span className="font-oxygen"> Kostianis Productions </span>
        is dedicated to his diligent work ethic. Exceeding expectations by consistently delivering our finest work.</span>
    </div>,
  },
]

function Intro() {

  return (
    <div className=" mx-auto grid grid-cols-1 2xl:max-w-[2000px] md:grid-cols-1 bg-black lg:grid-cols-3 items-start justify-evenly gap-5 py-32">
      {columns.map((col) => (
        <IntroCard title={col.title} description={col.description} />
      ))}
    </div>
  )
}

export default Intro;