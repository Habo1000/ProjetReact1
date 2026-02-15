import { useState } from "react";
function AddHeroForm({ onAdd }) {
  const [name, setName] = useState("");
  const [heroClass, setHeroClass] = useState("Guerrier");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd({
      id: Date.now(),
      name,
      heroClass,
      level: 1,
      hp: 100,
      attack: 10,
    });
    setName("");
    setHeroClass("Guerrier");
  }
  return (
    <>
      <div className="separator" />
      <form onSubmit={handleSubmit}>
        <p>Ajouter un héros</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom du héros"
        />
        <select
          value={heroClass}
          onChange={(e) => setHeroClass(e.target.value)}
        >
          <option>Guerrier</option>
          <option>Archer</option>
          <option>Voleur</option>
          <option>Lancier</option>
        </select>
        <button type="submit">Ajouter le héros</button>
      </form>
    </>
  );
}

export { AddHeroForm };
