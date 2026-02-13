function Badge({ level }) {
  return (
    <p className={level >= 10 ? "badge-green" : "badge-orange"}>
      Niveau: {level}
    </p>
  );
}

export { Badge };
