import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/" className="flex space-x-2">
        <Image
          alt="header text"
          src="/bed.svg"
          className="sm:w-10 sm:h-10 w-9 h-9"
          width={24}
          height={24}
        />
        <h1 className="sm:text-3xl text-xl font-bold ml-2 tracking-tight">
          Ainterior
        </h1>
      </Link>
    </header>
  );
}


