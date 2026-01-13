import img from '../../assets/amanverma.png'
import { IoLocationOutline } from "react-icons/io5";
import { IoCodeSlashSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";

const Contact = () => {
  return (
    <section id='contact' className='bg-slate-50 py-16 lg:py-24 overflow-hidden'>
        <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
                <div className='hidden lg:flex justify-center items-center relative h-[400px]'>
                    <div className='absolute inset-0 opacity-[0.03]' 
                                style={{backgroundImage: "radial-gradient(#444 1px, transparent 1px)", backgroundSize: "24px 24px"}}></div>
                    <div className='relative bg-white w-72 rounded-2xl shadow-xl shadow-slate-200/60 overflow-hidden
                                    border border-slate-100 transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500'>

                            <div className='h-24 bg-gradient-to-r from-blue-500 to-indigo-600'></div>

                            <div className='flex justify-center -mt-12 mb-4'>
                                <div className='p-1.5 bg-white rounded-full'>
                                    <img src={img} alt="Aman Verma" className='w-24 h-24 rounded-full object-cover border border-slate-100 bg-slate-100' />
                                </div>

                            </div>

                            <div className='text-center px-6 pb-8'>
                                <h3 className='text-xl font-bold text-gray-800'>Aman Verma</h3>
                                <p className='text-sm text-blue-600 font-medium mb-4'>Web Developer</p>

                                <div className='space-y-2'>
                                    <div className='flex items-center gap-2 text-gray-500 text-sm justify-center bg-slate-50 py-2 rounded-lg'>
                                        <IoLocationOutline/>
                                        <span>Available for work</span>
                                    </div>

                                    <div className='flex items-center gap-2 text-gray-500 text-sm justify-center bg-slate-50 py-2 rounded-lg'>
                                        <IoCodeSlashSharp/>
                                        <span>Based in India</span>
                                    </div>

                                </div>
                            </div>

                    </div>

                    

                </div>

                <div className='text-center lg:text-left'>
                    <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6'>Let's Connect</h2>
                    <p className='text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 mb-8'>I'm always excited to discuss new projects and opportunities. Wheter you have a question or just want to say hi, feel free to reach out.</p>

                    <div className='flex flex-col pb-6 lg:pb-0 gap-4  max-w-md mx-auto lg:mx-0'>
                        <a href="mailto:amanverma171003@gmail.com" className='contact-card group flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100
                                 hover:-translate-y-1 text-gray-700 font-medium'>
                                    <MdOutlineMail />
                                    <span>amanverma171003@gmail.com</span>
                        </a>

                        <a href="https://www.linkedin.com/in/aman-verma-1a9b1b295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='contact-card group flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100
                                 hover:-translate-y-1 text-gray-700 font-medium'>
                                    <CiLinkedin />
                                    <span>LinkedIn Profile</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
