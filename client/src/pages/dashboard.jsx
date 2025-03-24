function Dashboard({ user }) {
    if (!user) return null
  
    return (
      <div className="dashboard">
        <h2>Dashboard</h2>
        <div className="user-profile">
          <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="profile-avatar" />
          <div className="user-details">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>Akun dibuat: {new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="dashboard-content">
          <h3>Selamat datang di Dashboard!</h3>
          <p>Ini adalah halaman yang dilindungi dan hanya dapat diakses oleh pengguna yang sudah login.</p>
        </div>
      </div>
    )
  }
  
  export default Dashboard
  
  