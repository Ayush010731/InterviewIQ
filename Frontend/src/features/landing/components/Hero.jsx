
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="landing-container hero-wrapper">

        <div className="hero-left">

          <span className="hero-badge">
            AI Powered Interview Preparation
          </span>

          <h1>
            Crack Your Dream Job
            <span> with InterviewIQ</span>
          </h1>

          <p>
            Analyze your Resume,
            compare it with any Job Description,
            discover Skill Gaps,
            generate Interview Questions,
            and receive a personalized AI Roadmap.
          </p>

          <div className="hero-buttons">

            <a href="/register" className="primary-btn">
              Get Started
            </a>

            <a href="#features" className="secondary-btn">
              Explore Features
            </a>

          </div>

          <div className="hero-stats">

            <div>
              <h2>10K+</h2>
              <span>Interview Plans</span>
            </div>

            <div>
              <h2>95%</h2>
              <span>Resume Match Accuracy</span>
            </div>

            <div>
              <h2>24/7</h2>
              <span>AI Assistant</span>
            </div>

          </div>

        </div>

        <div className="hero-right">
          <div className="hero-image">
            🤖
          </div>
        </div>

      </div>
      
      <div className="landing-container hero-features">
  <section id="features">
  <h2>Features</h2>
  <p className="feature-subtitle">
 Everything you need to crack your next interview.
  </p>
  <div className="features-list">

    <div>
      <span>📄</span>
      <p>Resume Analyzer</p>
    </div>

    <div>
      <span>🎯</span>
      <p>JD Match</p>
    </div>

    <div>
      <span>🤖</span>
      <p>AI Interview</p>
    </div>

    <div>
      <span>📈</span>
      <p>Progress Tracking</p>
    </div>

    <div>
      <span>💡</span>
      <p>Skill Gap Analysis</p>
    </div>

    <div>
      <span>🚀</span>
      <p>AI Roadmap</p>
    </div>

  </div>

  </section>
  </div>

  {/* ================= ABOUT ================= */}

<section id="about" className="about-section">

  <div className="landing-container">

    <div className="about-header">

      <span className="about-tag">ABOUT INTERVIEWIQ</span>

      <h2>
        Everything You Need To Crack
        <span> Your Dream Job</span>
      </h2>

      <p>
        InterviewIQ is an AI-powered interview preparation platform that
        helps students and professionals analyze resumes, match job
        descriptions, practice AI interviews and build personalized
        learning roadmaps.
      </p>

    </div>

    <div className="about-content">

      <div className="about-left">

        <div className="about-box">
          <span>📄</span>
          <div>
            <h3>Resume Analysis</h3>
            <p>Improve your resume with AI suggestions.</p>
          </div>
        </div>

        <div className="about-box">
          <span>🎯</span>
          <div>
            <h3>JD Matching</h3>
            <p>Compare your resume with any job description.</p>
          </div>
        </div>

        <div className="about-box">
          <span>🤖</span>
          <div>
            <h3>AI Interviews</h3>
            <p>Practice technical and HR interviews instantly.</p>
          </div>
        </div>

      </div>

      <div className="about-right">

        <h3>Why Choose InterviewIQ?</h3>

        <ul>

          <li>✅ ATS Resume Score</li>

          <li>✅ Job Description Matching</li>

          <li>✅ AI Mock Interviews</li>

          <li>✅ Personalized AI Roadmap</li>

          <li>✅ Progress Tracking</li>

          <li>✅ Skill Gap Analysis</li>

        </ul>

      </div>

    </div>

  </div>

</section>

    </section>
</>
  );
};

export default Hero;