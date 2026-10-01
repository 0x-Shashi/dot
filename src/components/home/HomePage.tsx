'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { DitherCanvas } from './DitherCanvas';

interface HomePageProps {
  onNavigateToDashboard: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigateToDashboard }) => {
  return (
    <div className="home-page-root">
      <main className="left">
        <div>
          <p className="pre">
            <b>Shashi</b> presents
          </p>
          <h1>
            <span className="l1">Awesome</span>
            <span className="l2">Dots.</span>
          </h1>
          <p className="sub">
            A curated collection of architectures, tools, policies, and workflows for the OpenAI Dots ecosystem.
          </p>
          <div className="actions">
            {/* Animated pill & sliding arrow button based on DESIGN/Button */}
            <button
              type="button"
              onClick={onNavigateToDashboard}
              className="group flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 font-normal outline-none transition-transform hover:scale-[1.02] active:scale-[0.98]"
              title="Open Dashboard"
            >
              <span className="flex h-12 items-center justify-center rounded-full bg-[#c9ff0f] px-7 text-[#0a0a0a] font-mono text-xs font-bold tracking-widest uppercase transition-colors duration-500 ease-in-out group-hover:bg-[#aaaef8]">
                Dashboard
              </span>
              <div className="relative flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#c9ff0f] text-[#0a0a0a] transition-colors duration-500 ease-in-out group-hover:bg-[#aaaef8]">
                <ArrowUpRight className="h-5 w-5 transition-transform duration-500 ease-in-out group-hover:translate-x-8 group-hover:-translate-y-8" />
                <ArrowUpRight className="absolute h-5 w-5 -translate-x-8 translate-y-8 transition-transform duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
            </button>
          </div>
        </div>
      </main>

      <aside className="right" aria-hidden="true">
        {/* Interactive Dither Wave Effect matching our template palette */}
        <DitherCanvas
          waveSpeed={0.05}
          waveFrequency={3.0}
          waveAmplitude={0.3}
          waveColor={[0.788, 1.0, 0.059]} // #c9ff0f Lime Green
          backgroundColor={[0.667, 0.682, 0.973]} // #aaaef8 Periwinkle Blue
          colorNum={4.0}
          pixelSize={2.0}
          enableMouseInteraction={true}
          mouseRadius={1.0}
        />
      </aside>
    </div>
  );
};
