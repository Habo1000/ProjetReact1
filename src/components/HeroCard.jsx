import { Card } from "./Card";
import { Details } from "./Details";
import { useState } from "react";

function HeroCard({
  name,
  heroClass,
  level = 1,
  hp,
  attack,
  onDelete,
  onLevelUp,
  onCure,
}) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Card
      children={
        <div className="container">
          <i
            className="fa-solid fa-angle-down"
            id="hero-card-angle-down"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          ></i>

          <h2>{name}</h2>

          <Details
            onClick={isOpen}
            heroClass={heroClass}
            level={level}
            hp={hp}
            attack={attack}
            onDelete={onDelete}
            onLevelUp={onLevelUp}
            onCure={onCure}
          />
        </div>
      }
    />
  );
}

export { HeroCard };
