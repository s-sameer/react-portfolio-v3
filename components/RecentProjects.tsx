"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/3d-pin"
import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <div className='py-20' id="projects">
        <h1 className="heading pt-10">
            Some of my{" "}
            <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8">
            {projects.map(({id, title, des, img, iconLists, link, git}) => (
                <div key={id} className="sm:h-[36rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
                    <PinContainer title={title} href={link}>
                        <div className="relative flex items-center justify-center sm:w-[550px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh]">
                            {/* <div className="relative w-full h-full overflow-hidden lg:rounded-3xl" style={{ backgroundColor: "#13162D" }}>
                                <img src="/bg.png" alt="bg-img" />
                            </div> */}
                            <img src={img} alt={title} className="z-10 rounded-xl h-[90%] mb-4"/>
                        </div>
                        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-purple">
                            {title}
                        </h1>
                        <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                            {des}
                        </p>
                        <div className="flex items-center justify-between mt-7 mb-3">
                            <div className="flex items-center">
                                {iconLists.map((icon, index)=>(
                                    <div key={index} className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                    style={{
                                        transform: `translateX(-${5 * index + 2}px)`,
                                    }}
                                    >
                                        <img src={icon} alt="icon" className="p-2" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <a href={git} target="_blank">
                                    <p className="flex gap-1 lg:text-lg md:text-xs text-sm border border-purple/[0.4] px-4 py-1 rounded-full">
                                        Github
                                        <img src="/git.svg" alt="" />
                                    </p>
                                </a>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects