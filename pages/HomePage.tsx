import MainLayout from "../components/MainLayout";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import QuickActions from "../components/QuickActions";

function HomePage() {
  return (
    <MainLayout>
      <Navbar />
      <HeroSection />
      <SearchBar />
      <QuickActions />
    </MainLayout>
  );
}

export default HomePage;
