const rules = [
  { name: "High Amount Transaction", description: "Flag transactions exceeding the configured amount threshold.", type: "HIGH_AMOUNT", state: "Active" },
  { name: "Rapid Transactions", description: "Detect multiple transactions occurring in a short period.", type: "RAPID_TRANSACTIONS", state: "Active" },
  { name: "Unusual Location", description: "Identify transactions from an unusual customer location.", type: "UNUSUAL_LOCATION", state: "Active" },
];

function FraudRules() {
  return (
    <>
      <div className="page-heading">
        <div><p className="page-kicker">CONFIGURATION</p><h1>Fraud rules</h1><p className="page-description">Manage the signals used to identify suspicious activity.</p></div>
      </div>
      <section className="rule-grid">
        {rules.map((rule) => (
          <article className="panel rule-card" key={rule.type}>
            <div className="rule-card-heading"><span className="rule-symbol" aria-hidden="true">◇</span><span className="rule-state">{rule.state}</span></div>
            <h2>{rule.name}</h2><p>{rule.description}</p><code>{rule.type}</code>
          </article>
        ))}
      </section>
    </>
  );
}

export default FraudRules;
