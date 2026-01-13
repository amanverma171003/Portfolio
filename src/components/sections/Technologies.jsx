import React from 'react'
import { FaHtml5, FaJsSquare } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrGithub, GrMysql } from "react-icons/gr";
import { SiCloudinary } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRazorpay } from "react-icons/si";
import Icon from '../common/Icon';


const Technologies = () => {
  return (
    <section id='skills' className='pb-16 md:pb-24'>
        <div className='container mx-auto px-4'>
            <div className='text-center mb-12 md:mb-16'>
                <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800'>Technologies I Use</h2>
            </div>

            <div className='grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-6 md:gap-8 max-w-4xl mx-auto'>
                
                <Icon
                    icon={FaJava}
                    text={"JAVA"}
                ></Icon>
                <Icon
                    icon={FaHtml5}
                    text={"HTML"}
                ></Icon>
                <Icon
                    icon={FaCss3Alt}
                    text={"CSS"}
                ></Icon>
                <Icon
                    icon={FaJsSquare}
                    text={"JavaScript"}
                ></Icon>
                <Icon
                    icon={FaReact}
                    text={"React"}
                ></Icon>
                <Icon
                    icon={RiTailwindCssFill}
                    text={"TailwindCss"}
                ></Icon>
                <Icon
                    icon={FaNodeJs}
                    text={"Node.js"}
                ></Icon>
                <Icon
                    icon={SiExpress}
                    text={"Express"}
                ></Icon>
                <Icon
                    icon={SiMongodb}
                    text={"MongoDB"}
                ></Icon>
                <Icon
                    icon={GrMysql}
                    text={"MySQL"}
                ></Icon>
                <Icon
                    icon={SiCloudinary}
                    text={"Cloudinary"}
                ></Icon>
                <Icon
                    icon={SiRazorpay}
                    text={"Razorpay"}
                ></Icon>
                <Icon
                    icon={GrGithub}
                    text={"Github"}
                ></Icon>
                <Icon
                    icon={FaGitAlt}
                    text={"Git"}
                ></Icon>
            
            </div>
        </div>
    </section>
  )
}

export default Technologies

{/* <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:translate-y-2 '>
                        <span className='p-2'><FaHtml5 className='scale-[2]'/></span>
                    </div>

                    <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:translate-y-2 '>
                        <span className='p-2'><FaCss3Alt className='scale-[2]'/></span>
                    </div>

                    <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:translate-y-2 '>
                        <span className='p-2'><FaJsSquare className='scale-[2]'/></span>
                    </div>

                    <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:translate-y-2 '>
                        <span className='p-2'><FaReact className='scale-[2]'/></span>
                    </div>

                    <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:translate-y-2 '>
                        <span className='p-2'><FaNodeJs className='scale-[2]'/></span>
                    </div>

                    <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:translate-y-2 '>
                        <span className='p-2'><SiExpress className='scale-[2]'/></span>
                    </div>

                    <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:translate-y-2 '>
                        <span className='p-2'><SiMongodb className='scale-[2]'/></span>
                    </div>

                    <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:translate-y-2 '>
                        <span className='p-2'><GrMysql className='scale-[2]'/></span>
                    </div>
                    
                    <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:translate-y-2 '>
                        <span className='p-2'><SiCloudinary className='scale-[2]'/></span>
                    </div>

                    <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:translate-y-2 '>
                        <span className='p-2'><FaGitAlt className='scale-[2]'/></span>
                    </div>

                    <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:translate-y-2 '>
                        <span className='p-2'><GrGithub className='scale-[2]'/></span>
                    </div>

                    <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:translate-y-2 '>
                        <span className='p-2'><RiTailwindCssFill className='scale-[2]'/></span>
                    </div>

                    <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:translate-y-2 '>
                        <span className='p-2'><SiRazorpay className='scale-[2]'/></span>
                    </div> */}
