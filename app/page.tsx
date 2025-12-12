"use client";

import { useState } from "react";

export default function HomePage() {
  const [ref, setRef] = useState("");

  return (
    <main className="min-h-screen bg-[#0b0f17] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#101726] via-[#0b0f17] to-black" />

        {/* Grain overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "url('/grain.png')",
            backgroundSize: "cover",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-widest text-white/60">
              Jebel Ali → Mombasa → Nairobi
            </p>

            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Know where your container is.
              <br />
              <span className="text-white/70">
                Before delays cost you money.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-white/70">
              CorridorTrack gives importers and clearing agents
              real-time visibility across the East Africa corridor —
              vessel movement, port events, and timing that actually matters.
            </p>

            {/* Input */}
            <div className="mt-10 flex max-w-xl gap-3">
              <input
                value={ref}
                onChange={(e) => setRef(e.target.value)}
                placeholder="Enter container or BL number"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-white/30"
              />
              <button
                onClick={() =>
                  alert(
                    ref
                      ? `Tracking ${ref} (demo)`
                      : "Enter a container or BL number"
                  )
                }
                className="rounded-xl bg-white px-6 py-4 font-medium text-black hover:opacity-90"
              >
                Track
              </button>
            </div>

            <p className="mt-4 text-sm text-white/50">
              No sign-up required · WhatsApp updates available
            </p>
          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="border-t border-white/10 bg-black py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
          <Value
            title="Port-aware timing"
            body="Know when your container is discharged, when free time starts, and when delays become charges."
          />
          <Value
            title="Corridor-specific"
            body="Built for the Jebel Ali → Mombasa → Nairobi route — not generic global tracking noise."
          />
          <Value
            title="WhatsApp first"
            body="Updates where your ops team already works. No dashboards to babysit."
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/40">
        CorridorTrack © {new Date().getFullYear()}
      </footer>
    </main>
  );
}

function Value({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-2 text-white/70">{body}</p>
    </div>
  );
}
