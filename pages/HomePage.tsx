import SearchBar from "../components/SearchBar";
import MainLayout from "../components/MainLayout";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import QuickActions from "../components/QuickActions";

function HomePage() {
  return (
    <MainLayout>
      <Navbar />
      <HeroSection />
      <QuickActions />
    </MainLayout>
  );
}

export default HomePage;
