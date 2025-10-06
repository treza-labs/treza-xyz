"use client";

import { useState } from "react";
import PageIllustration from "@/components/page-illustration";
import FooterSeparator from "@/components/footer-separator";

// Note: Metadata needs to be in a separate server component or layout
// since this is now a client component

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hello@trezalabs.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      console.log('Clipboard not available');
    }
  };
  return (
    <>
      <PageIllustration multiple />
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="pb-12 text-center">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                Contact us
              </h1>
              <div className="mx-auto max-w-3xl">
                <p className="text-xl text-indigo-200/65">
                  We have custom plans to power your business. Tell us your
                  needs, and we'll contact you shortly.
                </p>
              </div>
            </div>
            {/* Contact email */}
            <div className="mx-auto max-w-[640px]">
              <div className="rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-8 backdrop-blur-sm border border-gray-700/50">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4">
                    <p className="text-xl font-mono text-gray-200">hello@trezalabs.com</p>
                    <button
                      onClick={copyEmail}
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-700/50 border border-gray-600 text-gray-300 hover:bg-gray-600/50 hover:border-gray-500 hover:text-gray-200 transition-colors"
                      title={copied ? 'Copied!' : 'Copy email address'}
                    >
                      {copied ? (
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-indigo-200/65">
                  By contacting us, you agree to our{" "}
                  <a className="underline hover:no-underline" href="https://docs.trezalabs.com/terms-and-privacy/terms-of-service" target="_blank" rel="noopener noreferrer">
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a className="underline hover:no-underline" href="https://docs.trezalabs.com/terms-and-privacy/privacy" target="_blank" rel="noopener noreferrer">
                    Privacy policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSeparator />
    </>
  );
}
