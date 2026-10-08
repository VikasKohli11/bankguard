import RiskBadge from "../components/RiskBadge";

const transactions = [
  { id: "TXN-10482", customer: "Olivia Martin", amount: "$8,450.00", date: "Oct 9, 2026 · 9:42 AM", risk: "High", status: "Under review" },
  { id: "TXN-10481", customer: "Noah Williams", amount: "$1,280.50", date: "Oct 9, 2026 · 9:38 AM", risk: "Low", status: "Cleared" },
  { id: "TXN-10480", customer: "Ava Johnson", amount: "$12,900.00", date: "Oct 9, 2026 · 9:31 AM", risk: "Medium", status: "Flagged" },
];

function Transactions() {
  return (
    <>
      <div className="page-heading">
        <div>
          <p className="page-kicker">MONITORING</p>
          <h1>Transactions</h1>
          <p className="page-description">Review transaction activity and risk signals.</p>
        </div>
      </div>
      <section className="panel">
        <div className="panel-heading">
          <div><h2>Latest transactions</h2><p>Recent activity across monitored accounts</p></div>
        </div>
        <div className="table-scroll">
          <table>
            <thead><tr><th>Reference</th><th>Customer</th><th>Amount</th><th>Date</th><th>Risk</th><th>Status</th></tr></thead>
            <tbody>{transactions.map((item) => (
              <tr key={item.id}>
                <td className="table-strong">{item.id}</td><td>{item.customer}</td><td>{item.amount}</td>
                <td>{item.date}</td><td><RiskBadge level={item.risk} /></td><td>{item.status}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Transactions;
