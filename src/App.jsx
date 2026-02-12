import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroCard } from "./components/HeroCard";

function App() {
  return (
    <div>
      <Header />
      <HeroCard />
      <HeroCard />
      <HeroCard />
      <Footer />
    </div>
  );
}

export default App;
