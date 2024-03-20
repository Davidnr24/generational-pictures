import AlterIntroCard from "./AlterIntroCard.jsx";
import VideoWorkCard from './VideoWorkCard';
import marketing_image from '../assets/marketing.png';
import hype_image from '../assets/hypevideos.png';
import storytelling_image from '../assets/storytelling.png';

const descriptionStyle = 'text-lg md:text-[23px] font-zenKaku text-white'


const columns = [
  {
    title: 'Marketing',
    description: <div
      className={descriptionStyle}><span className="font-bold">Achieve your marketing goals</span> - Engaging, polished content. We’ll use our fresh perspective to work with you to impact your target audience and exceed your objectives.
    </div>,
    href: '/chris-work/marketing',
    image: marketing_image,
    avg_color: "bg-[#584f55]/50"
  },
  {
    title: 'Storytelling',
    description: <div className={descriptionStyle}>
      <span className="font-bold">Tell your stories visually</span> - Uniquely creative and modern approaches to give your story a captivating visual life.
    </div>,
    href: '/chris-work/storytelling',
    image: storytelling_image,
    avg_color: "bg-[#736969]/50"
  },
  {
    title: 'Hype Videos',
    description: <div className={descriptionStyle}>
      <span className="font-bold">Energize your audience</span> - Take your media day to the next level, with clips that electrify crowds.
    </div>,
    href: '/chris-work/hype-videos',
    image: hype_image,
    avg_color: "bg-[#3f3862]/50"
  },
]

export default function AlterIntro({setCurrent}) {

  return (
    // <div className="h-fit mx-auto grid grid-cols-1 2xl:max-w-[2000px] md:grid-cols-1 bg-black lg:grid-cols-3 items-start justify-evenly gap-16 md:gap-28 lg:gap-5 lg:pt-0 pt-20
    // ">
    <div className="flex flex-col h-fit w-full pt-10">
      {columns.map((col) => (
        <AlterIntroCard
          title={col.title}
          description={col.description}
          href={col.href}
          image={col.image}
          avg_color={col.avg_color} 
          setCurrent={setCurrent}/>
      ))}
    </div>
  )
}