'use client'
import {motion} from "framer-motion"
import { IconEnvelope, IconFileContentFill24, IconGithub, IconLaptop, IconLinkedin } from "../assets/icons"
import Link from "next/link"
import { PortfolioAnalytics } from "../components/PortfolioAnalytics";
import profimg from "../assets/profimg.jpg"


const socials = [
  {
    name: "Github",
    link: "https://github.com/Rthuro",
    icon: IconGithub
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/ruth-oribello/",
    icon: IconLinkedin
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ruth.codes/",
    icon: '',
    img: "https://api.iconify.design/thesvg-color:instagram.svg"
  },
  {
    name: "TikTok",
    link: "https://www.tiktok.com/@ruth.codes/",
    icon: '',
    img: "https://api.iconify.design/thesvg-color:tiktok-dark.svg"
  }
]

export function HomeHeader ({id}: {id: string}) {
    return <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
           className="w-[90%] lg:w-[55%] mx-auto flex flex-col gap-6 scroll-mt-24" id={id}>
            <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col gap-2">
              <div className="flex flex-col lg:flex-row gap-3 items-center">
                <img src={profimg.src} alt=""
                className="w-42 rounded-lg object-cover" />
                <div className="relative flex flex-col items-center lg:items-start gap-2">
      
                  <p className=" font-bold text-xl md:text-3xl flex items-center gap-2">
                    <span className="relative inline-flex items-center">
                      {/* Tooltip bubble */}
                      <motion.span
                        className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium bg-zinc-800 text-zinc-300 px-2 py-1 rounded-md border border-zinc-700 pointer-events-none"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: [0, 1, 1, 0], y: [4, 0, 0, 4] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, times: [0, 0.1, 0.8, 1], ease: 'easeOut' }}
                      >
                        view my gear?
                      </motion.span>
                      {/* Vibrating icon */}
                      <motion.span
                        className="inline-flex"
                        animate={{ rotate: [0, -8, 8, -8, 8, -4, 4, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 6 }}
                      >
                        <Link href="/gear" className="hover:scale-[1.1] transition-all duration-200 ease-in-out">
                          <IconLaptop size="28px" color="#ffff"  />
                        </Link>
                      </motion.span>
                    </span>
                  Ruthiemy Oribello
                </p>
                  <p className=" font-medium font-mono text-zinc-200 text-sm md:text-md">
                    Full Stack Developer | Web Designer | UI/UX
                  </p>
                  <p className="text-xs md:text-sm text-zinc-400 text-center lg:text-left">I'm a Full Stack Developer with 2+ years of experience in web development. Love designing minimal and modern user interfaces. Currently interested in AI integration, Automation and AWS. Soon i'll dig dive into mobile development and design engineering.
              </p>
                </div>
                
              </div>
              
              
              
            </motion.div>
            <div className="grid grid-cols-2 gap-2 border-y border-zinc-900 py-3 ">
              <a href="/resume.pdf" target="_blank" className="cursor-pointer py-2 bg-zinc-50 text-zinc-800 font-medium flex items-center justify-center gap-1 rounded-lg  text-sm outline outline-zinc-600 border ">            
              <IconFileContentFill24 size="16px" color="#ffb900" />
                My resume
              </a>
              <Link href="/contact?emailType=general" className="py-3 bg-gradient-to-t from-zinc-800 to-zinc-400 text-white font-medium flex items-center justify-center gap-1 rounded-lg hover:brightness-110 transition-all duration-300 text-sm outline outline-zinc-600">
                <IconEnvelope size="16px" />
                Email me
              </Link>
              <div className="border-t border-zinc-900 w-full col-span-2 h-0.5">

              </div>

              {socials.map((social, index) => (
                <motion.div
                key={index} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.7, ease: 'easeOut' }}
                >
                <Link 
                href={social.link} 
                target="_blank" 
                className="text-sm text-zinc-400 py-3 text-center border border-zinc-800 rounded-lg font-mono border-dashed flex items-center justify-center gap-1">
                  {social.img ? <img src={social.img} className="size-4" /> : <social.icon size="16px" color="#ffb900" />}
                  {social.name}
                </Link>
                </motion.div>
              ))}
            </div>
            <motion.div className="grid grid-cols-2 w-full gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration:0.4, ease: 'easeOut' }}
              >
                <PortfolioAnalytics type='visitors'/>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4, ease: 'easeOut' }}
              >
                <PortfolioAnalytics type='current-visitors'/>
              </motion.div>
            </motion.div>
        </motion.section>
} 