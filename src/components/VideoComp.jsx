import { useState } from "react";
import ReactPlayer from "react-player";
import { Dialog } from '@headlessui/react'



export default function VideoComp({ title, url, img_src, preview_src }) {

  const [isPlaying, setIsPlaying] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="m-4 flex flex-col justify-center gap-3 items-center">
        <div className="font-poppins font-extralight text-[20px] text-black">{title}</div>
        <div className="relative h-[300px] w-[500px]">
          <div
            className="absolute top-0 left-0 shadow-xl border-y-[10px] border-black h-[300px] w-[500px]"
            onMouseEnter={() => setIsPlaying(true)}
            onMouseLeave={() => setIsPlaying(false)}
            onClick={() => setShowModal(true)}>
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
      </div>
      <Dialog className="absolute top-[200px] left-[200px] bg-black " open={showModal} onClose={() => setShowModal(false)}>
        <Dialog.Panel>
          <Dialog.Title className="text-white">Deactivate account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <button className="bg-white" onClick={() => setShowModal(false)}>Deactivate</button>
          <button className="bg-white" onClick={() => setShowModal(false)}>Cancel</button>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}