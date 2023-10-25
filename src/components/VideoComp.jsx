import { useState } from "react";
import ReactPlayer from "react-player";
//import { Dialog } from '@headlessui/react'
import { XMarkIcon } from "@heroicons/react/24/outline";
import ReactModal from "react-modal";



export default function VideoComp({ title, url, img_src, preview_src }) {

  const [isPlaying, setIsPlaying] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="m-4 flex flex-col justify-center gap-3 items-center">
        <div className="font-zenKaku font-extralight text-[20px] text-black">{title}</div>
        <div className="relative h-[300px] w-[500px]">
          <div
            className=" shadow-xl border-y-[10px] border-black h-[300px] w-[500px]">
            <ReactPlayer
              url={url}
              loop
              muted
              playing={isPlaying}
              width="100%"
              height="100%"
            />
          </div>
          <div className="absolute top-0 left-0 z-2 bg-transparent w-[500px] h-[300px] cursor-pointer"
            onMouseEnter={() => setIsPlaying(true)}
            onMouseLeave={() => setIsPlaying(false)}
            onClick={() => setShowModal(true)}
          />


        </div>
      </div>
      <ReactModal
        shouldFocusAfterRender={false}
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        className='bg-black w-[80%] h-[80%] mx-auto mt-[120px] border-l-[20px] border-logo rounded-md '
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
        <div className="flex flex-row item justify-center my-auto pt-4 pr-4 pl-10 w-full h-full">
          <div className="flex flex-col items-center justify-center h-full pt-8 w-full">
            <h1 className="text-white mx-auto text-[24px]">{title}</h1>
            <ReactPlayer
              className='grow'
              controls='true'
              url={url}
              width="100%"
              height="100%"
            />
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