function RiskBadge({ level = "Low" }) {
  const variant = String(level).toLowerCase();

  return <span className={`risk-badge risk-badge-${variant}`}>{level}</span>;
}

export default RiskBadge;
