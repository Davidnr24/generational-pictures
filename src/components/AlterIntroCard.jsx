import VideoWorkCard from "./VideoWorkCard"


export default function AlterIntroCard({ title, description, href, image, avg_color, setCurrent }) {

  const underlineStyleC = {
    background: 'linear-gradient(90deg, rgba(192,192,0,1) 14%, rgba(192,192,192,1) 14%, rgba(192,192,192,1) 28%, rgba(0,192,192,1) 28%, rgba(0,192,192,1) 42%, rgba(0,192,0,1) 42%, rgba(0,192,0,1) 56%, rgba(192,0,192,1) 56%, rgba(192,0,192,1) 70%, rgba(192,0,0,1) 70%, rgba(192,0,0,1) 84%, rgba(0,0,192,1) 84%'
  }


  return (
    <div className="flex lg:flex-row flex-col gap-10 w-full lg:odd:flex-row lg:even:flex-row-reverse justify-center items-center text-center font-zenKaku px-4 py-5 lg:py-[10vh]">
      {/* <div className="text-4xl w-1/2 text-white grow">{title}</div> */}
      <VideoWorkCard name={title} href={href} imageC={image} avg_color={avg_color} setCurrent={setCurrent} />
      <div className="text-xl w-full lg:w-1/2 text-white font-semibold">{description}</div>
    </div>
  )
}
