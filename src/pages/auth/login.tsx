import { useState } from "react";
import { GetServerSidePropsContext } from "next";
import { signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn("credentials", { username, password });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 min-h-screen">
      <button
        onClick={() => signIn("github")}
        className="bg-slate-800 text-slate-50 p-4 font-medium rounded"
      >
        Sign in with Github
      </button>

      <br />
      <p>Or</p>
      <br />

      <form className="flex flex-col gap-4" onSubmit={handleLogin}>
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            className="border border-slate-300 rounded"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="border border-slate-300 rounded"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-300 font-bold p-2 rounded disabled:bg-blue-100 disabled:text-slate-600"
          disabled={!username || !password}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return { redirect: { destination: "/" } };
  }

  return { props: {} };
}
