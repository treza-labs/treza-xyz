import Image from "next/image";
import VideoThumb2 from "@/public/images/bg-chart.png";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src={VideoThumb2}
          alt="Hero background"
          fill
          className="object-contain opacity-40 scale-85"
          priority
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gray-950/75" />
        {/* Bottom gradient fade */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-950 via-gray-950/90 to-transparent" />
        {/* Left gradient fade */}
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent" />
        {/* Right gradient fade */}
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-950 via-gray-950/80 to-transparent" />
      </div>


      {/* Small cube top left - more random placement */}
      <div className="absolute left-[18%] top-[8%] opacity-18 pointer-events-none" aria-hidden="true">
        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="animate-[float_7.3s_ease-in-out_infinite]">
            <path d="M27 8 L42 16 L42 36 L27 44 L12 36 L12 16 Z" 
                  stroke="#6366f1" 
                  strokeWidth="0.8" 
                  fill="none"
                  className="drop-shadow-[0_0_8px_rgba(99,102,241,0.7)]" />
            <path d="M27 8 L27 26" stroke="#6366f1" strokeWidth="0.6" opacity="0.5" className="drop-shadow-[0_0_6px_rgba(99,102,241,0.5)]" />
            <path d="M12 16 L27 26" stroke="#6366f1" strokeWidth="0.6" opacity="0.5" className="drop-shadow-[0_0_6px_rgba(99,102,241,0.5)]" />
            <path d="M42 16 L27 26" stroke="#6366f1" strokeWidth="0.6" opacity="0.5" className="drop-shadow-[0_0_6px_rgba(99,102,241,0.5)]" />
          </g>
        </svg>
      </div>

      {/* Small cube top right - more random */}
      <div className="absolute right-[22%] top-[13%] opacity-16 pointer-events-none" aria-hidden="true">
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="animate-[float_9.7s_ease-in-out_infinite]">
            <path d="M21 6 L32 13 L32 27 L21 34 L10 27 L10 13 Z" 
                  stroke="#818cf8" 
                  strokeWidth="0.7" 
                  fill="none"
                  className="drop-shadow-[0_0_8px_rgba(129,140,248,0.7)]" />
            <path d="M21 6 L21 20" stroke="#818cf8" strokeWidth="0.5" opacity="0.5" className="drop-shadow-[0_0_6px_rgba(129,140,248,0.5)]" />
          </g>
        </svg>
      </div>

      {/* Small cube bottom left - random placement */}
      <div className="absolute left-[28%] bottom-[18%] opacity-13 pointer-events-none" aria-hidden="true">
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="animate-[float_8.2s_ease-in-out_infinite]">
            <path d="M19 4 L30 11 L30 26 L19 33 L8 26 L8 11 Z" 
                  stroke="#4f46e5" 
                  strokeWidth="0.7" 
                  fill="none"
                  className="drop-shadow-[0_0_8px_rgba(79,70,229,0.7)]" />
            <path d="M19 4 L19 19" stroke="#4f46e5" strokeWidth="0.5" opacity="0.5" className="drop-shadow-[0_0_6px_rgba(79,70,229,0.5)]" />
            <path d="M8 11 L19 19" stroke="#4f46e5" strokeWidth="0.5" opacity="0.4" className="drop-shadow-[0_0_6px_rgba(79,70,229,0.4)]" />
          </g>
        </svg>
      </div>

      {/* Tiny cube right side - asymmetric */}
      <div className="absolute right-[27%] top-[68%] opacity-11 pointer-events-none" aria-hidden="true">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="animate-[float_6.8s_ease-in-out_infinite]">
            <path d="M16 3 L25 9 L25 21 L16 27 L7 21 L7 9 Z" 
                  stroke="#818cf8" 
                  strokeWidth="0.6" 
                  fill="none"
                  className="drop-shadow-[0_0_6px_rgba(129,140,248,0.6)]" />
            <path d="M16 3 L16 15" stroke="#818cf8" strokeWidth="0.4" opacity="0.5" className="drop-shadow-[0_0_4px_rgba(129,140,248,0.4)]" />
          </g>
        </svg>
      </div>

      {/* Extra tiny cube - scattered */}
      <div className="absolute left-[72%] top-[35%] opacity-10 pointer-events-none" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="animate-[float_7.9s_ease-in-out_infinite]">
            <path d="M14 2 L22 7 L22 18 L14 23 L6 18 L6 7 Z" 
                  stroke="#4f46e5" 
                  strokeWidth="0.5" 
                  fill="none"
                  className="drop-shadow-[0_0_6px_rgba(79,70,229,0.6)]" />
            <path d="M14 2 L14 12.5" stroke="#4f46e5" strokeWidth="0.4" opacity="0.5" className="drop-shadow-[0_0_4px_rgba(79,70,229,0.4)]" />
          </g>
        </svg>
      </div>

      {/* Additional scattered cubes for atmosphere */}
      {/* Small cube lower left */}
      <div className="absolute left-[12%] bottom-[35%] opacity-12 pointer-events-none" aria-hidden="true">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="animate-[float_11.2s_ease-in-out_infinite]">
            <path d="M18 3 L28 9 L28 24 L18 30 L8 24 L8 9 Z" 
                  stroke="#818cf8" 
                  strokeWidth="0.6" 
                  fill="none"
                  className="drop-shadow-[0_0_7px_rgba(129,140,248,0.6)]" />
            <path d="M18 3 L18 16.5" stroke="#818cf8" strokeWidth="0.5" opacity="0.5" className="drop-shadow-[0_0_5px_rgba(129,140,248,0.5)]" />
          </g>
        </svg>
      </div>

      {/* Medium cube center left */}
      <div className="absolute left-[8%] top-[28%] opacity-14 pointer-events-none" aria-hidden="true">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="animate-[float_9.8s_ease-in-out_infinite]">
            <path d="M24 4 L38 12 L38 32 L24 40 L10 32 L10 12 Z" 
                  stroke="#6366f1" 
                  strokeWidth="0.7" 
                  fill="none"
                  className="drop-shadow-[0_0_8px_rgba(99,102,241,0.7)]" />
            <path d="M24 4 L24 22" stroke="#6366f1" strokeWidth="0.6" opacity="0.5" className="drop-shadow-[0_0_6px_rgba(99,102,241,0.5)]" />
            <path d="M10 12 L24 22" stroke="#6366f1" strokeWidth="0.5" opacity="0.4" />
          </g>
        </svg>
      </div>

      {/* Tiny cube upper right */}
      <div className="absolute right-[15%] top-[22%] opacity-11 pointer-events-none" aria-hidden="true">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="animate-[float_8.7s_ease-in-out_infinite]">
            <path d="M15 2 L23 7 L23 20 L15 25 L7 20 L7 7 Z" 
                  stroke="#4f46e5" 
                  strokeWidth="0.6" 
                  fill="none"
                  className="drop-shadow-[0_0_6px_rgba(79,70,229,0.6)]" />
            <path d="M15 2 L15 13.5" stroke="#4f46e5" strokeWidth="0.4" opacity="0.5" />
          </g>
        </svg>
      </div>

      {/* Small cube bottom center */}
      <div className="absolute left-[45%] bottom-[12%] opacity-13 pointer-events-none" aria-hidden="true">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="animate-[float_10.3s_ease-in-out_infinite]">
            <path d="M20 3 L32 10 L32 27 L20 34 L8 27 L8 10 Z" 
                  stroke="#818cf8" 
                  strokeWidth="0.7" 
                  fill="none"
                  className="drop-shadow-[0_0_7px_rgba(129,140,248,0.7)]" />
            <path d="M20 3 L20 18.5" stroke="#818cf8" strokeWidth="0.5" opacity="0.5" className="drop-shadow-[0_0_5px_rgba(129,140,248,0.5)]" />
          </g>
        </svg>
      </div>

      {/* Tiny cube far right */}
      <div className="absolute right-[8%] top-[48%] opacity-10 pointer-events-none" aria-hidden="true">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="animate-[float_7.4s_ease-in-out_infinite]">
            <path d="M13 2 L20 6 L20 17 L13 21 L6 17 L6 6 Z" 
                  stroke="#6366f1" 
                  strokeWidth="0.5" 
                  fill="none"
                  className="drop-shadow-[0_0_5px_rgba(99,102,241,0.6)]" />
          </g>
        </svg>
      </div>

      {/* Medium cube upper center */}
      <div className="absolute left-[52%] top-[15%] opacity-12 pointer-events-none" aria-hidden="true">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="animate-[float_9.1s_ease-in-out_infinite]">
            <path d="M22 3 L35 10 L35 29 L22 36 L9 29 L9 10 Z" 
                  stroke="#818cf8" 
                  strokeWidth="0.7" 
                  fill="none"
                  className="drop-shadow-[0_0_7px_rgba(129,140,248,0.7)]" />
            <path d="M22 3 L22 19.5" stroke="#818cf8" strokeWidth="0.5" opacity="0.5" className="drop-shadow-[0_0_5px_rgba(129,140,248,0.5)]" />
          </g>
        </svg>
      </div>


      {/* Floating particles */}
      <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 1000 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="particle-glow">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Floating particles with different sizes and animation speeds */}
          <circle cx="150" cy="200" r="2" fill="url(#particle-glow)" className="animate-[float_15s_ease-in-out_infinite]" />
          <circle cx="280" cy="450" r="1.5" fill="url(#particle-glow)" className="animate-[float_18s_ease-in-out_infinite]" />
          <circle cx="420" cy="150" r="2.5" fill="url(#particle-glow)" className="animate-[float_12s_ease-in-out_infinite]" />
          <circle cx="580" cy="380" r="1.8" fill="url(#particle-glow)" className="animate-[float_20s_ease-in-out_infinite]" />
          <circle cx="720" cy="250" r="2.2" fill="url(#particle-glow)" className="animate-[float_14s_ease-in-out_infinite]" />
          <circle cx="850" cy="520" r="1.6" fill="url(#particle-glow)" className="animate-[float_16s_ease-in-out_infinite]" />
          <circle cx="200" cy="600" r="2" fill="url(#particle-glow)" className="animate-[float_19s_ease-in-out_infinite]" />
          <circle cx="450" cy="680" r="1.7" fill="url(#particle-glow)" className="animate-[float_13s_ease-in-out_infinite]" />
          <circle cx="650" cy="580" r="2.3" fill="url(#particle-glow)" className="animate-[float_17s_ease-in-out_infinite]" />
          <circle cx="90" cy="420" r="1.9" fill="url(#particle-glow)" className="animate-[float_21s_ease-in-out_infinite]" />
          <circle cx="320" cy="280" r="2.1" fill="url(#particle-glow)" className="animate-[float_11s_ease-in-out_infinite]" />
          <circle cx="500" cy="500" r="1.4" fill="url(#particle-glow)" className="animate-[float_22s_ease-in-out_infinite]" />
          <circle cx="780" cy="420" r="2.4" fill="url(#particle-glow)" className="animate-[float_10s_ease-in-out_infinite]" />
          <circle cx="900" cy="180" r="1.5" fill="url(#particle-glow)" className="animate-[float_23s_ease-in-out_infinite]" />
          <circle cx="60" cy="650" r="2" fill="url(#particle-glow)" className="animate-[float_15s_ease-in-out_infinite]" />
          <circle cx="380" cy="90" r="1.8" fill="url(#particle-glow)" className="animate-[float_19s_ease-in-out_infinite]" />
          <circle cx="670" cy="720" r="2.2" fill="url(#particle-glow)" className="animate-[float_14s_ease-in-out_infinite]" />
          <circle cx="820" cy="350" r="1.6" fill="url(#particle-glow)" className="animate-[float_16s_ease-in-out_infinite]" />
          <circle cx="240" cy="540" r="2.5" fill="url(#particle-glow)" className="animate-[float_12s_ease-in-out_infinite]" />
          <circle cx="550" cy="220" r="1.9" fill="url(#particle-glow)" className="animate-[float_18s_ease-in-out_infinite]" />
        </svg>
      </div>

      {/* Two column layout container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12 md:py-20 min-h-[80vh]">
          
          {/* Left column - Content */}
          <div className="text-center lg:text-left">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-3xl font-semibold text-transparent md:text-5xl lg:text-6xl"
              data-aos="fade-up"
            >
              Privacy infrastructure for crypto and finance
            </h1>
            <div className="mx-auto lg:mx-0 max-w-2xl">
              <p
                className="mb-8 text-lg md:text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Deploy your applications in hardware-protected enclaves with cryptographic privacy guarantees. Run containers, APIs and AI workloads with simple, privacy-focused developer tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group w-full sm:w-auto bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                    href="https://app.trezalabs.com"
                  >
                    <span className="relative inline-flex items-center">
                      Get Started
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        {'->'}
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={500}>
                  <a
                    className="btn relative w-full sm:w-auto bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
                    href="https://docs.trezalabs.com"
                  >
                   Read The Docs
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Hero cube image */}
          <div className="relative flex items-center justify-center lg:justify-end" data-aos="fade-left" data-aos-delay={300}>
            <div className="relative w-full max-w-lg aspect-square pointer-events-none" aria-hidden="true">
              <svg width="100%" height="100%" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="glow-right">
                    <feGaussianBlur stdDeviation="12" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <linearGradient id="indigo-glow-right" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#818cf8" stopOpacity="1" />
                    <stop offset="50%" stopColor="#6366f1" stopOpacity="1" />
                    <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                
                {/* Single static cube with improved shading - oriented upward */}
                <g filter="url(#glow-right)">
                  {/* Top face shading - most prominent (lighter) */}
                  <path d="M300 80 L520 160 L300 240 L80 160 Z" 
                        fill="rgba(129,140,248,0.25)"
                        stroke="none" />
                  
                  {/* Left face shading - medium dark */}
                  <path d="M80 160 L300 240 L300 480 L80 400 Z" 
                        fill="rgba(79,70,229,0.12)"
                        stroke="none" />
                  
                  {/* Right face shading - darkest */}
                  <path d="M300 240 L520 160 L520 400 L300 480 Z" 
                        fill="rgba(79,70,229,0.18)"
                        stroke="none" />
                  
                  {/* Cube outline */}
                  <path d="M300 80 L520 160 L520 400 L300 480 L80 400 L80 160 Z" 
                        stroke="url(#indigo-glow-right)" 
                        strokeWidth="3.5" 
                        fill="none"
                        className="drop-shadow-[0_0_35px_rgba(99,102,241,1)]" />
                  
                  {/* Center vertical line - very visible */}
                  <path d="M300 80 L300 240" 
                        stroke="url(#indigo-glow-right)" 
                        strokeWidth="3" 
                        opacity="1"
                        className="drop-shadow-[0_0_30px_rgba(129,140,248,1)]" />
                  
                  {/* Vertical line from center to bottom */}
                  <path d="M300 240 L300 480" 
                        stroke="url(#indigo-glow-right)" 
                        strokeWidth="3" 
                        opacity="0.85"
                        className="drop-shadow-[0_0_28px_rgba(99,102,241,0.9)]" />
                  
                  {/* Left internal line - very visible */}
                  <path d="M80 160 L300 240" 
                        stroke="url(#indigo-glow-right)" 
                        strokeWidth="3" 
                        opacity="1"
                        className="drop-shadow-[0_0_30px_rgba(129,140,248,1)]" />
                  
                  {/* Right internal line - very visible */}
                  <path d="M520 160 L300 240" 
                        stroke="url(#indigo-glow-right)" 
                        strokeWidth="3" 
                        opacity="1"
                        className="drop-shadow-[0_0_30px_rgba(129,140,248,1)]" />
                </g>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
