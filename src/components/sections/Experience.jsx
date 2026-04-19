// import { PiCertificateLight } from "react-icons/pi";
// import { RiCheckboxCircleLine } from "react-icons/ri";

// const Experience = () => {
//   return (
//     <section id="experience" className="bg-gray-50 py-16 md:py-24">
//       <div className="container mx-auto px-4">

//         {/* Heading */}
//         <div className="text-center mb-12 md:mb-16">
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800">
//             My Professional Journey
//           </h2>
//           <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
//             Tracing my path through the roles that have shaped my skills and expertise.
//           </p>
//         </div>

//         {/* Timeline Wrapper */}
//         <div className="relative max-w-5xl mx-auto">

//           {/* Vertical Line */}
//           <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 w-[2px] h-full bg-gray-300" />

//           <div className="flex flex-col gap-16">

//             {/* ITEM 1 */}
//             <div className="relative flex items-center md:justify-normal group md:odd:flex-row-reverse">

//               {/* Icon */}
//               <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 hover:bg-green-300 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center z-10">
//                 <a href="https://drive.google.com/file/d/1nClaErZGKCtR6FM2RtzTb71ptjw54Hup/view?usp=sharing"><PiCertificateLight /> </a>
//               </div>

//               {/* Card */}
//               <div className="bg-white p-6 rounded-2xl shadow-lg w-[85%] md:w-[45%] ml-auto md:ml-0 md:group-odd:mr-auto md:group-even:ml-auto">
//                 <h3 className="text-xl font-bold hover:text-blue-400 text-gray-900"><a href="https://drive.google.com/file/d/1nClaErZGKCtR6FM2RtzTb71ptjw54Hup/view?usp=sharing">DELTA - Full Stack Development</a></h3>
//                 <p className="font-medium text-gray-700 mb-1">Apna College</p>
//                 <p className="text-sm text-gray-500 mb-3">November 2024 - April 2025</p>

//                 <ul className="space-y-2">
//                   <li className="flex items-start gap-2 text-gray-600">
//                     <RiCheckboxCircleLine className="mt-1" />
//                     Developed and maintained several full-stack web applications.
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* ITEM 2 */}
//             <div className="relative flex items-center md:justify-normal group md:odd:flex-row-reverse">

//               <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 bg-black hover:bg-green-300 text-white w-10 h-10 rounded-full flex items-center justify-center z-10">
//                 <a href="https://drive.google.com/file/d/16-xHTR1amMpLpoklDgy4BITymUDFO8H9/view?usp=sharing"><PiCertificateLight /></a>
//               </div>

//               <div className="bg-white p-6 rounded-2xl shadow-lg w-[85%] md:w-[45%] ml-auto md:ml-0 md:group-odd:mr-auto md:group-even:ml-auto">
//                 <h3 className="text-xl font-bold text-gray-900 hover:text-blue-400"><a href="https://drive.google.com/file/d/16-xHTR1amMpLpoklDgy4BITymUDFO8H9/view?usp=sharing">DATACOM - JOB Simulation</a></h3>
//                 <p className="font-medium text-gray-700 mb-1">Forage</p>
//                 <p className="text-sm text-gray-500 mb-3">JULY 2025</p>

//                 <ul className="space-y-2">
//                   <li className="flex items-start gap-2 text-gray-600">
//                     <RiCheckboxCircleLine className="mt-1" />
//                     Helped finding and fixing bugs in a real-life production environment.
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* ITEM 3 */}
//             <div className="relative flex items-center md:justify-normal group md:odd:flex-row-reverse">

//               <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 bg-black hover:bg-green-300 text-white w-10 h-10 rounded-full flex items-center justify-center z-10">
//                 <a href="https://drive.google.com/file/d/1YTWwjFjIHgBKv4yNb0-tP4FpLW6oCvpZ/view?usp=sharing"><PiCertificateLight /> </a>
//               </div>

//               <div className="bg-white p-6 rounded-2xl shadow-lg w-[85%] md:w-[45%] ml-auto md:ml-0 md:group-odd:mr-auto md:group-even:ml-auto">
//                 <h3 className="text-xl font-bold text-gray-900 hover:text-blue-400"> <a href="https://drive.google.com/file/d/1YTWwjFjIHgBKv4yNb0-tP4FpLW6oCvpZ/view?usp=sharing">AWS Cloud Practioner</a></h3>
//                 <p className="font-medium text-gray-700 mb-1">AWS</p>
//                 <p className="text-sm text-gray-500 mb-3">September 2025</p>

//                 <ul className="space-y-2">
//                   <li className="flex items-start gap-2 text-gray-600">
//                     <RiCheckboxCircleLine className="mt-1" />
//                     Deployed several project on AWS Cloud learned about several AWS Cloud tools.
//                   </li>
//                 </ul>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;










import { useEffect, useRef, useState } from "react";
import { PiCertificateLight } from "react-icons/pi";
import { RiCheckboxCircleLine } from "react-icons/ri";

const experiences = [
  {
    title: "DELTA - Full Stack Development",
    org: "Apna College",
    period: "November 2024 – April 2025",
    desc: "Developed and maintained several full-stack web applications using the MERN stack.",
    cert: "https://drive.google.com/file/d/1nClaErZGKCtR6FM2RtzTb71ptjw54Hup/view?usp=sharing",
    accent: "#3b82f6",
    accentBg: "#eff6ff",
    tag: "Course",
  },
  {
    title: "DATACOM — Job Simulation",
    org: "Forage",
    period: "July 2025",
    desc: "Helped finding and fixing bugs in a real-life production environment.",
    cert: "https://drive.google.com/file/d/16-xHTR1amMpLpoklDgy4BITymUDFO8H9/view?usp=sharing",
    accent: "#8b5cf6",
    accentBg: "#f5f3ff",
    tag: "Simulation",
  },
  {
    title: "AWS Cloud Practitioner",
    org: "AWS",
    period: "September 2025",
    desc: "Deployed several projects on AWS Cloud and learned about core AWS Cloud tools and services.",
    cert: "https://drive.google.com/file/d/1YTWwjFjIHgBKv4yNb0-tP4FpLW6oCvpZ/view?usp=sharing",
    accent: "#f59e0b",
    accentBg: "#fffbeb",
    tag: "Certification",
  },
];

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
  }, []);
  return [ref, visible];
};

const TimelineItem = ({ item, index, totalVisible }) => {
  const [cardRef, cardVisible] = useVisible(0.1);
  const [hovered, setHovered] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className="relative flex items-center md:justify-normal group"
      style={{ minHeight: 120 }}
    >
      {/* Animated dot on the line */}
      <div
        className="absolute left-5 md:left-1/2 md:-translate-x-1/2 z-10 transition-all duration-500"
        style={{
          opacity: cardVisible ? 1 : 0,
          transform: cardVisible ? 'scale(1)' : 'scale(0)',
          transitionDelay: `${index * 0.15}s`,
        }}
      >
        
          <a href={item.cert}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-11 h-11 rounded-full text-white shadow-lg transition-all duration-300"
          style={{
            background: `linear-gradient(135deg, ${item.accent}, ${item.accent}bb)`,
            boxShadow: hovered ? `0 0 0 6px ${item.accent}30` : `0 4px 12px ${item.accent}40`,
            transform: hovered ? 'scale(1.15) rotate(-10deg)' : 'scale(1)',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          title="View Certificate"
        >
          <PiCertificateLight size={20} />
        </a>

        {/* Pulse ring */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            border: `2px solid ${item.accent}`,
            animation: 'ringPulse 2s ease-out infinite',
            animationDelay: `${index * 0.4}s`,
          }}
        />
      </div>

      {/* Card */}
      <div
        className={`
          relative bg-white rounded-2xl shadow-md border border-gray-100 p-6
          w-[85%] md:w-[45%] ml-auto md:ml-0
          ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}
          transition-all duration-500 cursor-default
        `}
        style={{
          opacity: cardVisible ? 1 : 0,
          transform: cardVisible
            ? 'translateX(0) translateY(0)'
            : isLeft
              ? 'translateX(-40px) translateY(20px)'
              : 'translateX(40px) translateY(20px)',
          transitionDelay: `${index * 0.15 + 0.1}s`,
          boxShadow: hovered ? `0 16px 40px ${item.accent}22` : undefined,
          borderLeft: `3px solid ${item.accent}`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Tag pill */}
        <span
          className="inline-block text-xs font-bold px-3 py-0.5 rounded-full mb-3"
          style={{ background: item.accentBg, color: item.accent }}
        >
          {item.tag}
        </span>

        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 transition-colors duration-300"
          style={{ color: hovered ? item.accent : '#111827' }}>
          <a href={item.cert} target="_blank" rel="noreferrer">
            {item.title}
          </a>
        </h3>

        <p className="font-semibold text-gray-600 text-sm mb-1">{item.org}</p>
        <p className="text-xs text-gray-400 mb-4 flex items-center gap-1">
          <span
            className="w-1.5 h-1.5 rounded-full inline-block"
            style={{ background: item.accent }}
          />
          {item.period}
        </p>

        <ul className="space-y-1">
          <li className="flex items-start gap-2 text-gray-600 text-sm">
            <RiCheckboxCircleLine
              className="mt-0.5 flex-shrink-0"
              style={{ color: item.accent }}
              size={16}
            />
            {item.desc}
          </li>
        </ul>

        {/* View cert link */}
        
          <a href={item.cert}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 mt-4 text-xs font-semibold transition-all duration-300 hover:gap-2"
          style={{ color: item.accent }}
        >
          View Certificate
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>

        {/* Hover accent bar */}
        <div
          className="absolute bottom-0 left-0 h-0.5 rounded-b-2xl transition-all duration-500"
          style={{
            width: hovered ? '100%' : '0%',
            background: `linear-gradient(90deg, ${item.accent}, ${item.accent}44)`,
          }}
        />
      </div>
    </div>
  );
};

const Experience = () => {
  const [sectionRef, sectionVisible] = useVisible(0.05);
  const [lineRef, lineVisible] = useVisible(0.1);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes drawLine {
          from { width: 0; }
          to   { width: 4rem; }
        }
        @keyframes growHeight {
          from { height: 0; }
          to   { height: 100%; }
        }
        @keyframes shimmerBadge {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes ringPulse {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        .exp-visible .anim-header { animation: fadeUp 0.7s 0.05s both cubic-bezier(0.22,1,0.36,1); }
        .exp-visible .anim-desc   { animation: fadeUp 0.7s 0.2s  both cubic-bezier(0.22,1,0.36,1); }
        .exp-visible .anim-line-draw { animation: drawLine 0.6s 0.35s both ease-out; }

        .timeline-line {
          transition: height 1.2s cubic-bezier(0.22,1,0.36,1);
        }

        .badge-shimmer {
          background: linear-gradient(90deg, #e0e7ff 30%, #c7d2fe 50%, #e0e7ff 70%);
          background-size: 200% auto;
          animation: shimmerBadge 2.5s linear infinite;
        }
      `}</style>

      <section
        id="experience"
        ref={sectionRef}
        className={`bg-gray-50 py-16 md:py-24 ${sectionVisible ? 'exp-visible' : ''}`}
      >
        <div className="container mx-auto px-4">

          {/* Header */}
          <div className="text-center mb-14 md:mb-20">
            <span className="badge-shimmer inline-block text-xs font-semibold tracking-widest uppercase text-indigo-600 px-4 py-1 rounded-full mb-4 anim-header">
              My Journey
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 anim-header">
              My Professional Journey
            </h2>
            <div className="flex justify-center mb-4">
              <div
                className="h-1 rounded-full anim-line-draw"
                style={{ background: 'linear-gradient(90deg,#3b82f6,#8b5cf6,#ec4899)', width: 0 }}
              />
            </div>
            <p className="text-gray-500 max-w-xl mx-auto anim-desc">
              Tracing my path through the roles that have shaped my skills and expertise.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto" ref={lineRef}>

            {/* Vertical animated line */}
            <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 w-[2px] bg-gray-200 top-0 overflow-hidden"
              style={{ height: '100%' }}>
              <div
                className="w-full timeline-line"
                style={{
                  height: lineVisible ? '100%' : '0%',
                  background: 'linear-gradient(to bottom, #3b82f6, #8b5cf6, #ec4899)',
                }}
              />
            </div>

            <div className="flex flex-col gap-14">
              {experiences.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} totalVisible={sectionVisible} />
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;