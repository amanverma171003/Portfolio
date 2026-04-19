// import React from 'react'
// import aman from '../../assets/amanverma.png'
// import resume from '../../assets/Aman-verma.pdf'

// const Profile = () => {
//   return (
//     <section className='w-full lg:text-left lg:h-screen flex flex-col items-center justify-between lg:overflow-hidden pt-28 md:pt-20 pb-16
//                         lg:py-0 lg:pt-10 px-4'>

//         <h1 className='text-4xl md:text-6xl font-bold text-center py-6 md:py-8'>
//             Hello, I am<br/> Aman Verma
//         </h1>

//         <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-center w-full'>
//             <div className='lg:col-span-1 order-3 lg:order-1 md:px-16'>
//                 <div className='flex flex-col items-center lg:items-start space-y-6'>
//                     <div className='flex items-center mb-0'>
//                         <span className='h-2 w-2 rounded-full bg-green-500 mr-2'></span>
//                         <p className='text-gray'>Always being passionate</p>
//                     </div>

//                     <p className='text-xl text-gray max-w-sm font-medium text-center lg:text-left'>
//                         Software Developer with a passion for innovation and creating solution
//                     </p>

//                     <button 
//                         type='submit'
//                         className='font-medium py-2 px-8 rounded-lg bg-[#fafafa] hover:bg-blue-600 hover:text-white shadow-md shadow-black/10 backdrop-blur-xs
//                                     transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'
//                     >
//                         <a href={resume} download={resume}>My Resume</a>
//                     </button>
//                 </div>
//             </div>

//             <div className='lg:col-span-1 order-1 lg:order-2 flex flex-col items-center'>
//                 <div className='relative mt-8 w-64 h-64 md:w-96 md:h-96'>
//                     <div className='absolute inset-0 bg-gray-100 rounded-full scale-125 z-[-1]'></div>
//                     <img src={aman} alt='Aman Verma' className='relative z-10 w-full h-full object-cover md:scale-110 md:hover:scale-[1.25] transform transition-transform duration-300 ease-in-out' />
//                 </div>
//             </div>

//             <div className='lg:col-span-1 order-2 lg:order-3 flex justify-center lg:justify-end sm:py-4'>
//                 <div className='bg-white rounded-2xl p-4 shadow-lg w-full max-w-2xl mx-auto mt-[-25px] lg:max-w-xs lg:mt-auto'>
//                     <div className='flex items-center space-x-3'>
//                         <div className='w-10 h-10 bg-gray-200 rounded-full flex-shrink-0'>
//                             <img src={aman} alt='Aman Verma' className='w-full h-full object-cover rounded-full' />
//                         </div>

//                         <div>
//                             <p className='font-semibold text-gray'>Aman Verma</p>
//                             <p className='text-sm text-gray'>amanverma171003@gmail.com</p>
//                         </div>
//                     </div>

//                     <div className='mt-4 border-t border-gray pt-4'>
//                         <a href='mailto:amanverma171003@gmail.com' className='flex items-center justify-center w-full font-medium py-2 px-8 rounded-lg hover:bg-blue-600 hover:text-white
//                                                                               shadow-md shadow-black/10 backdrop-blur-xs transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'       
//                         >Send an Email</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Profile




import React, { useEffect, useRef, useState } from 'react'
import aman from '../../assets/amanverma.png'
import resume from '../../assets/Aman-verma.pdf'

const Profile = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [typedText, setTypedText] = useState('')
  const sectionRef = useRef(null)
  const fullText = 'Software Developer with a passion for innovation and creating solution'

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isLoaded) return
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 30)
    return () => clearInterval(timer)
  }, [isLoaded])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 20,
        y: (e.clientY / innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <style>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes pulseGreen {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
          50%       { box-shadow: 0 0 0 6px rgba(34,197,94,0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes rotateBorder {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33%       { transform: translateY(-6px) rotate(0.5deg); }
          66%       { transform: translateY(-3px) rotate(-0.5deg); }
        }
        @keyframes blobMove1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33%       { transform: translate(30px, -20px) scale(1.05); }
          66%       { transform: translate(-20px, 15px) scale(0.97); }
        }
        @keyframes blobMove2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33%       { transform: translate(-25px, 20px) scale(1.03); }
          66%       { transform: translate(20px, -15px) scale(0.98); }
        }
        @keyframes blobMove3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50%       { transform: translate(15px, 25px) scale(1.04); }
        }
        @keyframes gridFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes floatChip {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50%       { transform: translateY(-8px) rotate(2deg); }
        }
        @keyframes floatChip2 {
          0%, 100% { transform: translateY(0px) rotate(3deg); }
          50%       { transform: translateY(-10px) rotate(-1deg); }
        }
        @keyframes floatChip3 {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50%       { transform: translateY(-6px) rotate(2deg); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .anim-heading { animation: fadeSlideDown  0.8s 0.1s both cubic-bezier(0.22,1,0.36,1); }
        .anim-left    { animation: fadeSlideLeft  0.8s 0.3s both cubic-bezier(0.22,1,0.36,1); }
        .anim-image   { animation: scaleIn        0.9s 0.2s both cubic-bezier(0.22,1,0.36,1); }
        .anim-card    { animation: fadeSlideRight 0.8s 0.4s both cubic-bezier(0.22,1,0.36,1); }

        .float-image  { animation: float     5s ease-in-out infinite; }
        .card-float   { animation: cardFloat 6s ease-in-out infinite; }
        .pulse-dot    { animation: pulseGreen 2s ease-in-out infinite; }

        .blob1 { animation: blobMove1 10s ease-in-out infinite; }
        .blob2 { animation: blobMove2 13s ease-in-out infinite; }
        .blob3 { animation: blobMove3 9s  ease-in-out infinite; }

        .chip1 { animation: floatChip  4s ease-in-out infinite; }
        .chip2 { animation: floatChip2 5s ease-in-out infinite; }
        .chip3 { animation: floatChip3 6s ease-in-out infinite; }

        .spin-slow { animation: spinSlow 18s linear infinite; }

        .shimmer-text {
          background: linear-gradient(90deg, #111 30%, #6366f1 50%, #111 70%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .cursor-blink::after {
          content: '|';
          animation: blink 0.8s step-end infinite;
          color: #3b82f6;
          font-weight: 300;
        }

        .spin-border::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
          animation: rotateBorder 3s linear infinite;
          z-index: -1;
        }

        .btn-shine {
          position: relative;
          overflow: hidden;
        }
        .btn-shine::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.4s ease;
        }
        .btn-shine:hover::after { left: 150%; }

        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px) scale(1.01);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }

        .grid-bg {
          background-image:
            linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px);
          background-size: 48px 48px;
          animation: gridFadeIn 1.5s ease both;
        }
      `}</style>

      <section
        ref={sectionRef}
        className='relative w-full lg:text-left lg:h-screen flex flex-col items-center justify-between lg:overflow-hidden pt-28 md:pt-20 pb-16 lg:py-0 lg:pt-10 px-4'
      >

        {/* ── Background layer ── */}
        <div className='absolute inset-0 -z-10 overflow-hidden'>

          {/* Subtle grid */}
          <div className='grid-bg absolute inset-0' />

          {/* Gradient mesh blobs */}
          <div className='blob1 absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-30 pointer-events-none'
            style={{ background: 'radial-gradient(circle at 40% 40%, #bfdbfe, #e0e7ff 60%, transparent 80%)' }} />
          <div className='blob2 absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full opacity-25 pointer-events-none'
            style={{ background: 'radial-gradient(circle at 60% 60%, #ddd6fe, #fce7f3 60%, transparent 80%)' }} />
          <div className='blob3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full opacity-15 pointer-events-none'
            style={{ background: 'radial-gradient(circle, #a5f3fc, transparent 70%)' }} />

          {/* Spinning ring decoration */}
          <div className='spin-slow absolute top-16 right-16 w-40 h-40 rounded-full pointer-events-none opacity-20'
            style={{ border: '1.5px dashed #6366f1' }} />
          <div className='spin-slow absolute bottom-20 left-20 w-24 h-24 rounded-full pointer-events-none opacity-15'
            style={{ border: '1.5px dashed #ec4899', animationDirection: 'reverse' }} />

          {/* Corner dot accents */}
          <div className='absolute top-24 left-8 w-2 h-2 rounded-full bg-blue-400 opacity-40' />
          <div className='absolute top-32 left-14 w-1 h-1 rounded-full bg-purple-400 opacity-30' />
          <div className='absolute bottom-24 right-8 w-2 h-2 rounded-full bg-pink-400 opacity-40' />
          <div className='absolute bottom-16 right-16 w-1 h-1 rounded-full bg-indigo-400 opacity-30' />
        </div>

        {/* ── Floating skill chips ── */}
        <div className='absolute inset-0 -z-10 pointer-events-none hidden lg:block'>
          <div className='chip1 absolute top-32 left-8 bg-white/80 backdrop-blur-sm border border-blue-100 shadow-sm px-3 py-1.5 rounded-full text-xs font-semibold text-blue-500 flex items-center gap-1.5'>
            <span className='w-1.5 h-1.5 rounded-full bg-blue-400'/>React.js
          </div>
          <div className='chip2 absolute top-48 right-10 bg-white/80 backdrop-blur-sm border border-purple-100 shadow-sm px-3 py-1.5 rounded-full text-xs font-semibold text-purple-500 flex items-center gap-1.5'>
            <span className='w-1.5 h-1.5 rounded-full bg-purple-400'/>Node.js
          </div>
          <div className='chip3 absolute bottom-32 left-12 bg-white/80 backdrop-blur-sm border border-green-100 shadow-sm px-3 py-1.5 rounded-full text-xs font-semibold text-green-600 flex items-center gap-1.5'>
            <span className='w-1.5 h-1.5 rounded-full bg-green-400'/>MongoDB
          </div>
          <div className='chip1 absolute bottom-44 right-8 bg-white/80 backdrop-blur-sm border border-pink-100 shadow-sm px-3 py-1.5 rounded-full text-xs font-semibold text-pink-500 flex items-center gap-1.5'>
            <span className='w-1.5 h-1.5 rounded-full bg-pink-400'/>MERN Stack
          </div>
          <div className='chip2 absolute top-[55%] left-4 bg-white/80 backdrop-blur-sm border border-amber-100 shadow-sm px-3 py-1.5 rounded-full text-xs font-semibold text-amber-600 flex items-center gap-1.5'>
            <span className='w-1.5 h-1.5 rounded-full bg-amber-400'/>Express.js
          </div>
        </div>

        {/* ── Heading ── */}
        <h1 className='text-4xl md:text-6xl font-bold text-center py-6 md:py-8 anim-heading shimmer-text'>
          Hello, I am<br />Aman Verma
        </h1>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-center w-full'>

          {/* Left — text block */}
          <div className='lg:col-span-1 order-3 lg:order-1 md:px-16 anim-left'>
            <div className='flex flex-col items-center lg:items-start space-y-6'>

              <div className='flex items-center gap-2 px-3 py-1.5 bg-white/70 backdrop-blur-sm rounded-full border border-gray-100 shadow-sm'>
                <span className='h-2 w-2 rounded-full bg-green-500 pulse-dot'></span>
                <p className='text-gray-600 text-sm tracking-wide'>Always being passionate</p>
              </div>

              <p className='text-xl text-gray-700 max-w-sm font-medium text-center lg:text-left cursor-blink min-h-[3.5rem]'>
                {typedText}
              </p>

              {/* Subtle divider */}
              <div className='w-12 h-0.5 rounded-full hidden lg:block'
                style={{ background: 'linear-gradient(90deg,#3b82f6,#8b5cf6)' }} />

              <button className='btn-shine font-medium py-2 px-8 rounded-xl bg-white hover:bg-blue-600 hover:text-white shadow-md shadow-black/10 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'>
                <a href={resume} download={resume}>My Resume</a>
              </button>

            </div>
          </div>

          {/* Center — profile image */}
          <div className='lg:col-span-1 order-1 lg:order-2 flex flex-col items-center anim-image'>
            <div
              className='relative mt-8 w-64 h-64 md:w-96 md:h-96 spin-border'
              style={{
                transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <div className='absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full scale-125 z-[-1]'></div>
              <img
                src={aman}
                alt='Aman Verma'
                className='relative z-10 w-full h-full object-cover float-image md:scale-110 transform'
                style={{
                  transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px) scale(1.1)`,
                  transition: 'transform 0.08s ease-out',
                }}
              />
            </div>
          </div>

          {/* Right — contact card */}
          <div className='lg:col-span-1 order-2 lg:order-3 flex justify-center lg:justify-end sm:py-4 anim-card'>
            <div className='card-float card-hover bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/60 w-full max-w-2xl mx-auto mt-[-25px] lg:max-w-xs lg:mt-auto'>

              {/* Gradient top bar */}
              <div className='h-1 rounded-full mb-4'
                style={{ background: 'linear-gradient(90deg,#3b82f6,#8b5cf6,#ec4899)' }} />

              <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 rounded-full flex-shrink-0 overflow-hidden ring-2 ring-blue-100'>
                  <img src={aman} alt='Aman Verma' className='w-full h-full object-cover rounded-full' />
                </div>
                <div>
                  <p className='font-semibold text-gray-800'>Aman Verma</p>
                  <p className='text-sm text-gray-500'>amanverma171003@gmail.com</p>
                </div>
              </div>

              <div className='mt-4 border-t border-gray-100 pt-4'>
                
                <a  href='mailto:amanverma171003@gmail.com'
                  className='btn-shine flex items-center justify-center w-full font-medium py-2 px-8 rounded-xl hover:bg-blue-600 hover:text-white shadow-sm shadow-black/5 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'
                >
                  Send an Email
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Profile
