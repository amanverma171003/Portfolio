import { useEffect, useRef, useState } from 'react'
import { FaHtml5, FaJsSquare, FaCss3Alt, FaReact, FaNodeJs, FaJava, FaGitAlt, FaDocker } from "react-icons/fa"
import { SiExpress, SiMongodb, SiCloudinary, SiRazorpay, SiKubernetes, SiRedis, SiApachekafka, SiStripe } from "react-icons/si"
import { GrGithub, GrMysql } from "react-icons/gr"
import { RiTailwindCssFill } from "react-icons/ri"

const techs = [
  { icon: FaJava,          label: 'Java',        color: '#f89820', category: 'Language' },
  { icon: FaHtml5,         label: 'HTML',        color: '#e34f26', category: 'Language' },
  { icon: FaCss3Alt,       label: 'CSS',         color: '#1572b6', category: 'Language' },
  { icon: FaJsSquare,      label: 'JavaScript',  color: '#f7df1e', category: 'Language' },
  { icon: FaReact,         label: 'React',       color: '#61dafb', category: 'Frontend' },
  { icon: RiTailwindCssFill, label: 'Tailwind',  color: '#38bdf8', category: 'Frontend' },
  { icon: FaNodeJs,        label: 'Node.js',     color: '#68a063', category: 'Backend'  },
  { icon: SiExpress,       label: 'Express',     color: '#888888', category: 'Backend'  },
  { icon: SiMongodb,       label: 'MongoDB',     color: '#47a248', category: 'Database' },
  { icon: GrMysql,         label: 'MySQL',       color: '#4479a1', category: 'Database' },
  { icon: SiRedis,         label: 'Redis',       color: '#dc382d', category: 'Database' },
  { icon: FaDocker,        label: 'Docker',      color: '#2496ed', category: 'DevOps'   },
  { icon: SiKubernetes,    label: 'Kubernetes',  color: '#326ce5', category: 'DevOps'   },
  { icon: SiApachekafka,   label: 'Kafka',       color: '#231f20', category: 'DevOps'   },
  { icon: SiCloudinary,    label: 'Cloudinary',  color: '#3448c5', category: 'Tools'    },
  { icon: SiRazorpay,      label: 'Razorpay',    color: '#2d84ee', category: 'Tools'    },
  { icon: SiStripe,        label: 'Stripe',      color: '#635bff', category: 'Tools'    },
  { icon: GrGithub,        label: 'GitHub',      color: '#333333', category: 'Tools'    },
  { icon: FaGitAlt,        label: 'Git',         color: '#f05032', category: 'Tools'    },
]

const categories = ['All', 'Language', 'Frontend', 'Backend', 'Database', 'DevOps', 'Tools']

const TechCard = ({ icon: Icon, label, color, index, visible }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="tech-card flex flex-col items-center gap-2 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm cursor-default"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
        transition: `opacity 0.5s ${index * 0.04}s cubic-bezier(0.22,1,0.36,1),
                     transform 0.5s ${index * 0.04}s cubic-bezier(0.22,1,0.36,1),
                     box-shadow 0.3s ease`,
        boxShadow: hovered ? `0 8px 30px ${color}33` : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
        style={{
          background: hovered ? color + '18' : '#f9fafb',
          transform: hovered ? 'scale(1.2) rotate(-6deg)' : 'scale(1) rotate(0deg)',
        }}
      >
        <Icon size={26} color={hovered ? color : '#6b7280'} style={{ transition: 'color 0.3s' }} />
      </div>
      <span
        className="text-xs font-semibold text-center leading-tight transition-colors duration-300"
        style={{ color: hovered ? color : '#6b7280' }}
      >
        {label}
      </span>

      {/* Animated bottom bar */}
      <div
        className="h-0.5 rounded-full transition-all duration-400"
        style={{
          width: hovered ? '70%' : '0%',
          background: color,
          opacity: hovered ? 1 : 0,
        }}
      />
    </div>
  )
}

const Technologies = () => {
  const [visible, setVisible]     = useState(false)
  const [activeTab, setActiveTab] = useState('All')
  const sectionRef                = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  const filtered = activeTab === 'All' ? techs : techs.filter(t => t.category === activeTab)

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
        @keyframes shimmerBadge {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }

        .tech-section-visible .anim-header {
          animation: fadeUp 0.7s 0.05s both cubic-bezier(0.22,1,0.36,1);
        }
        .tech-section-visible .anim-tabs {
          animation: fadeUp 0.7s 0.2s both cubic-bezier(0.22,1,0.36,1);
        }
        .tech-section-visible .anim-line {
          animation: drawLine 0.6s 0.4s both ease-out;
        }

        .tech-card:hover { transform: translateY(-4px) scale(1.04) !important; }

        .badge-shimmer {
          background: linear-gradient(90deg, #e0e7ff 30%, #c7d2fe 50%, #e0e7ff 70%);
          background-size: 200% auto;
          animation: shimmerBadge 2.5s linear infinite;
        }

        .tab-btn {
          transition: all 0.25s cubic-bezier(0.22,1,0.36,1);
        }
        .tab-btn:hover { transform: translateY(-2px); }

        .count-badge {
          transition: all 0.3s ease;
        }
      `}</style>

      <section
        id="skills"
        ref={sectionRef}
        className={`pb-16 md:pb-24 ${visible ? 'tech-section-visible' : ''}`}
      >
        <div className="container mx-auto px-4">

          {/* Header */}
          <div className="text-center mb-10 md:mb-14 anim-header">
            <span className="badge-shimmer inline-block text-xs font-semibold tracking-widest uppercase text-indigo-600 px-4 py-1 rounded-full mb-4">
              My Stack
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Technologies I Use
            </h2>
            <div className="flex justify-center mb-4">
              <div
                className="h-1 rounded-full anim-line"
                style={{ background: 'linear-gradient(90deg,#3b82f6,#8b5cf6,#ec4899)', width: 0 }}
              />
            </div>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              From frontend to DevOps — here's the full stack I work with
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 anim-tabs">
            {categories.map(cat => {
              const count = cat === 'All' ? techs.length : techs.filter(t => t.category === cat).length
              const active = activeTab === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className="tab-btn flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold border"
                  style={{
                    background:   active ? 'linear-gradient(135deg,#3b82f6,#8b5cf6)' : '#fff',
                    color:        active ? '#fff' : '#6b7280',
                    borderColor:  active ? 'transparent' : '#e5e7eb',
                    boxShadow:    active ? '0 4px 14px #3b82f640' : undefined,
                  }}
                >
                  {cat}
                  <span
                    className="count-badge text-xs px-1.5 py-0.5 rounded-full font-bold"
                    style={{
                      background: active ? 'rgba(255,255,255,0.25)' : '#f3f4f6',
                      color:      active ? '#fff' : '#9ca3af',
                    }}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4 md:gap-5 max-w-4xl mx-auto">
            {filtered.map((tech, i) => (
              <TechCard
                key={tech.label}
                icon={tech.icon}
                label={tech.label}
                color={tech.color}
                index={i}
                visible={visible}
              />
            ))}
          </div>

          {/* Footer stat */}
          <p className="text-center text-sm text-gray-400 mt-10 anim-header">
            <span className="font-bold text-gray-600">{techs.length}</span> technologies & growing
          </p>

        </div>
      </section>
    </>
  )
}

export default Technologies

