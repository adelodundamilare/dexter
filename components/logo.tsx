import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" aria-label="Back to homepage">
      <img src="/logo.png" alt="Connect Anywhere Logo" className="w-[100px]" />
    </Link>
  );
}
