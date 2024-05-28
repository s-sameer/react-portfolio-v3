import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'
import { socialMedia } from '@/data/index'

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-10 h-screen flex flex-col justify-between" id="contact">
      {/* background grid */}
      {/* <div className="w-full absolute left-0 -bottom-60 min-h-96">
        <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-50 "/>
      </div> */}
      <div className='flex flex-col items-center justify-center flex-grow-[0.85]'>
        <h1 className='heading md:max-w-[45vw]'>
            Ready to take <span className='text-purple'>your projects</span> to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Feel free to reach out, and let&apos;s discuss how I can help you achieve your goals.
        </p>
        <a href="mailto:itsnotsameer@gmail.com">
            <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow/>}
                position='right'
            />
        </a>
      </div>
      <div className='flex mt-16 md:flex-row flex-col gap-2 justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright © {new Date().getFullYear()} Sameer</p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link} target='_blank'>
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer