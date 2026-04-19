import { useEffect, useRef, useState } from "react";
import { FaCode } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
import { GrTechnology } from "react-icons/gr";
import { GoTrophy } from "react-icons/go";

const cards = [
  {
    icon: <FaCode size={22} />,
    title: "Versatile Enterprise",
    desc: "Full-stack proficiency with React, Node.js and databases like MongoDB & MySQL.",
    color: "#3b82f6",
    bg: "#eff6ff",
  },
  {
    icon: <CiCreditCard1 size={22} />,
    title: "E-commerce and Payments",
    desc: "Skilled in building e-commerce platforms with secure payment integrations like Razorpay.",
    color: "#8b5cf6",
    bg: "#f5f3ff",
  },
  {
    icon: <GrTechnology size={22} />,
    title: "Modern Solutions",
    desc: "Focused on cutting-edge solutions, with current projects involving their implementation.",
    color: "#ec4899",
    bg: "#fdf2f8",
  },
  {
    icon: <GoTrophy size={22} />,
    title: "Community Leadership",
    desc: "Hackathon Organizer and competitor with experience leading developer teams.",
    color: "#f59e0b",
    bg: "#fffbeb",
  },
];

const About = () => {
  const [visible, setVisible] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes drawLine {
          from { width: 0; }
          to   { width: 4rem; }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes iconPop {
          0%   { transform: scale(1); }
          40%  { transform: scale(1.3) rotate(-8deg); }
          70%  { transform: scale(0.9) rotate(4deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes shimmerBar {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        .about-section-visible .anim-title {
          animation: fadeUp 0.7s 0.1s both cubic-bezier(0.22,1,0.36,1);
        }
        .about-section-visible .anim-line {
          animation: drawLine 0.6s 0.5s both ease-out;
        }
        .about-section-visible .anim-desc {
          animation: fadeUp 0.7s 0.4s both cubic-bezier(0.22,1,0.36,1);
        }
        .about-section-visible .anim-stat {
          animation: countUp 0.6s both cubic-bezier(0.22,1,0.36,1);
        }
        .about-section-visible .anim-card-0 { animation: fadeUp 0.7s 0.2s both cubic-bezier(0.22,1,0.36,1); }
        .about-section-visible .anim-card-1 { animation: fadeUp 0.7s 0.35s both cubic-bezier(0.22,1,0.36,1); }
        .about-section-visible .anim-card-2 { animation: fadeUp 0.7s 0.5s both cubic-bezier(0.22,1,0.36,1); }
        .about-section-visible .anim-card-3 { animation: fadeUp 0.7s 0.65s both cubic-bezier(0.22,1,0.36,1); }

        .skill-card {
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease, background 0.3s ease;
          cursor: default;
        }
        .skill-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 16px 40px rgba(0,0,0,0.1);
        }
        .skill-card:hover .card-icon {
          animation: iconPop 0.5s ease forwards;
        }

        .shimmer-badge {
          background: linear-gradient(90deg, #e0e7ff 30%, #c7d2fe 50%, #e0e7ff 70%);
          background-size: 200% auto;
          animation: shimmerBar 2.5s linear infinite;
        }

        .stat-number {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <section
        id="about"
        ref={sectionRef}
        className={`container mx-auto px-4 ${visible ? "about-section-visible" : ""}`}
      >
        <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-inner relative overflow-hidden">

          {/* Decorative background blobs */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-30 pointer-events-none"
            style={{ background: "radial-gradient(circle, #bfdbfe, transparent 70%)" }} />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(circle, #ddd6fe, transparent 70%)" }} />

          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <span className="shimmer-badge inline-block text-xs font-semibold tracking-widest uppercase text-indigo-600 px-4 py-1 rounded-full mb-4 anim-title">
              Who I Am
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 anim-title">
              About Me
            </h2>

            {/* Animated underline */}
            <div className="flex justify-center mb-6">
              <div
                className="h-1 rounded-full anim-line"
                style={{ background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)", width: 0 }}
              />
            </div>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed anim-desc max-w-2xl mx-auto">
              I'm a Full Stack Developer who builds fast, scalable web applications,
              specializing in the <span className="font-semibold text-gray-900">MERN Stack</span>.
            </p>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 md:mb-16">
            {[
              { value: "10+", label: "Projects Built" },
              { value: "2+", label: "Years Experience" },
              { value: "3+", label: "Hackathons" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`text-center anim-stat`}
                style={{ animationDelay: `${0.5 + i * 0.15}s` }}
              >
                <p className="text-3xl font-bold stat-number">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left">
            {cards.map((card, i) => (
              <div
                key={i}
                className={`skill-card anim-card-${i} flex items-start gap-4 bg-white rounded-2xl p-6 border border-gray-100`}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Icon box */}
                <div
                  className="card-icon flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300"
                  style={{
                    background: hoveredIdx === i ? card.color : card.bg,
                    color: hoveredIdx === i ? "#fff" : card.color,
                  }}
                >
                  {card.icon}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>

                  {/* Subtle animated bottom bar on hover */}
                  <div
                    className="mt-3 h-0.5 rounded-full transition-all duration-500"
                    style={{
                      background: card.color,
                      width: hoveredIdx === i ? "100%" : "0%",
                      opacity: hoveredIdx === i ? 1 : 0,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default About;
