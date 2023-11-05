import { useState } from "react";
import Vimeo from '@u-wave/react-vimeo';
//import { Dialog } from '@headlessui/react'
import { XMarkIcon } from "@heroicons/react/24/outline";
import ReactModal from "react-modal";



export default function VideoComp({ title, url, showModalMobile, setShowModalMobile }) {

  const [isPlaying, setIsPlaying] = useState(false)
  const [isReady, setIsReady] = useState(false);
  const [showModal, setShowModal] = useState(false)


  const videoH = 'xl:h-[245px] h-[245px] lg:h-[189px]'
  const videoW = 'xl:w-[400px] w-[400px] lg:w-[300px]'


  return (
    <>
      <div className="hidden m-4 lg:flex flex-col justify-center gap-3 items-center">
        <div className={`font-zenKaku font-extralight text-lg text-center text-black mx-auto max-${videoW}`}>{title}</div>
        <div className={`relative h-auto ${videoW}`}
        // onMouseIn={() => setIsPlaying(true)}
        // onMouseOut={() => setIsPlaying(false)}
        // onClick={() => setShowModal(true)}
        >
          <Vimeo
            className="shadow-xl w-full h-full"
            video={url}
            loop={true}
            volume={0}
            paused={!isPlaying && !isReady}
            controls={false}
            responsive={true}
            onPlay={() => console.log("play")}
            onPlaying={() => console.log("playing")}
            autopause={true}
            playsinline={true}
          />
          <div className={`absolute top-0 left-0 z-2 bg-transparent h-full ${videoW} cursor-pointer`}
            onMouseOver={() => {
              console.log("onmouseover")
              setTimeout(() => setIsPlaying(true), 100);
            }}
            onMouseOut={() => {
              console.log("onmouseOut")
              setTimeout(() => setIsPlaying(false), 100);
              console.log(isPlaying)
            }}
            onClick={() => setShowModal(true)}
          />


        </div>
      </div>
      <ReactModal
        shouldFocusAfterRender={false}
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        className='bg-black w-fit h-fit mx-auto mt-[90px] border-l-[20px] border-logo rounded-md '
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0, 0.75)'

          },
        }}
      >
        <div className="flex flex-row item justify-center my-auto py-4 pr-4 pl-10 w-full h-full">
          <div className="flex flex-col items-center justify-center h-full pt-2 gap-2 w-full">
            <h1 className="text-white font-zenKaku mx-auto text-[24px]">{title}</h1>
            <div className="grow lg:w-[530px] xl:w-[750px] 2xl:w-[900px] h-auto">
              <Vimeo
                className='h-full w-full'
                video={url}
                responsive={true}
              />
            </div>

          </div>
          <div className="w-fit flex flex-row items-start justify-end cursor-pointer">
            <XMarkIcon className="text-white h-8 w-8" aria-hidden="true" onClick={() => setShowModal(false)} />
          </div>
        </div>
      </ReactModal>


      <div className="lg:hidden m-4 flex flex-col justify-center gap-3 items-center">
        <div className={`font-zenKaku font-extralight text-lg text-center text-black mx-auto max-${videoW}`}>{title}</div>
        <div className={`relative h-auto ${videoW}`}
        // onMouseIn={() => setIsPlaying(true)}
        // onMouseOut={() => setIsPlaying(false)}
        // onClick={() => setShowControls(true)}
        >
          <Vimeo
            className="shadow-xl lg:hidden w-full h-full"//{`${videoH} ${videoW}`}
            video={url}
            loop={true}
            controls={false}
            responsive={true}
            onPlay={() => console.log("play")}
            onPlaying={() => console.log("playing")}
            autopause={true}
            playsinline={true}
          />
          <div className={`peer absolute top-0 left-0 z-4 bg-transparent h-full ${videoW} cursor-pointer`}
            onClick={() => setShowModalMobile(true)}
          />
          <div className={`absolute top-0 left-0 z-2 ${showModalMobile ? videoW : 'w-0'} h-full cursor-pointer transition-all duration-300`}>
            <Vimeo
              className="shadow-xl lg:hidden w-full h-full"//{`${videoH} ${videoW}`}
              video={url}
              loop={true}
              controls={true}
              responsive={true}
              paused={!showModalMobile}
              onPlay={() => console.log("play")}
              onPlaying={() => console.log("playing")}
              autopause={true}
              playsinline={true}
            />
          </div>

        </div>

      </div>
    </>
  )
}