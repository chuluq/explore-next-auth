import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import type { Session } from "next-auth";

import Navbar from "@/components/Navbar";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <main className="flex justify-center items-start p-4">
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
