import { FeaturesSection, HeroSection, PopularSection, TestemonialsSection } from "../components";
import { MainLayout } from "../layouts/Mainlayout";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection/>
      <FeaturesSection/>
      <PopularSection/>
      <TestemonialsSection/>
    </MainLayout>
  );
}
