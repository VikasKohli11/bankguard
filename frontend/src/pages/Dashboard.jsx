import { Link } from "react-router-dom";
import RiskBadge from "../components/RiskBadge";
import StatCard from "../components/StatCard";

const recentActivity = [
  { reference: "TXN-10482", customer: "Olivia Martin", amount: "$8,450.00", risk: "High", status: "Under review" },
  { reference: "TXN-10481", customer: "Noah Williams", amount: "$1,280.50", risk: "Low", status: "Cleared" },
  { reference: "TXN-10480", customer: "Ava Johnson", amount: "$12,900.00", risk: "Medium", status: "Flagged" },
];

function Dashboard() {
  return (
    <>
      <div className="page-heading">
        <div>
          <p className="page-kicker">OVERVIEW</p>
          <h1>Dashboard</h1>
          <p className="page-description">A live overview of your fraud monitoring activity.</p>
        </div>
        <span className="live-indicator"><span /> Monitoring active</span>
      </div>

      <section className="stats-grid" aria-label="Key statistics">
        <StatCard label="Transactions today" value="12,486" change="+8.2% vs. yesterday" tone="positive" />
        <StatCard label="Flagged transactions" value="38" change="12 need review" tone="warning" />
        <StatCard label="Open alerts" value="14" change="3 high risk" tone="negative" />
        <StatCard label="Fraud prevented" value="$24,850" change="This month" tone="positive" />
      </section>

      <section className="panel">
        <div className="panel-heading">
          <div>
            <h2>Recent activity</h2>
            <p>Latest transactions reviewed by BankGuard</p>
          </div>
          <Link className="panel-link" to="/transactions">View transactions</Link>
        </div>
        <div className="table-scroll">
          <table>
            <thead>
              <tr><th>Reference</th><th>Customer</th><th>Amount</th><th>Risk</th><th>Status</th></tr>
            </thead>
            <tbody>
              {recentActivity.map((item) => (
                <tr key={item.reference}>
                  <td className="table-strong">{item.reference}</td>
                  <td>{item.customer}</td>
                  <td>{item.amount}</td>
                  <td><RiskBadge level={item.risk} /></td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
