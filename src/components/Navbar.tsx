import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data } = useSession();

  return (
    <nav className="bg-blue-200 px-4 py-2">
      <ul className="flex items-center space-x-4 text-xl font-medium">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        {data ? (
          <li>
            <button onClick={() => signOut()}>Sign Out</button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}
