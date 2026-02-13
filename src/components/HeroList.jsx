import { HeroCard } from "./HeroCard";

function HeroList({ heroes, onDelete, onLevelUp, onCure }) {
  return (
    <div className="hero-list-container">
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          name={hero.name}
          heroClass={hero.heroClass}
          level={hero.level}
          hp={hero.hp}
          attack={hero.attack}
          onDelete={() => onDelete(hero.id)}
          onLevelUp={() => onLevelUp(hero.id)}
          onCure={() => onCure(hero.id)}
        />
      ))}
    </div>
  );
}

export { HeroList };
