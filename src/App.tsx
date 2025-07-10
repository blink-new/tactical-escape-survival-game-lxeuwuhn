import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          Tactical Escape
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A Next-Generation Post-Apocalyptic Survival Game
        </p>
        <button className="mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-md text-lg font-semibold hover:bg-primary-600 transition">
          Play Now - Free to Play
        </button>
      </header>

      <main className="max-w-5xl mx-auto px-6 space-y-16 pb-16">
        <section>
          <h2 className="text-3xl font-bold mb-4">Overview</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Tactical Escape is a hardcore survival game set in a fictional, post-apocalyptic world. Players must navigate a vast, dynamic environment, scavenging for resources, completing objectives, and fending off hostile enemies. With a strong focus on strategy, teamwork, and player choice, Tactical Escape revolutionizes the survival genre.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Setting</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The game takes place in a dystopian future where a catastrophic event has ravaged the planet. Aurora City, once a thriving metropolis, now lies in ruins. Players explore the city, uncover secrets, and fight to survive.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Storyline</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Players lead an elite survival team to uncover the truth behind the catastrophic event and restore order. Encounter various factions, some friendly, others hostile, who will aid or hinder progress.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Gameplay Mechanics</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
            <li>Realistic Survival: Scavenge food, water, and medical supplies to sustain your team.</li>
            <li>Strategic Combat: Engage in intense firefights with diverse enemies.</li>
            <li>Stealth & Strategy: Use stealth to evade or silently eliminate foes.</li>
            <li>Crafting & Upgrades: Craft items and improve skills to survive longer.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Unique Features</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
            <li>Free Battle Pass: Exclusive rewards and cosmetics for all players.</li>
            <li>Cross-Platform Play: Team up across PC, Xbox, PlayStation, and Switch.</li>
            <li>Mod Support: Create and share custom content with a built-in API.</li>
          </ul>
        </section>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-8 text-center">
        <p className="text-sm">© 2024 Tactical Escape. All rights reserved.</p>
      </footer>
    </div>
  )
}
