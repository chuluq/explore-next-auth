import { ReactElement } from "react";
// import { GetServerSidePropsContext } from "next";
// import { getServerSession } from "next-auth";

// import { authOptions } from "./api/auth/[...nextauth]";
import { NextPageWithLayout } from "./_app";

import Layout from "@/components/Layout";

const ProfilePage: NextPageWithLayout = () => {
  return <h1 className="text-2xl font-bold">Profile Page</h1>;
};

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const session = await getServerSession(context.req, context.res, authOptions);

//   if (!session) {
//     return { redirect: { destination: "/auth/login" } };
//   }

//   return { props: {} };
// }

export default ProfilePage;
