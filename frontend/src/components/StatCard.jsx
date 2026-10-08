function StatCard({ label, value, change, tone = "default" }) {
  return (
    <article className="stat-card">
      <p className="stat-label">{label}</p>
      <p className="stat-value">{value}</p>
      {change && <p className={`stat-change stat-change-${tone}`}>{change}</p>}
    </article>
  );
}

export default StatCard;
