import "./App.css";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroList } from "./components/HeroList";
import { AddHeroForm } from "./components/AddHeroForm";
// import { HeroCard } from "./components/HeroCard";

const initialHeroes = [
  {
    id: 1,
    name: "Orin-7",
    heroClass: "Guerrier",
    level: 11,
    hp: 100,
    attack: 30,
  },
  { id: 2, name: "Luna-3", heroClass: "Voleur", level: 3, hp: 100, attack: 25 },
  { id: 3, name: "Upon-9", heroClass: "Archer", level: 7, hp: 10, attack: 20 },
  {
    id: 4,
    name: "Zara-5",
    heroClass: "Lancier",
    level: 15,
    hp: 80,
    attack: 40,
  },
  { id: 5, name: "Kara-2", heroClass: "Archer", level: 5, hp: 60, attack: 50 },
];

function App() {
  const [heroes, setHeroes] = useState(() => {
    const savedHeroes = localStorage.getItem("heroes");
    return savedHeroes ? JSON.parse(savedHeroes) : initialHeroes;
  });
  function handleDelete(heroId) {
    setHeroes(heroes.filter((hero) => hero.id !== heroId));
  }
  function handleLevelUp(heroId) {
    setHeroes(
      heroes.map((hero) => {
        return hero.id === heroId ? { ...hero, level: hero.level + 1 } : hero;
      }),
    );
  }
  function handleCure(heroId) {
    setHeroes(
      heroes.map((hero) => {
        return hero.id === heroId ? { ...hero, hp: 100 } : hero;
      }),
    );
  }
  function handleAddHero(hero) {
    setHeroes([...heroes, hero]);
  }
  useEffect(() => {
    localStorage.setItem("heroes", JSON.stringify(heroes));
  }, [heroes]);
  return (
    <div>
      <Header
        heroesNumber={heroes.length}
        sumLevelHeroes={heroes.reduce((sum, hero) => sum + hero.level, 0)}
      />
      {heroes.length === 0 ? (
        <p>Aucun héros dans l'équipe</p>
      ) : (
        <>
          <HeroList
            heroes={heroes}
            onDelete={handleDelete}
            onLevelUp={handleLevelUp}
            onCure={handleCure}
          />
        </>
      )}
      <AddHeroForm onAdd={handleAddHero} />

      <Footer />
    </div>
  );
}

export default App;
