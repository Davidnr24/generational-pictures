import {contact} from "../constants/constants"


export default function ContactCard(){

  return (
    <div className="py-10 px-4 m-2 rounded-md bg-black grow md:w-[400px] w-[350px] flex flex-col items-start justify-start text-white font-zenKaku">
      <div className="w-full text-[24px] font-semibold">Contact Information </div>

      <div className="w-full text-[16px] mt-3 font-normal">Phone Number</div>
      <a className="no-underline w-full text-[14px] mt-1 font-bold" href={`tel:${contact.phoneInt}`}><span className=" text-white decoration-logo underline underline-offset-4">{contact.phone}</span></a>

      <div className="w-full text-[16px] mt-3 font-normal">Email</div>
      <a  href={`mailto:${contact.email}`} className="no-underline w-full text-[14px] mt-1 font-bold"><span className=" text-white decoration-logo underline-offset-4 underline">{contact.email}</span></a>

      <div className=""></div>
    </div>


  )
}
