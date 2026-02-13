function Card({ children, title }) {
  return (
    <div className="hero-card">
      {/* Le style est défini dans App.css */}
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

export { Card };
