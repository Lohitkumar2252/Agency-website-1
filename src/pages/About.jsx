import { Link } from "react-router";

const values = [
  {
    num: "01",
    title: "Performance First",
    desc: "Every design decision starts and ends with the athlete. Comfort, responsiveness, and durability aren't optional — they're the baseline.",
  },
  {
    num: "02",
    title: "Relentless Innovation",
    desc: "Our R&D labs never sleep. From ReactX foam to self-lacing systems, we invest in the future of human movement.",
  },
  {
    num: "03",
    title: "Planet & People",
    desc: "By 2030, every product line will use at least 50% recycled materials. We're building for the next generation of athletes — and their world.",
  },
];

const milestones = [
  { year: "2009", event: "Stride founded in a small Pune workshop, built around one idea: shoes engineered for how people actually move." },
  { year: "2014", event: "The Wing logo is introduced, and Stride ships its first international order to 12 countries." },
  { year: "2019", event: "ReactX foam technology launches, redefining cushioning across every Stride running silhouette." },
  { year: "2025", event: "Stride SS25 launches. Sixty silhouettes, six categories, one mission: move further." },
];

export default function About() {
  return (
    <div className="bg-[#0A0A0A] text-[#FAFAFA] min-h-screen font-['Barlow',sans-serif] container">
      
      <section className="relative overflow-hidden px-6 md:px-12 py-20">
        <span
          aria-hidden
          className="hidden md:block absolute top-1/2 -right-10 -translate-y-1/2 text-[#111] font-black uppercase whitespace-nowrap pointer-events-none select-none"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "180px" }}
        >
          JUST DO IT
        </span>

        <div className="relative z-5">
          <h1
            className="font-black uppercase leading-[0.95] max-w-3xl mb-8"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(48px,7vw,80px)" }}
          >
            We Don't <span className="text-[#E5281A]">Make</span> Shoes.
            <br />
            We Make Athletes.
          </h1>
          <p className="text-lg text-[#888] max-w-xl leading-relaxed">
            Born from the track, refined in the lab, and tested on every
            surface imaginable — our obsession is turning potential into
            performance. Since 2009, we've believed that athletic greatness
            isn't reserved for the chosen few. It's earned, one stride at a
            time.
          </p>
        </div>
      </section>

    
      <section className="px-2 md:px-1 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-8">
          {values.map((v, i) => (
            <div
              key={v.num}
              className={`p-10 md:p-12 ${i === 1 ? "bg-[#111]" : "bg-[#1A1A1A]"}`}
            >
              <div
                className="font-black text-[#E5281A] opacity-30 leading-none mb-4"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "72px" }}
              >
                {v.num}
              </div>
              <h3
                className="font-black uppercase mb-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "28px" }}
              >
                {v.title}
              </h3>
              <p className="text-sm text-[#888] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="px-6 md:px-12 py-20 border-t border-[#1a1a1a]">
        <h2
          className="font-black uppercase mb-12"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "48px" }}
        >
          Our <span className="text-[#E5281A]">Milestones</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {milestones.map((m) => (
            <div key={m.year} className="relative border-l border-[#2a2a2a] p-6 md:p-8">
              <span className="absolute -left-[5px] top-6 md:top-8 w-[9px] h-[9px] rounded-full bg-[#E5281A]" />
              <div
                className="font-black text-[#E5281A] leading-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "40px" }}
              >
                {m.year}
              </div>
              <p className="text-sm text-[#888] mt-2 leading-relaxed">{m.event}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="px-6 md:px-12 pb-20">
        <Link
          to="/"
          className="inline-block bg-[#E5281A] hover:opacity-85 transition-opacity text-white font-bold uppercase tracking-widest px-10 py-4"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "15px", letterSpacing: "0.15em" }}
        >
          Shop
        </Link>
      </section>
    </div>
  );
}
