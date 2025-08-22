import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Build Your Recovery Like Infrastructure — <span className="text-cyan-300">Stable. Ethical. Yours.</span></h1>
      <p className="text-neutral-300">Systems-first recovery tools and a public ledger of authorship.</p>
      <div className="flex gap-4">
        <Link href="/kits" className="px-4 py-2 rounded bg-cyan-400/20 text-white">Explore Kits</Link>
        <Link href="/proof" className="px-4 py-2 rounded bg-neutral-800 text-white">View Proof</Link>
      </div>
    </div>
  );
}
