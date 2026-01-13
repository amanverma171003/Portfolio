import React from 'react'
import aman from '../../assets/amanverma.png'
import resume from '../../assets/Aman-verma.pdf'

const Profile = () => {
  return (
    <section className='w-full lg:text-left lg:h-screen flex flex-col items-center justify-between lg:overflow-hidden pt-30 pb-16
                        lg:py-0 lg:pt-12 px-4 sm:mt-12'>

        <h1 className='text-4xl md:text-6xl font-bold text-center md:py-8 sm:py-20 py-32'>
            Hello, I am<br/> Aman Verma
        </h1>


        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-center w-full'>
            <div className='lg:col-span-1 order-3 lg:order-1 md:px-16'>
                <div className='flex flex-col items-center lg:items-start space-y-6'>
                    <div className='flex items-center mb-0'>
                        <span className='h-2 w-2 rounded-full bg-green-500 mr-2'></span>
                        <p className='text-gray'>Always being passionate</p>
                    </div>

                    <p className='text-xl text-gray max-w-sm font-medium text-center lg:text-left'>
                        Software Developer with a passion for innovation and creating solution
                    </p>

                    <button 
                        type='submit'
                        className='font-mediuum py-2 px-8 rounded-lg bg-[#fafafa]  hover:bg-blue-600 hover:text-white shadow-md shadow-black/10 backdrop-blur-xs
                                    transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'
                    >
                        <a href={resume} download={resume}>My Resume</a>
                    </button>
                </div>
            </div>

            <div className='lg:col-span-1 order-1 lg:order-2 flex flex-col items-center '>
                <div className='relative mt-8 w-64 h-64 md:w-96 md:h-96 sm:'>
                    <div className='absolute inset-0 bg-gray-100 rounded-full scale-125 z-[-1]'></div>
                    <img src={aman} alt='Aman Verma' className='relative z-10 w-full h-full object-cover md:scale-110 md:hover:scale-[1.25] transform transition-transform duration-300 ease-in-out' />
                </div>
            </div>

            <div className='lg:col-span-1 order-2 lg:order-3 flex justify-center lg:justify-end sm:py-4'>
                <div className='bg-white rounded-2xl p-4 shadow-lg w-full max-w-2xl mx-auto mt-[-25px] lg:max-w-xs lg:mt-auto'>
                    <div className='flex items-center space-x-3'>
                        <div className='w-10 h-10 bg-gray-200 rounded-full flex-shrink-0'>
                            <img src={aman} alt='Aman Verma' className='w-full h-full object-cover rounded-full' />
                        </div>

                        <div>
                            <p className='font-semibold text-gray'>Aman Verma</p>
                            <p className='text-sm text-gray'>amanverma171003@gmail.com</p>
                        </div>
                    </div>

                    <div className='mt-4 border-t border-gray pt-4'>
                        <a href='mailto:amanverma171003@gmail.com' className='flex items-center justify-center w-full font-medium py-2 px-8 rounded-lg hover:bg-blue-600 hover:text-white
                                                                              shadow-md shadow-black/10 backdrop-blur-xs transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'       
                        > Send an Email</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profile
