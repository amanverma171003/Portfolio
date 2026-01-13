import React from 'react'
import Card from '../common/Card'
import studyMantra from '../../assets/proj1.png'
import wanderlust from '../../assets/wanderlust.png'
import ventguru from '../../assets/ventguru.png'

const Projects = () => {
  return (
    <section id='projects' className='container mx-auto px-4 py-12 md:py-16 lg:py-24'>
        <div className='text-center mb-10 md:mb-16'>
            <h2 className='text-4xl lg:text-6xl sm:text-5xl font-bold text-gray-800'>My Projects</h2>
            <p className='pt-4'>Here are a few of my best projects that showcase my skills in action</p>
        </div>

        <div className='rounded-2xl lg:rounded-3xl overflow-hidden mb-10 lg:mb-16 px-6'>
            <div className='lg:flex mb-6 shadow-xl'>
                <div className='lg:w-1/2'>
                    <img src={studyMantra} alt='Study Mantra Project' className='w-full h-full object-cover' />
                </div>

                <div className='lg:w-1/2 p-6 md:p-8 lg:p-12'>
                    <h3 className='text-xl md:text-3xl font-bold text-gary-900 mb-4'>Study Mantra - Edtech Platform</h3>
                    <p className='text-gray-700 leading-relaxed mb-6 line-clamp-2 md:line-clamp-4'>Developed a full-stack MERN platform for an ed-tech client, featuring course purchases and student management with secure Razorpay payment integration.</p>

                    <div className='flex flex-wrap gap-2 mb-6'>
                        <span className='skill-pill'>MERN Stack</span>
                        <span className='skill-pill'>Razorpay API</span>
                        <span className='skill-pill'>Cloudinary</span>
                        <span className='skill-pill'>JWT Authentication</span>
                    </div>

                    <div className='flex items-center gap-4'>
                        <a href='' className='inline-flex items-center gap-2 font-semibold hover:underline' target='_blank'></a>
                    </div>
                </div>
            </div>

            <div className='bg-white grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 py-6 px-4'>

                <Card 
                    image={ventguru}
                    projectHeading={"Ventguru - Inventory Management webApp"} 
                    projPara={"Built a complete web platform with inventory management and a secure payment system."}
                    skill1={'MERN Stack'}
                    skill2={'Inventory management'}
                    link={"sdfg"}
                />

                <Card 
                    image={wanderlust}
                    projectHeading={"WanderLust - Hotel Listing platform"} 
                    projPara={"Built a complete web platform with inventory management and a secure payment system."}
                    skill1={'MERN Stack'}
                    skill2={'Mapbox'}
                    link={"xcvbn"}
                />

            </div>
        </div>
    </section>
  )
}

export default Projects
