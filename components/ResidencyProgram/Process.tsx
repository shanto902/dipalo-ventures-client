import React from 'react'
import PaddingContainer from '../Layout/PaddingContainer'
import { processData } from './const'
import ProcessCard from '../common/Cards/ProcessCard'

const Process = () => {
  return (
    <div className=' pb-5 pt-20 bg-orange-50' ><PaddingContainer >
          <h2 className=' text-center text-5xl
font-bold text-dipalo underline underline-offset-[15px] decoration-dipalo '>PROCESS</h2>
<p className=' mt-10 text-center text-zinc-900 text-xl leading-loose font-semibold'>
The Dipalo Ventures Residency is our technical diligence program to identify product design and engineering gaps. We conduct the technical diligence prior to the initial investment.
</p>

<p className="text-center text-dipalo text-2xl font-semibold leading-loose">In the future, the Residency will incorporate two additional phases:</p>

<p className=" text-center text-zinc-900 text-xl font-semibold leading-loose">* the Residency Audit (Phase 1) as a valuable gap analysis from which Founders choose topics to solve during Phase 2. <br/> * With Phase 2, the program provides technical evaluations, workshops, mentorship, and specific design and engineering support. It includes access to contract manufacturing options, cost analysis, assistance refining the startup’s go-to-market, financial planning, and fundraising strategies.</p>

<div className=' grid grid-cols-3 gap-x-5 gap-y-10 my-10'>
    {
        processData.map((card)=><ProcessCard key={card.id} id={card.id} text={card.text} image={card.image} />)
    }
</div>
</PaddingContainer></div>
  )
}

export default Process