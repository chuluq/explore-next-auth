import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-400 p-2">
      <ul className="flex justify-evenly text-xl font-bold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/api/auth/signin">Sign In</Link>
        </li>
        <li>
          <Link href="/api/auth/signout">Sign Out</Link>
        </li>
      </ul>
    </nav>
  );
}
