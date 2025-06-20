import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center gap-3" aria-label="Treza">
      <Image src={logo} alt="Treza Labs" width={32} height={32} />
      <span className="text-xl font-semibold text-white tracking-widest">
        T R E Z A
      </span>
    </Link>
  );
}
