// import React from 'react'
// import Card from '../common/Card'
// import studyMantra from '../../assets/proj1.png'
// import wanderlust from '../../assets/wanderlust.png'
// import ventguru from '../../assets/ventguru.png'

// const Projects = () => {
//   return (
//     <section id='projects' className='container mx-auto px-4 py-12 md:py-16 lg:py-24'>
//         <div className='text-center mb-10 md:mb-16'>
//             <h2 className='text-4xl lg:text-6xl sm:text-5xl font-bold text-gray-800'>My Projects</h2>
//             <p className='pt-4'>Here are a few of my best projects that showcase my skills in action</p>
//         </div>

//         <div className='rounded-2xl lg:rounded-3xl overflow-hidden mb-10 lg:mb-16 px-6'>
//             <div className='lg:flex mb-6 shadow-xl'>
//                 <div className='lg:w-1/2'>
//                     <img src={studyMantra} alt='Study Mantra Project' className='w-full h-full object-cover' />
//                 </div>

//                 <div className='lg:w-1/2 p-6 md:p-8 lg:p-12'>
//                     <h3 className='text-xl md:text-3xl font-bold text-gary-900 mb-4'>Study Mantra - Edtech Platform</h3>
//                     <p className='text-gray-700 leading-relaxed mb-6 line-clamp-2 md:line-clamp-4'>Developed a full-stack MERN platform for an ed-tech client, featuring course purchases and student management with secure Razorpay payment integration.</p>

//                     <div className='flex flex-wrap gap-2 mb-6'>
//                         <span className='skill-pill'>MERN Stack</span>
//                         <span className='skill-pill'>Razorpay API</span>
//                         <span className='skill-pill'>Cloudinary</span>
//                         <span className='skill-pill'>JWT Authentication</span>
//                     </div>

//                     <div className='flex items-center gap-4'>
//                         <a href='' className='inline-flex items-center gap-2 font-semibold hover:underline' target='_blank'></a>
//                     </div>
//                 </div>
//             </div>

//             <div className='bg-white grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 py-6 px-4'>

//                 <Card 
//                     image={ventguru}
//                     projectHeading={"Ventguru - Inventory Management webApp"} 
//                     projPara={"Built a complete web platform with inventory management and a secure payment system."}
//                     skill1={'MERN Stack'}
//                     skill2={'Inventory management'}
//                     link={"sdfg"}
//                 />

//                 <Card 
//                     image={wanderlust}
//                     projectHeading={"WanderLust - Hotel Listing platform"} 
//                     projPara={"Built a complete web platform with inventory management and a secure payment system."}
//                     skill1={'MERN Stack'}
//                     skill2={'Mapbox'}
//                     link={"xcvbn"}
//                 />

//             </div>
//         </div>
//     </section>
//   )
// }

// export default Projects



import { useEffect, useRef, useState } from 'react'
import studyMantra from '../../assets/proj1.png'
import wanderlust from '../../assets/wanderlust.png'
import ventguru from '../../assets/ventguru.png'

const projects = [
  {
    id: 'studymantra',
    image: studyMantra,
    title: 'Study Mantra — Edtech Platform',
    desc: 'Developed a full-stack MERN platform for an ed-tech client, featuring course purchases and student management with secure Razorpay payment integration.',
    skills: ['MERN Stack', 'Razorpay API', 'Cloudinary', 'JWT Auth'],
    demoLink: 'https://study-mantra-amber.vercel.app/',
    githubLink: 'https://github.com/amanverma171003/StudyMantra-demo',
    accent: '#3b82f6',
    accentBg: '#eff6ff',
    featured: true,
  },
  {
    id: 'ventguru',
    image: ventguru,
    title: 'Ventguru — Inventory Management',
    desc: 'Built a complete web platform with inventory management and a secure payment system for seamless business operations.',
    skills: ['MERN Stack', 'Inventory Management'],
    demoLink: '',
    githubLink: '',
    accent: '#8b5cf6',
    accentBg: '#f5f3ff',
  },
  {
    id: 'wanderlust',
    image: wanderlust,
    title: 'WanderLust — Hotel Listing Platform',
    desc: 'A full-stack hotel listing platform with interactive map integration, search filters and user authentication.',
    skills: ['MERN Stack', 'Mapbox'],
    demoLink: '',
    githubLink: 'https://github.com/amanverma171003/Wanderlust',
    accent: '#10b981',
    accentBg: '#ecfdf5',
  },
  {
    id: 'crm',
    image: null,
    title: 'CRM Dashboard — Client Management',
    desc: 'A full-featured Customer Relationship Management platform built on the MERN stack. Includes lead tracking, deal pipelines, contact management, activity logs, and analytics dashboards for teams.',
    skills: ['MERN Stack', 'Redux', 'Chart.js', 'JWT Auth'],
    demoLink: 'https://sqts-crm-frontend.vercel.app',
    githubLink: 'https://github.com/amanverma171003/SQTS-CRM',
    accent: '#f59e0b',
    accentBg: '#fffbeb',
  },
]

const TagPill = ({ label, color }) => (
  <span
    className="text-xs font-semibold px-3 py-1 rounded-full border"
    style={{ color, borderColor: color, background: color + '18' }}
  >
    {label}
  </span>
)

const LinkButton = ({ href, icon, label, primary, color }) => (
  
    <a href={href || '#'}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
    style={
      primary
        ? { background: color, color: '#fff', boxShadow: `0 4px 14px ${color}40` }
        : { border: `1.5px solid ${color}`, color }
    }
  >
    {icon}
    {label}
  </a>
)

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const CRMIllustration = ({ color }) => (
  <div className="w-full h-full flex items-center justify-center p-8 min-h-64">
    <div className="w-full max-w-sm space-y-3">
      {[
        { label: 'New Leads', value: 85, count: '124' },
        { label: 'Deals Closed', value: 62, count: '89' },
        { label: 'Active Clients', value: 91, count: '203' },
      ].map((bar, i) => (
        <div key={i} className="bg-white rounded-xl p-3 shadow-sm">
          <div className="flex justify-between text-xs font-semibold text-gray-600 mb-2">
            <span>{bar.label}</span>
            <span style={{ color }}>{bar.count}</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{ width: `${bar.value}%`, background: `linear-gradient(90deg, ${color}, ${color}99)` }}
            />
          </div>
        </div>
      ))}
      <div className="grid grid-cols-3 gap-2 pt-1">
        {['Pipeline', 'Contacts', 'Reports'].map((label, i) => (
          <div key={i} className="bg-white rounded-xl p-3 text-center shadow-sm">
            <div className="text-lg font-bold" style={{ color }}>{['$48k', '312', '27'][i]}</div>
            <div className="text-xs text-gray-500">{label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// Image with browser-frame mockup wrapper
const ProjectImage = ({ src, alt, accent }) => (
  <div className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-white">
    {/* Browser chrome bar */}
    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-gray-100 bg-gray-50">
      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
      <div className="ml-3 flex-1 bg-gray-200 rounded-full h-4 max-w-xs" />
    </div>
    {/* Full image, no crop */}
    <img
      src={src}
      alt={alt}
      className="w-full h-auto block transition-transform duration-500 hover:scale-[1.02]"
    />
  </div>
)

const useVisible = (threshold = 0.1) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

const Projects = () => {
  const [sectionRef, sectionVisible] = useVisible(0.05)

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(44px); }
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
        @keyframes pulseSoft {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.5; }
        }

        .proj-visible .anim-header   { animation: fadeUp    0.7s 0.05s both cubic-bezier(0.22,1,0.36,1); }
        .proj-visible .anim-featured { animation: fadeUp    0.8s 0.2s  both cubic-bezier(0.22,1,0.36,1); }
        .proj-visible .anim-card-0   { animation: fadeLeft  0.7s 0.3s  both cubic-bezier(0.22,1,0.36,1); }
        .proj-visible .anim-card-1   { animation: fadeRight 0.7s 0.45s both cubic-bezier(0.22,1,0.36,1); }
        .proj-visible .anim-crm      { animation: fadeUp    0.8s 0.55s both cubic-bezier(0.22,1,0.36,1); }
        .proj-visible .anim-line     { animation: drawLine  0.6s 0.4s  both ease-out; }

        .proj-card {
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease;
        }
        .proj-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.10);
        }

        .badge-shimmer {
          background: linear-gradient(90deg, #e0e7ff 30%, #c7d2fe 50%, #e0e7ff 70%);
          background-size: 200% auto;
          animation: shimmerBadge 2.5s linear infinite;
        }
        .dot-live { animation: pulseSoft 1.8s ease-in-out infinite; }

        .accent-bar {
          height: 3px;
          border-radius: 999px;
          transition: width 0.4s ease;
          width: 0;
        }
        .proj-card:hover .accent-bar { width: 100% !important; }
      `}</style>

      <section
        id="projects"
        ref={sectionRef}
        className={`container mx-auto px-4 py-12 md:py-16 lg:py-24 ${sectionVisible ? 'proj-visible' : ''}`}
      >
        {/* Header */}
        <div className="text-center mb-12 md:mb-20 anim-header">
          <span className="badge-shimmer inline-block text-xs font-semibold tracking-widest uppercase text-indigo-600 px-4 py-1 rounded-full mb-4">
            My Work
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="flex justify-center mb-4">
            <div className="h-1 rounded-full anim-line" style={{ background: 'linear-gradient(90deg,#3b82f6,#8b5cf6,#ec4899)', width: 0 }} />
          </div>
          <p className="text-gray-500 max-w-xl mx-auto">Here are a few of my best projects that showcase my skills in action</p>
        </div>

        {/* Featured — Study Mantra */}
        <div className="anim-featured proj-card bg-white rounded-3xl overflow-hidden shadow-lg mb-8 border border-gray-100">
          {/* Top accent bar */}
          <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg,#3b82f6,#8b5cf6)' }} />
          <div className="lg:flex gap-0">
            {/* Image side — padded, full image shown */}
            <div className="lg:w-1/2 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
              <ProjectImage src={studyMantra} alt="Study Mantra" accent={projects[0].accent} />
            </div>
            <div className="lg:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="badge-shimmer text-xs font-bold text-indigo-600 px-3 py-1 rounded-full">Featured</span>
                <span className="flex items-center gap-1 text-xs text-green-600 font-semibold">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full dot-live" /> Live
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{projects[0].title}</h3>
              <p className="text-gray-500 leading-relaxed mb-6 text-sm">{projects[0].desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[0].skills.map(s => <TagPill key={s} label={s} color={projects[0].accent} />)}
              </div>
              <div className="flex flex-wrap gap-3">
                <LinkButton href={projects[0].demoLink} icon={<ExternalIcon />} label="Live Demo" primary color={projects[0].accent} />
                <LinkButton href={projects[0].githubLink} icon={<GithubIcon />} label="GitHub" color={projects[0].accent} />
              </div>
            </div>
          </div>
        </div>

        {/* Grid — Ventguru + Wanderlust */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {projects.slice(1, 3).map((proj, i) => (
            <div
              key={proj.id}
              className={`anim-card-${i} proj-card bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col`}
            >
              {/* Accent bar on hover */}
              <div className="accent-bar" style={{ background: `linear-gradient(90deg,${proj.accent},${proj.accent}88)` }} />

              {/* Image in a padded, gradient container */}
              <div
                className="p-4"
                style={{ background: `linear-gradient(135deg, ${proj.accentBg}, #fff)` }}
              >
                <ProjectImage src={proj.image} alt={proj.title} accent={proj.accent} />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{proj.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {proj.skills.map(s => <TagPill key={s} label={s} color={proj.accent} />)}
                </div>
                <div className="flex flex-wrap gap-3">
                  <LinkButton href={proj.demoLink} icon={<ExternalIcon />} label="Live Demo" primary color={proj.accent} />
                  <LinkButton href={proj.id === 'wanderlust' ? 'https://github.com/amanverma171003/Wanderlust' : proj.githubLink} icon={<GithubIcon />} label="GitHub" color={proj.accent} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CRM — wide card */}
        <div className="anim-crm proj-card bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
          <div className="h-1 w-full" style={{ background: `linear-gradient(90deg,${projects[3].accent},#ec4899)` }} />
          <div className="lg:flex flex-row-reverse">
            <div
              className="lg:w-1/2 min-h-64 flex items-center"
              style={{ background: `linear-gradient(135deg, ${projects[3].accentBg}, #fff)` }}
            >
              <CRMIllustration color={projects[3].accent} />
            </div>
            <div className="lg:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"
                  style={{ background: projects[3].accentBg, color: projects[3].accent }}
                >
                  <span className="w-1.5 h-1.5 rounded-full dot-live" style={{ background: projects[3].accent }} />
                  New
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{projects[3].title}</h3>
              <p className="text-gray-500 leading-relaxed mb-6 text-sm">{projects[3].desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[3].skills.map(s => <TagPill key={s} label={s} color={projects[3].accent} />)}
              </div>
              <div className="flex flex-wrap gap-3">
                <LinkButton href={projects[3].demoLink} icon={<ExternalIcon />} label="Live Demo" primary color={projects[3].accent} />
                <LinkButton href={projects[3].githubLink} icon={<GithubIcon />} label="GitHub" color={projects[3].accent} />
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Projects