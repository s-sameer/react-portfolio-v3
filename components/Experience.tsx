import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const Experience = () => {
  return (
    <div className='pb-20' id="experience">
        <h1 className='heading'>
            Work
            <span className='text-purple ml-4'>Experience</span>
        </h1>
        <div className='w-full mt-20 grid lg:grid-cols-4 grid-cols-1 gap-10'>
            {workExperience.map((exp, index) => (
                <Button key={index} className='flex-1 text-white border-neutral-200 dark:border-slate-800' duration={Math.floor((Math.random()+0.4)*10000)}>
                    <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                        {/* <img src={exp.thumbnail} alt="card" className='lg:w-32 md:w-20 w-16'/> */}
                        <div className='lg:ms-5'>
                            <h1 className="text-start text-xl md:text-2xl font-bold">
                                {exp.title}
                            </h1>
                            <h2 className='text-start text-lg font-semibold'>
                                {exp.company}
                            </h2>
                            <p className="text-start text-white-100 mt-3 font-semibold">
                                {exp.desc}
                            </p>
                        </div>
                    </div>
                </Button>
            ))}

        </div>
    </div>
  )
}

export default Experience