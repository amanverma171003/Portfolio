import { FaCode } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
import { GrTechnology } from "react-icons/gr";
import { GoTrophy } from "react-icons/go";

const About = () => {
  return (
    <section id='about' className='container mx-auto px-4'>
        <div className='bg-gray-50 rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-inner'>
            
            <div className='max-w-4xl mx-auto text-center'>
                <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 md:mb-8'>About Me</h2>
                <p className='text-base sm:text-lg text-gray-700 leading-relaxed mb-10 sm:mb-12 md:mb-16'>I'm a Full Stack Developer who builds fast, scalable web applicatiions, specializing in the MERN Stack.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 text-left'>
                <div className='flex items-start gap-4'>
                    <div className='flex-shrink-0'>
                        <FaCode />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Versatile Enterprise</h3>
                        <p className="text-gary-600">Full-stack proffieciency with React, Node.js and databases like MongoDb & MySQL.</p>
                    </div>
                </div>
                
                <div className='flex items-start gap-4'>
                    <div className='flex-shrink-0'>
                        <CiCreditCard1 />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">E-commerce and Payments</h3>
                        <p className="text-gary-600">Skilled in building e-commerce platforms with secure payment integrations like Razorpay.</p>
                    </div>
                </div>

                <div className='flex items-start gap-4'>
                    <div className='flex-shrink-0'>
                        <GrTechnology />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Modern solutions</h3>
                        <p className="text-gary-600">Focused on cutting-edge solutions, with current projects involving their implementation.</p>
                    </div>
                </div>

                <div className='flex items-start gap-4'>
                    <div className='flex-shrink-0'>
                        <GoTrophy />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Community Leadership</h3>
                        <p className="text-gary-600">Hackathon Organizer and competitor with exprience leading developer teams.</p>
                    </div>
                </div>

            </div>

        </div>
    </section>
  )
}

export default About
