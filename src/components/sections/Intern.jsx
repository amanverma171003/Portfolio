import { useEffect, useRef, useState } from "react";
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

const achievements = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
        <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
    title: "End-to-end event management platform",
    desc: "Built a complete platform handling 100+ users and events with reliable booking workflows.",
    metric: "100+ users",
    metricPct: 80,
    color: "#3b82f6",
    accentBg: "#eff6ff",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    title: "Scalable REST APIs — ~25% faster response",
    desc: "Developed scalable REST APIs, reducing response time by ~25% and improving data consistency.",
    metric: "~25% faster",
    metricPct: 75,
    color: "#8b5cf6",
    accentBg: "#f5f3ff",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "CRM with lead & pipeline management — ~40% efficiency",
    desc: "Built CRM features for lead tracking and deal pipeline management, boosting team efficiency by ~40%.",
    metric: "~40% gain",
    metricPct: 85,
    color: "#ec4899",
    accentBg: "#fdf2f8",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Production-ready delivery in 2-month agile cycle",
    desc: "Delivered production-ready features consistently across a full 2-month agile sprint with real client deployment.",
    metric: "On-time ship",
    metricPct: 90,
    color: "#f59e0b",
    accentBg: "#fffbeb",
  },
];


const techStack = ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Agile"];

const AchievementItem = ({ item, index, cardVisible }) => {
  const [hovered, setHovered] = useState(false);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    if (cardVisible) {
      const t = setTimeout(() => setBarWidth(item.metricPct), 500 + index * 150);
      return () => clearTimeout(t);
    }
  }, [cardVisible, item.metricPct, index]);

  return (
    <>
      <style>{`
        @keyframes fadeSlideLeft {
          from { opacity: 0; transform: translateX(-32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .ach-item-${index} {
          opacity: 0;
        }
        .ach-item-${index}.ach-visible {
          animation: fadeSlideLeft 0.6s ${0.3 + index * 0.15}s both cubic-bezier(0.22,1,0.36,1);
        }
      `}</style>

      <div
        className={`ach-item-${index} ${cardVisible ? "ach-visible" : ""} flex items-start gap-4`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Icon */}
        <div
          className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
          style={{
            background: hovered ? item.color : item.accentBg,
            color: hovered ? "#fff" : item.color,
          }}
        >
          {item.icon}
        </div>

        {/* Content */}
        <div className="flex-1 pt-0.5">
          <div className="flex items-start justify-between gap-2 mb-1">
            <p className="text-sm font-semibold text-gray-900">{item.title}</p>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed mb-3">{item.desc}</p>

          {/* Metric bar */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${barWidth}%`,
                  background: `linear-gradient(90deg, ${item.color}, ${item.color}99)`,
                }}
              />
            </div>
            <span className="text-xs font-semibold min-w-max" style={{ color: item.color }}>
              {item.metric}
            </span>
          </div>

          {/* Hover underline */}
          <div
            className="mt-3 h-0.5 rounded-full transition-all duration-500"
            style={{
              background: item.color,
              width: hovered ? "100%" : "0%",
              opacity: hovered ? 1 : 0,
            }}
          />
        </div>
      </div>
    </>
  );
};

const Internship = () => {
  const [sectionRef, sectionVisible] = useVisible(0.05);
  const [cardRef, cardVisible] = useVisible(0.1);

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
        @keyframes pulseGreen {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
          50%       { box-shadow: 0 0 0 6px rgba(34,197,94,0); }
        }
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-4px); }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .intern-visible .anim-header { animation: fadeUp 0.7s 0.05s both cubic-bezier(0.22,1,0.36,1); }
        .intern-visible .anim-desc   { animation: fadeUp 0.7s 0.2s  both cubic-bezier(0.22,1,0.36,1); }
        .intern-visible .anim-line   { animation: drawLine 0.6s 0.35s both ease-out; }

        .intern-visible .stat-0 { animation: countUp 0.6s 0.5s  both cubic-bezier(0.22,1,0.36,1); }
        .intern-visible .stat-1 { animation: countUp 0.6s 0.65s both cubic-bezier(0.22,1,0.36,1); }
        .intern-visible .stat-2 { animation: countUp 0.6s 0.8s  both cubic-bezier(0.22,1,0.36,1); }
        .intern-visible .stat-3 { animation: countUp 0.6s 0.95s both cubic-bezier(0.22,1,0.36,1); }

        .badge-shimmer {
          background: linear-gradient(90deg, #e0e7ff 30%, #c7d2fe 50%, #e0e7ff 70%);
          background-size: 200% auto;
          animation: shimmerBadge 2.5s linear infinite;
        }

        .pulse-dot {
          animation: pulseGreen 2s ease-in-out infinite;
        }

        .card-float {
          animation: cardFloat 6s ease-in-out infinite;
        }

        .intern-card {
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease;
        }
        .intern-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(59,130,246,0.10);
        }

        .tech-chip {
          transition: all 0.2s ease;
        }
        .tech-chip:hover {
          border-color: #3b82f6 !important;
          color: #3b82f6 !important;
          background: #eff6ff !important;
        }

        .stat-number {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <section
        id="internship"
        ref={sectionRef}
        className={`container mx-auto px-4 py-16 md:py-24 ${sectionVisible ? "intern-visible" : ""}`}
      >
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="badge-shimmer inline-block text-xs font-semibold tracking-widest uppercase text-indigo-600 px-4 py-1 rounded-full mb-4 anim-header">
            Work Experience
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 anim-header">
            My Internship
          </h2>
          <div className="flex justify-center mb-4">
            <div
              className="h-1 rounded-full anim-line"
              style={{
                background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)",
                width: 0,
              }}
            />
          </div>
          <p className="text-gray-500 max-w-xl mx-auto anim-desc">
            Building real products at scale — from REST APIs to full platforms, shipped in production.
          </p>
        </div>

       

        {/* Main Card */}
        <div
          ref={cardRef}
          className="intern-card bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 max-w-3xl mx-auto"
        >
          {/* Top gradient bar */}
          <div
            className="h-1 w-full"
            style={{ background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)" }}
          />

          {/* Card Header */}
          <div className="p-6 md:p-8 border-b border-gray-100">
            <div className="flex items-start gap-4">
              {/* Company Icon */}
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 border border-blue-100"
                style={{ background: "linear-gradient(135deg, #eff6ff, #e0e7ff)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" width={24} height={24}>
                  <rect x="3" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  <rect x="14" y="14" width="7" height="7" rx="1.5" />
                </svg>
              </div>

              <div className="flex-1">
                <p className="text-lg font-bold text-gray-900 mb-0.5">Full Stack Developer Intern</p>
                <p className="text-sm font-semibold text-blue-500 mb-2">
                  SQTS — Spark Que Tech Solutions
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {/* Period pill */}
                  <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-gray-100 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-green-500 pulse-dot" />
                    <p className="text-gray-500 text-xs">2-Month Agile Cycle</p>
                  </div>
                  {/* Badges */}
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                    Full Stack
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-50 text-purple-600 border border-purple-100">
                    MERN Stack
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-50 text-green-600 border border-green-100">
                    Production
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="p-6 md:p-8 space-y-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-400">
              Key Contributions
            </p>
            {achievements.map((item, i) => (
              <AchievementItem key={i} item={item} index={i} cardVisible={cardVisible} />
            ))}
          </div>

          {/* Tech Stack Footer */}
          <div className="px-6 md:px-8 pb-6 pt-2 border-t border-gray-100 flex flex-wrap items-center gap-2">
            <span className="text-xs text-gray-400 font-medium mr-1">Stack</span>
            {techStack.map((tech) => (
              <span
                key={tech}
                className="tech-chip text-xs font-semibold px-3 py-1.5 rounded-xl border border-gray-100 bg-gray-50 text-gray-500 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Internship;