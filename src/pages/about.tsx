import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "@/components/Layout";

const AboutPage: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">About App</h1>
      <p>
        Version <span className="font-medium">0.0.1</span>
      </p>
    </div>
  );
};

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AboutPage;
