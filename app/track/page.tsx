"use client";

import { useSearchParams } from "next/navigation";

export default function TrackPage() {
  const searchParams = useSearchParams();
  const ref = searchParams.get("q");

  return (
    <main className="min-h-screen bg-[#0b0f17] text-white">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="mb-2 text-sm uppercase tracking-widest text-white/50">
          CorridorTrack
        </div>

        <h1 className="text-3xl font-semibold md:text-4xl">
          Shipment status
        </h1>

        <p className="mt-2 text-white/60">
          Real-time corridor visibility (demo)
        </p>

        {/* Tracking Card */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm text-white/50">Reference</div>
          <div className="mt-1 text-xl font-medium">
            {ref || "—"}
          </div>

          <div className="mt-8 space-y-4">
            <Row label="Current status" value="In transit" />
            <Row label="Last known event" value="Vessel update received" />
            <Row label="Next checkpoint" value="Jebel Ali (transshipment)" />
            <Row label="Risk signal" value="None detected" />
          </div>

          <div className="mt-8 rounded-xl bg-black/30 p-4 text-sm text-white/70">
            This is a demo tracking view.
            <br />
            Live data, alerts, and WhatsApp updates will appear here.
          </div>
        </div>

        {/* WhatsApp CTA */}
        <a
          href={`https://wa.me/18303471604?text=${encodeURIComponent(
            `Track ${ref || "my container"}`
          )}`}
          className="mt-8 inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-sm hover:bg-white/10"
        >
          Track this shipment on WhatsApp
        </a>
      </div>
    </main>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/20 px-4 py-3">
      <div className="text-sm text-white/60">{label}</div>
      <div className="text-sm font-medium text-white/85">{value}</div>
    </div>
  );
}
