import React from 'react'

const AboutSection = () => {
  return (
    <section>
      <div className="container flex  pt-20">
        <div className="select-none left w-1/2 bg-[#E5281A] flex justify-center items-center whitespace-wrap uppercase font-black text-[7rem] leading-25 text-[#C32216]">run <br /> free</div>
        <div className="right uppercase w-1/2 flex flex-col gap-6 bg-[#1A1A1A] p-15">
            <p className='tracking-[7px] text-[#888888] text-lg'>technology</p>
            <div className="text-6xl mt-3">
                <h3 className='font-black'>zero limits.</h3>
                <h3 className='font-black'>pure motion.</h3>
            </div>

            <p className='text-[#888888] normal-case'>Our ReactX foam technology delivers a springy, energized ride that adapts to your pace — whether you're pushing a 5K or chasing a marathon PB.</p>
            <button className='bg-[#E5281A] font-bold uppercase w-full py-3 tracking-widest text-sm hover:cursor-pointer hover:bg-[#e91708] transition-colors duration-200'>explore performance</button>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
