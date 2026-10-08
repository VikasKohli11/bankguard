const users = [
  { name: "Maya Chen", email: "maya.chen@example.com", role: "Administrator", state: "Active" },
  { name: "Jordan Lee", email: "jordan.lee@example.com", role: "Analyst", state: "Active" },
  { name: "Alex Morgan", email: "alex.morgan@example.com", role: "Analyst", state: "Active" },
];

function Users() {
  return (
    <>
      <div className="page-heading">
        <div><p className="page-kicker">WORKSPACE</p><h1>Users</h1><p className="page-description">View the people with access to this workspace.</p></div>
      </div>
      <section className="panel">
        <div className="panel-heading"><div><h2>Team members</h2><p>Workspace access and assigned roles</p></div></div>
        <div className="table-scroll">
          <table>
            <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th></tr></thead>
            <tbody>{users.map((user) => (
              <tr key={user.email}><td className="table-strong">{user.name}</td><td>{user.email}</td><td>{user.role}</td><td><span className="user-status">{user.state}</span></td></tr>
            ))}</tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Users;
