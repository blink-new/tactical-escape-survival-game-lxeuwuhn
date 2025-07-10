import React from 'react'

const HERO_BG =
  'https://images.unsplash.com/photo-1685953055318-0080d30a4f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxwb3N0LWFwb2NhbHlwdGljJTIwY2l0eSUyMG5pZ2h0fGVufDB8MHx8fDE3NTIxMzI2MDF8MA&ixlib=rb-4.1.0&q=80&w=1080'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center min-h-[60vh] md:min-h-[70vh] bg-black"
        style={{
          backgroundImage: `linear-gradient(rgba(18,22,28,0.88),rgba(18,22,28,0.92)), url(${HERO_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="glass max-w-2xl mx-auto px-8 py-12 text-center animate-fade-in-up shadow-xl">
          <h1 className="hero-title text-5xl md:text-6xl font-extrabold mb-4 text-cyan-300 drop-shadow-lg tracking-wide">
            Tactical Escape
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 mb-8 font-medium">
            A Next-Generation Post-Apocalyptic Survival Game
          </p>
          <button className="cta-animate mt-4 px-8 py-3 bg-cyan-400 text-black rounded-lg text-lg font-bold shadow-lg hover:bg-cyan-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-300">
            Play Now - Free to Play
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 space-y-20 pb-16">
        <Section title="Overview" delay={0.1}>
          Tactical Escape is a hardcore survival game set in a fictional, post-apocalyptic world. Players must navigate a vast, dynamic environment, scavenging for resources, completing objectives, and fending off hostile enemies. With a strong focus on strategy, teamwork, and player choice, Tactical Escape revolutionizes the survival genre.
        </Section>
        <Section title="Setting" delay={0.2}>
          The game takes place in a dystopian future where a catastrophic event has ravaged the planet. Aurora City, once a thriving metropolis, now lies in ruins. Players explore the city, uncover secrets, and fight to survive.
        </Section>
        <Section title="Storyline" delay={0.3}>
          Players lead an elite survival team to uncover the truth behind the catastrophic event and restore order. Encounter various factions, some friendly, others hostile, who will aid or hinder progress.
        </Section>
        <Section title="Gameplay Mechanics" delay={0.4}>
          <ul className="list-disc list-inside space-y-2 text-lg text-cyan-100">
            <li>Realistic Survival: Scavenge food, water, and medical supplies to sustain your team.</li>
            <li>Strategic Combat: Engage in intense firefights with diverse enemies.</li>
            <li>Stealth & Strategy: Use stealth to evade or silently eliminate foes.</li>
            <li>Crafting & Upgrades: Craft items and improve skills to survive longer.</li>
          </ul>
        </Section>
        <Section title="Unique Features" delay={0.5}>
          <ul className="list-disc list-inside space-y-2 text-lg text-cyan-100">
            <li>Free Battle Pass: Exclusive rewards and cosmetics for all players.</li>
            <li>Cross-Platform Play: Team up across PC, Xbox, PlayStation, and Switch.</li>
            <li>Mod Support: Create and share custom content with a built-in API.</li>
          </ul>
        </Section>
      </main>

      <footer className="bg-black/80 text-cyan-200 py-8 text-center border-t border-cyan-900">
        <p className="text-sm">© 2024 Tactical Escape. All rights reserved.</p>
        <p className="text-xs mt-2 opacity-70">
          Photo by <a href="https://unsplash.com/@mirrors_are_more_fun" className="underline hover:text-cyan-300" target="_blank" rel="noopener noreferrer">Red Shuheart</a> on Unsplash
        </p>
      </footer>
    </div>
  )
}

function Section({ title, children, delay = 0 }) {
  return (
    <section
      className="glass p-8 md:p-12 rounded-2xl shadow-lg section-fade"
      style={{ animationDelay: `${delay}s` }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-300 tracking-wide">
        {title}
      </h2>
      <div className="text-lg md:text-xl text-cyan-100 leading-relaxed">
        {children}
      </div>
    </section>
  )
}
