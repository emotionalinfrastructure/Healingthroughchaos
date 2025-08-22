'use client';
import './globals.css';
import React from 'react';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-950 text-neutral-200">
        <header className="border-b border-neutral-800 p-4 flex justify-between items-center">
          <Link href="/" className="font-semibold">Healing Through Chaos</Link>
          <nav className="flex gap-4 text-sm text-neutral-300">
            <Link href="/proof">Proof</Link>
            <Link href="/media-kit">Media Kit</Link>
            <Link href="/kits">Kits</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main className="p-6">{children}</main>
        <footer className="border-t border-neutral-800 p-4 text-sm text-neutral-400 text-center">
          © {new Date().getFullYear()} Healing Through Chaos. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
