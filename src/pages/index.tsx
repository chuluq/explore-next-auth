import { ReactElement, useEffect, useState } from "react";
// import { GetServerSidePropsContext } from "next";
// import { getServerSession } from "next-auth";
import { IdleTimerProvider, useIdleTimer } from "react-idle-timer";
import { signOut, useSession } from "next-auth/react";

// import { authOptions } from "./api/auth/[...nextauth]";
import type { NextPageWithLayout } from "./_app";

import Layout from "@/components/Layout";
import Prompt from "@/components/Prompt";
import CountDown from "@/components/CountDown";

const timeout = 10_000;
const promptBeforeIdle = 4_000;

const HomePage: NextPageWithLayout = () => {
  const { data: session } = useSession();

  const [state, setState] = useState<string>("Active");
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onIdle = () => {
    signOut();
    setState("Idle");
    setOpenModal(false);
  };

  const onActive = () => {
    setState("Active");
    setOpenModal(false);
  };

  const onPrompt = () => {
    setState("Prompted");
    setOpenModal(true);
  };

  return (
    <IdleTimerProvider
      timeout={timeout}
      promptBeforeIdle={promptBeforeIdle}
      throttle={500}
      onPrompt={onPrompt}
      onIdle={onIdle}
      onActive={onActive}
      disabled={!session}
    >
      <h1 className="text-2xl font-bold">Home Page</h1>
      <h2>Confirm Prompt</h2>
      <br />
      <p>Current State: {state}</p>
      <CountDown />
      <Prompt open={openModal} />
    </IdleTimerProvider>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const session = await getServerSession(context.req, context.res, authOptions);

//   if (!session) {
//     return { redirect: { destination: "/auth/login" } };
//   }

//   return { props: {} };
// }

export default HomePage;
