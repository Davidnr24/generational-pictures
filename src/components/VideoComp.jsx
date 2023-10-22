import { useState } from "react";
import ReactPlayer from "react-player";



export default function VideoComp({ title, url, img_src, preview_src }) {

  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="m-4 flex flex-col justify-center gap-3 items-center">
      <div className="font-poppins text-[20px] text-black">{title}</div>
      <div 
      onMouseEnter={() => setIsPlaying(true)} 
      onMouseLeave={() => setIsPlaying(false)}>
      <ReactPlayer
        url={url}
        loop
        muted
        playing={isPlaying}
        width="100%"
        height="100%"
      />
      </div>
    </div>
  )
}