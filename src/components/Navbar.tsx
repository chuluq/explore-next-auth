import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-200 px-4 py-2">
      <ul className="flex items-center space-x-4 text-xl font-medium">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/auth/login">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
}
