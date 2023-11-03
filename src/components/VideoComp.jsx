import { useState } from "react";
import Vimeo from '@u-wave/react-vimeo';
//import { Dialog } from '@headlessui/react'
import { XMarkIcon } from "@heroicons/react/24/outline";
import ReactModal from "react-modal";



export default function VideoComp({ title, url, img_src, preview_src }) {

  const [isPlaying, setIsPlaying] = useState(false)
  const [isReady, setIsReady] = useState(false);
  const [showModal, setShowModal] = useState(false)

  const videoH = 'xl:h-[245px] h-[245px] lg:h-[189px]'
  const videoW = 'xl:w-[400px] w-[400px] lg:w-[300px]'

  // const videoH = ''
  // const videoW = 'w-[25vw]'

  const doublecheck = () => {
    console.log("playing")
    if (!isPlaying) {
      setIsReady(false)
      console.log("isplaying is false")
    } else
      console.log("isplaying is true")
  }



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
            className="shadow-xl w-full h-full"//{`${videoH} ${videoW}`}
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
      <div className="lg:hidden m-4 flex flex-col justify-center gap-3 items-center">
        <div className={`font-zenKaku font-extralight text-lg text-center text-black mx-auto max-${videoW}`}>{title}</div>
        <div className={`relative h-auto ${videoW}`}
        // onMouseIn={() => setIsPlaying(true)}
        // onMouseOut={() => setIsPlaying(false)}
        // onClick={() => setShowModal(true)}
        >
          <Vimeo
            className="shadow-xl lg:hidden w-full h-full"//{`${videoH} ${videoW}`}
            video={url}
            loop={true}
            controls={true}
            responsive={true}
            onPlay={() => console.log("play")}
            onPlaying={() => console.log("playing")}
            autopause={true}
            playsinline={true}
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
          <div className="flex flex-col items-center justify-center h-full pt-8 gap-2 w-full">
            <h1 className="text-white font-zenKaku mx-auto text-[24px]">{title}</h1>
            <div className="grow lg:w-[650px] xl:w-[750px] 2xl:w-[900px] h-auto">
              <Vimeo
                className='h-full w-full'
                video={url}
                responsive={true}
              />
            </div>

          </div>
          <div className="w-fit flex flex-row items-start justify-end cursor-pointer">
            <XMarkIcon className="text-white h-10 w-10" aria-hidden="true" onClick={() => setShowModal(false)} />
          </div>
        </div>
      </ReactModal>
      {/* <Dialog className="absolute top-[114px] left-0 w-screen h-screen overflow-scroll bg-black/80 " open={showModal} onClose={() => setShowModal(false)}>
        <div className="flex flex-col gap-10 justify-center my-auto pb-12 pt-3 px-12 border-l-[20px] border-logo bg-black w-[80%] h-[80%] rounded-md mx-auto">
          <div className="w-full flex flex-row items-start justify-end">
            <XMarkIcon className="text-white h-10 w-10" aria-hidden="true" onClick={() => setShowModal(false)} />
          </div>
          <div className="flex flex-col items-center justify-center h-full w-full">
            <Dialog.Panel className='h-full w-full flex flex-col justify-between gap-10 items-center'>
              <Dialog.Title className="text-white mx-auto text-[24px]">{title}</Dialog.Title>
              <ReactPlayer
                className='grow'
                controls='true'
                url={url}
                width="100%"
                height="100%"
              />

            </Dialog.Panel>
          </div>

        </div>
      </Dialog> */}
    </>
  )
}