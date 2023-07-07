import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureOne from './components/FeatureOne';
import DailyStats from './components/DailyStats';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <DailyStats />
      <FeatureOne />
    </div>
  );
}

export default App;
