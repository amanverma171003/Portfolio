// import img from '../../assets/amanverma.png'
// import { IoLocationOutline } from "react-icons/io5";
// import { IoCodeSlashSharp } from "react-icons/io5";
// import { MdOutlineMail } from "react-icons/md";
// import { CiLinkedin } from "react-icons/ci";

// const Contact = () => {
//   return (
//     <section id='contact' className='bg-slate-50 py-16 lg:py-24 overflow-hidden'>
//         <div className='container mx-auto px-4'>
//             <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
//                 <div className='hidden lg:flex justify-center items-center relative h-[400px]'>
//                     <div className='absolute inset-0 opacity-[0.03]' 
//                                 style={{backgroundImage: "radial-gradient(#444 1px, transparent 1px)", backgroundSize: "24px 24px"}}></div>
//                     <div className='relative bg-white w-72 rounded-2xl shadow-xl shadow-slate-200/60 overflow-hidden
//                                     border border-slate-100 transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500'>

//                             <div className='h-24 bg-gradient-to-r from-blue-500 to-indigo-600'></div>

//                             <div className='flex justify-center -mt-12 mb-4'>
//                                 <div className='p-1.5 bg-white rounded-full'>
//                                     <img src={img} alt="Aman Verma" className='w-24 h-24 rounded-full object-cover border border-slate-100 bg-slate-100' />
//                                 </div>

//                             </div>

//                             <div className='text-center px-6 pb-8'>
//                                 <h3 className='text-xl font-bold text-gray-800'>Aman Verma</h3>
//                                 <p className='text-sm text-blue-600 font-medium mb-4'>Web Developer</p>

//                                 <div className='space-y-2'>
//                                     <div className='flex items-center gap-2 text-gray-500 text-sm justify-center bg-slate-50 py-2 rounded-lg'>
//                                         <IoLocationOutline/>
//                                         <span>Available for work</span>
//                                     </div>

//                                     <div className='flex items-center gap-2 text-gray-500 text-sm justify-center bg-slate-50 py-2 rounded-lg'>
//                                         <IoCodeSlashSharp/>
//                                         <span>Based in India</span>
//                                     </div>

//                                 </div>
//                             </div>

//                     </div>

                    

//                 </div>

//                 <div className='text-center lg:text-left'>
//                     <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6'>Let's Connect</h2>
//                     <p className='text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 mb-8'>I'm always excited to discuss new projects and opportunities. Wheter you have a question or just want to say hi, feel free to reach out.</p>

//                     <div className='flex flex-col pb-6 lg:pb-0 gap-4  max-w-md mx-auto lg:mx-0'>
//                         <a href="mailto:amanverma171003@gmail.com" className='contact-card group flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100
//                                  hover:-translate-y-1 text-gray-700 font-medium'>
//                                     <MdOutlineMail />
//                                     <span>amanverma171003@gmail.com</span>
//                         </a>

//                         <a href="https://www.linkedin.com/in/aman-verma-1a9b1b295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='contact-card group flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100
//                                  hover:-translate-y-1 text-gray-700 font-medium'>
//                                     <CiLinkedin />
//                                     <span>LinkedIn Profile</span>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Contact




import { useEffect, useRef, useState } from "react";
import img from '../../assets/amanverma.png'
import { IoLocationOutline, IoCodeSlashSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";

const useVisible = (threshold = 0.15) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

const Contact = () => {
  const [sectionRef, visible] = useVisible(0.1);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 16,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 16,
      });
    };
    const el = cardRef.current;
    if (el) el.addEventListener('mousemove', handleMouse);
    return () => { if (el) el.removeEventListener('mousemove', handleMouse); };
  }, []);

  const links = [
    {
      id: 'email',
      href: 'mailto:amanverma171003@gmail.com',
      icon: <MdOutlineMail size={20} />,
      label: 'amanverma171003@gmail.com',
      accent: '#3b82f6',
      accentBg: '#eff6ff',
    },
    {
      id: 'linkedin',
      href: 'https://www.linkedin.com/in/aman-verma-1a9b1b295',
      icon: <CiLinkedin size={20} />,
      label: 'LinkedIn Profile',
      accent: '#0077b5',
      accentBg: '#e7f3fb',
    },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes drawLine {
          from { width: 0; }
          to   { width: 4rem; }
        }
        @keyframes shimmerBadge {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes floatCard {
          0%, 100% { transform: rotate(-3deg) translateY(0px); }
          50%       { transform: rotate(-3deg) translateY(-8px); }
        }
        @keyframes floatCardHover {
          0%, 100% { transform: rotate(0deg) translateY(0px); }
          50%       { transform: rotate(0deg) translateY(-6px); }
        }
        @keyframes orbitDot {
          from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }
        @keyframes orbitDot2 {
          from { transform: rotate(180deg) translateX(90px) rotate(-180deg); }
          to   { transform: rotate(540deg) translateX(90px) rotate(-540deg); }
        }
        @keyframes ripple {
          0%   { transform: scale(0.8); opacity: 0.6; }
          100% { transform: scale(2);   opacity: 0; }
        }
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .contact-visible .anim-left  { animation: fadeLeft  0.8s 0.1s both cubic-bezier(0.22,1,0.36,1); }
        .contact-visible .anim-right { animation: fadeRight 0.8s 0.25s both cubic-bezier(0.22,1,0.36,1); }
        .contact-visible .anim-h     { animation: fadeUp   0.7s 0.15s both cubic-bezier(0.22,1,0.36,1); }
        .contact-visible .anim-p     { animation: fadeUp   0.7s 0.28s both cubic-bezier(0.22,1,0.36,1); }
        .contact-visible .anim-c0    { animation: fadeUp   0.7s 0.38s both cubic-bezier(0.22,1,0.36,1); }
        .contact-visible .anim-c1    { animation: fadeUp   0.7s 0.50s both cubic-bezier(0.22,1,0.36,1); }
        .contact-visible .anim-badge { animation: fadeUp   0.7s 0.05s both cubic-bezier(0.22,1,0.36,1); }
        .contact-visible .anim-line  { animation: drawLine 0.6s 0.3s  both ease-out; }

        .profile-card-float  { animation: floatCard 5s ease-in-out infinite; }
        .profile-card-float:hover { animation: floatCardHover 3s ease-in-out infinite; }

        .orbit-dot-1 { animation: orbitDot  8s linear infinite; }
        .orbit-dot-2 { animation: orbitDot2 6s linear infinite; }

        .animated-gradient {
          background: linear-gradient(270deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
          background-size: 300% 300%;
          animation: gradientShift 5s ease infinite;
        }

        .badge-shimmer {
          background: linear-gradient(90deg, #e0e7ff 30%, #c7d2fe 50%, #e0e7ff 70%);
          background-size: 200% auto;
          animation: shimmerBadge 2.5s linear infinite;
        }

        .contact-link {
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.3s ease,
                      border-color 0.3s ease;
        }
        .contact-link:hover { transform: translateY(-4px) scale(1.01); }

        .ripple-ring {
          animation: ripple 2s ease-out infinite;
        }
      `}</style>

      <section
        id="contact"
        ref={sectionRef}
        className={`bg-slate-50 py-16 lg:py-24 overflow-hidden ${visible ? 'contact-visible' : ''}`}
      >
        <div className="container mx-auto px-4">

          {/* Section header */}
          <div className="text-center mb-14 lg:hidden">
            <span className="badge-shimmer inline-block text-xs font-semibold tracking-widest uppercase text-indigo-600 px-4 py-1 rounded-full mb-3 anim-badge">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3 anim-h">Let's Connect</h2>
            <div className="flex justify-center mb-3">
              <div className="h-1 rounded-full anim-line"
                style={{ background: 'linear-gradient(90deg,#3b82f6,#8b5cf6,#ec4899)', width: 0 }} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT — profile card */}
            <div className="hidden lg:flex justify-center items-center relative h-[460px] anim-left">

              {/* Dot grid bg */}
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(#444 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

              {/* Orbiting dots */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 pointer-events-none">
                <div className="orbit-dot-1 absolute w-3 h-3 rounded-full"
                  style={{ background: '#3b82f6', boxShadow: '0 0 8px #3b82f6' }} />
                <div className="orbit-dot-2 absolute w-2 h-2 rounded-full"
                  style={{ background: '#ec4899', boxShadow: '0 0 6px #ec4899' }} />
              </div>

              {/* Ripple rings behind card */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-blue-200 opacity-40 ripple-ring" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-purple-200 opacity-30 ripple-ring"
                style={{ animationDelay: '0.8s' }} />

              {/* Profile card */}
              <div
                ref={cardRef}
                className="profile-card-float relative bg-white w-72 rounded-2xl shadow-2xl shadow-slate-200/80 overflow-hidden border border-slate-100"
                style={{
                  transition: 'transform 0.15s ease-out',
                  transform: `rotate(-3deg) rotateX(${-mousePos.y * 0.3}deg) rotateY(${mousePos.x * 0.3}deg)`,
                }}
              >
                {/* Animated gradient header */}
                <div className="h-24 animated-gradient" />

                {/* Avatar */}
                <div className="flex justify-center -mt-12 mb-4">
                  <div className="relative p-1.5 bg-white rounded-full shadow-md">
                    <img
                      src={img}
                      alt="Aman Verma"
                      className="w-24 h-24 rounded-full object-cover border-2 border-white"
                    />
                    {/* Online dot */}
                    <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 border-2 border-white rounded-full"
                      style={{ animation: 'ripple 2s ease-out infinite' }} />
                  </div>
                </div>

                <div className="text-center px-6 pb-8">
                  <h3 className="text-xl font-bold text-gray-900">Aman Verma</h3>
                  <p className="text-sm font-semibold mb-5"
                    style={{ background: 'linear-gradient(90deg,#3b82f6,#8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Full Stack Developer
                  </p>

                  <div className="space-y-2">
                    {[
                      { icon: <IoLocationOutline size={14} />, text: 'Available for work', color: '#10b981' },
                      { icon: <IoCodeSlashSharp size={14} />, text: 'Based in India',      color: '#3b82f6' },
                    ].map((row, i) => (
                      <div key={i}
                        className="flex items-center gap-2 text-gray-500 text-sm justify-center py-2 rounded-xl"
                        style={{ background: '#f8fafc' }}>
                        <span style={{ color: row.color }}>{row.icon}</span>
                        <span>{row.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — text + links */}
            <div className="text-center lg:text-left anim-right">

              {/* Desktop header */}
              <div className="hidden lg:block mb-2">
                <span className="badge-shimmer inline-block text-xs font-semibold tracking-widest uppercase text-indigo-600 px-4 py-1 rounded-full mb-4 anim-badge">
                  Get In Touch
                </span>
              </div>

              <h2 className="hidden lg:block text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 anim-h">
                Let's Connect
              </h2>

              <div className="hidden lg:flex justify-center lg:justify-start mb-6">
                <div className="h-1 rounded-full anim-line"
                  style={{ background: 'linear-gradient(90deg,#3b82f6,#8b5cf6,#ec4899)', width: 0 }} />
              </div>

              <p className="text-lg text-gray-500 max-w-lg mx-auto lg:mx-0 mb-10 anim-p leading-relaxed">
                I'm always excited to discuss new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out.
              </p>

              <div className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0">
                {links.map((link, i) => (
                  
                    <a key={link.id}
                    href={link.href}
                    target={link.id === 'linkedin' ? '_blank' : undefined}
                    rel="noreferrer"
                    className={`contact-link anim-c${i} group flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm`}
                    style={{ '--accent': link.accent }}
                    onMouseEnter={() => setHoveredCard(link.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Icon box */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        background: hoveredCard === link.id ? link.accent : link.accentBg,
                        color:      hoveredCard === link.id ? '#fff' : link.accent,
                        transform:  hoveredCard === link.id ? 'scale(1.1) rotate(-8deg)' : 'scale(1)',
                      }}
                    >
                      {link.icon}
                    </div>

                    <span
                      className="font-semibold text-sm transition-colors duration-300"
                      style={{ color: hoveredCard === link.id ? link.accent : '#374151' }}
                    >
                      {link.label}
                    </span>

                    {/* Arrow */}
                    <svg
                      className="ml-auto transition-all duration-300"
                      style={{
                        color: link.accent,
                        opacity: hoveredCard === link.id ? 1 : 0,
                        transform: hoveredCard === link.id ? 'translateX(0)' : 'translateX(-8px)',
                      }}
                      width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </a>
                ))}
              </div>

              {/* Availability badge */}
              <div
                className="inline-flex items-center gap-2 mt-8 px-4 py-2 rounded-full text-sm font-semibold anim-p"
                style={{ background: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0' }}
              >
                <span className="w-2 h-2 bg-green-400 rounded-full"
                  style={{ animation: 'ripple 2s ease-out infinite' }} />
                Open to new opportunities
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;