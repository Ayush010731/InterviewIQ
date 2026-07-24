const Navbar = () => {
  return (
    <header className="landing-navbar">
      <div className="landing-container">

        <div className="logo">
          <span className="logo-icon">⚡</span>
          <h2>InterviewIQ</h2>
        </div>

        <div className="nav-links">

            <a href="#features">Features</a>

            <a href="#about">About</a>

        </div>

        <div className="nav-buttons">
          <a href="/login" className="login-btn">
            Login
          </a>

          <a href="/register" className="start-btn">
            Get Started
          </a>
        </div>

      </div>
    </header>
  );
};

export default Navbar;