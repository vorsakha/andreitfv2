const AmbientBackground = () => {
  return (
    <div aria-hidden="true" className="ambient-background">
      <div className="ambient-background__grid" />
      <div className="ambient-background__particles ambient-background__particles--near" />
      <div className="ambient-background__particles ambient-background__particles--far" />
      <div className="ambient-background__glow ambient-background__glow--primary" />
      <div className="ambient-background__glow ambient-background__glow--secondary" />
    </div>
  );
};

export default AmbientBackground;
