function Header({ heroesNumber, sumLevelHeroes }) {
  return (
    <header>
      <div className="container">
        <div className="container-content">
          <h1>RPG Heroes</h1>
          <p>Gère ton équipe de héros</p>
        </div>
        <div className="separator" />
        <div className="container-content">
          <p>Nombre de héros: {heroesNumber}</p>
          <p>Niveau des héros : {sumLevelHeroes}</p>
        </div>
        <div className="separator" />
      </div>
    </header>
  );
}

export { Header };
