import Navbar from "../components/Navbar";
import Hero from "../components/Hero";


import "../style/landing.scss";




const Landing = () => {
  return (
    <main className="landing-page">
      <Navbar />
      <Hero />
    </main>
  );
};

export default Landing;