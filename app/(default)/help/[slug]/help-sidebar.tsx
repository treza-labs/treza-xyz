"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HelpSidebar() {
  const pathname = usePathname();

  const links = [
    {
      name: "FAQ's - General Topics",
      href: "/help/frequently-asked-questions",
    },
    {
      name: "What is Open PRO",
      href: "/help/what-is-open-pro",
    },
    {
      name: "Open PRO plan’s features",
      href: "/help/open-pro-plans-features",
    },
    {
      name: "Get started",
      href: "/help/get-started",
    },
    {
      name: "Payments FAQ’s",
      href: "/help/payments-faqs",
    },
  ];

  return (
    <aside className="mb-16 md:mb-0 md:mr-10 md:w-60 md:shrink-0">
      <nav className="relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 px-5 py-3 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
        <ul className="divide-y text-sm">
          {links.map((link, linkIndex) => (
            <li
              key={linkIndex}
              className="py-2 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]"
            >
              <Link
                className={`group flex items-center transition ${pathname === link.href ? "text-indigo-500" : "text-indigo-200/65 hover:text-indigo-500"}`}
                href={link.href}
              >
                <span>{link.name}</span>
                <svg
                  className="ml-2 h-3 w-3 shrink-0 transform fill-current opacity-0 transition group-hover:translate-x-1 group-hover:text-indigo-600 group-hover:opacity-100"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
