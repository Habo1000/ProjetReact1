import { Badge } from "./Badge";
function Details({
  onClick,
  heroClass,
  level,
  hp,
  attack,
  onDelete,
  onLevelUp,
  onCure,
}) {
  return onClick ? (
    <div className="details">
      <p>{heroClass}</p>
      <Badge level={level} />
      <p>Points de vie: {hp}</p>
      <p>Attaque: {attack}</p>
      <div className="buttons">
        <button onClick={onDelete}>Supprimer</button>
        <button onClick={onLevelUp}>Niveau +1</button>
        <button onClick={onCure}>Soigner</button>
      </div>
    </div>
  ) : null;
}

export { Details };
