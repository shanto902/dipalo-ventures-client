import React, { ReactNode } from 'react'
import { IconType } from 'react-icons/lib'

const ContactCard = ({mainText, subText, children } : {mainText: string, subText:string, children: ReactNode}) => {
  return (
    <div className="w-[420px] h-[236.33px] relative">
    <div className="w-[390px] h-[206.33px] left-[15px] top-[30px] absolute bg-white rounded-[10px] border border-gray-200">
      <div className="w-[132.36px] h-[25.33px] left-[41px] top-[55px] absolute text-neutral-800 text-lg font-bold  leading-relaxed">
        Email Address
      </div>
      <div className="w-[211px] left-[41px] top-[93px] absolute text-zinc-900 text-opacity-75 text-base font-semibold ">
        Email (General): info@dipaloventures.com
      </div>
      <div className="w-[281px] left-[41px] top-[142px] absolute text-zinc-900 text-opacity-75 text-base font-semibold ">
        Deals (Startups): deals@dipaloventures.com
      </div>
    </div>
    <div className="w-[78px] h-[78px] left-[47px] top-[-13px] flex justify-center items-center absolute bg-white rounded-[78px] border border-gray-200">
     {children}
    </div>
  </div>
  )
}

export default ContactCard