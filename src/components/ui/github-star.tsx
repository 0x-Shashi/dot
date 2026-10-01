'use client';

import React from 'react';

export function StarOnGithub() {
  return (
    <a
      href="https://github.com/0x-Shashi/awesome-dots"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex h-9 cursor-pointer items-center justify-center rounded-full border-0 bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box] px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-all duration-200 [border:calc(0.08*1rem)_solid_transparent] shadow-sm hover:scale-[1.03] active:scale-95"
      title="Star on GitHub"
    >
      <div className="flex items-center gap-1.5 text-[#0a0a0a]">
        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
        <span className="font-mono text-xs font-semibold">Star on GitHub</span>
      </div>
      <div className="ml-2 flex items-center gap-1 text-xs pl-2 border-l border-[#e8e8e8]">
        <svg
          className="size-3.5 text-amber-500 fill-amber-400 transition-all duration-200 group-hover:scale-110"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path
            clipRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            fillRule="evenodd"
          />
        </svg>
        <span className="font-mono font-bold text-[#0a0a0a] tabular-nums text-xs">
          10
        </span>
      </div>
    </a>
  );
}

export default StarOnGithub;
