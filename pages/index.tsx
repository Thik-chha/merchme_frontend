import Head from "next/head";
import { FeaturesSection, HeroSection, PopularSection, TestemonialsSection } from "../components";
import { MainLayout } from "../layouts/Mainlayout";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Home | Fanpasal</title>
      </Head>
      <HeroSection/>
      <FeaturesSection/>
      <PopularSection/>
      <TestemonialsSection/>
    </MainLayout>
  );
}
