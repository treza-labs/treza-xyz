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
                  href="/team"
                  className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3"
                >
                  Team
                </Link>
              </li>
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
                  href="https://treza.gitbook.io/treza"
                  className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3"
                >
                  Documentation
                </Link>
              </li>
              {/* 1st level: hover */}
              <Dropdown title="Developers">
                {/* 2nd level: hover */}
                <li>
                  <Link
                    href="https://treza.gitbook.io/treza"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-white hover:text-indigo-500"
                  >
                    REST API
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/treza-labs/treza-sdk"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-white hover:text-indigo-500"
                  >
                    Treza SDK
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/treza-labs/treza-examples"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-white hover:text-indigo-500"
                  >
                    Examples
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
                href="https://app.treza.xyz"
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
