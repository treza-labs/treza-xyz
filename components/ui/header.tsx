"use client";

import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/dropdown";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
              {/* <li>
                <Link
                  href="/pricing"
                  className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3"
                >
                  Pricing
                </Link>
              </li> */}
              <li>
                <Link
                  href="/roadmap"
                  className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3"
                >
                  Roadmap
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/agents"
                  className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3"
                >
                  Agents
                </Link>
              </li> */}
              <li>
                <Link
                                          href="https://docs.trezalabs.com"
                  className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3"
                >
                  Team
                </Link>
              </li>
              {/* 1st level: hover */}
              <Dropdown title="Developers">
                {/* 2nd level: hover */}
                <li>
                  <Link
                                                href="https://docs.trezalabs.com/developers/rest-api"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-white hover:text-indigo-500"
                  >
                    REST API
                  </Link>
                </li>
                <li>
                  <Link
                                                href="https://docs.trezalabs.com/developers/treza-sdk"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-white hover:text-indigo-500"
                  >
                    Treza SDK
                  </Link>
                </li>
                                <li>
                  <Link
                    href="https://docs.trezalabs.com/developers/examples"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-white hover:text-indigo-500"
                  >
                    Examples
                  </Link>
                </li>
                <li>
                  <hr className="my-2 border-gray-700" />
                </li>
                <li>
                  <Link
                    href="https://github.com/treza-labs"
                    className="flex items-center gap-2 rounded-lg pl-2 pr-1 py-1.5 text-sm text-white hover:text-indigo-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                    </svg>
                    GitHub
                  </Link>
                </li>
              </Dropdown>
            </ul>
          </nav>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            {/* <li>
              <Link
                href="/signin"
                className="btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
              >
                Sign In
              </Link>
            </li> */}
            <li>
              <Link
                                  href="https://app.trezalabs.com"
                className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
              >
                Launch App
              </Link>
            </li>
          </ul>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
