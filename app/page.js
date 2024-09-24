import AboutMe from './components/AboutMe';
import AdditionalSkills from './components/AdditionalSkills';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import NavigationBar from './components/NavigationBar';
import PortFolio from './components/PortFolio';
import SkillsShowcase from './components/SkillsShowcase';
import WorkExperience from './components/WorkExperience';

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <HeroBanner />
      <AboutMe />
      <SkillsShowcase />

      <AdditionalSkills />
      <PortFolio />
      <WorkExperience />
      <Footer />
    </main>
  );
}
