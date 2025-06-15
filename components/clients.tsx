import Image from 'next/image'

import Client01 from '@/public/images/Claude_Logo_0.svg' // claude
import Client02 from '@/public/images/openai-white-lockup.svg' // openai
import Client03 from '@/public/images/solanaWordMark.svg' // solana
import Client04 from '@/public/images/eth-logo-white.svg' // ethereum

const logos = [
  { src: Client01, alt: "Claude", height: 35 },
  { src: Client02, alt: "OpenAI", height: 35 },
  { src: Client03, alt: "Solana", height: 20 },
  { src: Client04, alt: "Ethereum", height: 35 },
];

export default function Clients() {
  return (
    <section id="integrations">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="aos-init aos-animate animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl pb-4">
              Integrated Across the Ecosystem
            </h2>
            <p className="text-lg text-indigo-200/65">
              Treza connects seamlessly with the tools, data, and chains that power your crypto stack—from Solana to Ethereum and everything in between.
            </p>
          </div>
          {/* Items */}
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {logos.map((logo, index) => (
              <div key={index} className="relative flex h-24 items-center justify-center rounded-2xl p-2 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <Image src={logo.src} alt={logo.alt} height={logo.height || 25} className="max-w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
