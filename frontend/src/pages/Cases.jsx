import RiskBadge from "../components/RiskBadge";

const cases = [
  { id: "CASE-0081", subject: "Suspicious high-value transfer", owner: "Maya Chen", risk: "High", status: "Investigating" },
  { id: "CASE-0080", subject: "Rapid activity review", owner: "Jordan Lee", risk: "Medium", status: "Open" },
  { id: "CASE-0079", subject: "Location anomaly", owner: "Unassigned", risk: "Low", status: "Open" },
];

function Cases() {
  return (
    <>
      <div className="page-heading">
        <div><p className="page-kicker">INVESTIGATIONS</p><h1>Cases</h1><p className="page-description">Track and resolve fraud investigations.</p></div>
      </div>
      <section className="panel">
        <div className="panel-heading"><div><h2>Investigation queue</h2><p>Cases created from flagged activity</p></div></div>
        <div className="table-scroll">
          <table>
            <thead><tr><th>Case</th><th>Subject</th><th>Assigned to</th><th>Risk</th><th>Status</th></tr></thead>
            <tbody>{cases.map((item) => (
              <tr key={item.id}><td className="table-strong">{item.id}</td><td>{item.subject}</td><td>{item.owner}</td><td><RiskBadge level={item.risk} /></td><td>{item.status}</td></tr>
            ))}</tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Cases;
