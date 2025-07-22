import React, { useEffect } from "react";
import "./home.css";
import Data from "./Data";

const Home = () => {
  useEffect(() => {
    const fetchGitHubProfile = async () => {
      try {
        const response = await fetch("https://api.github.com/users/etwatanabe");
        const data = await response.json();        
        document.documentElement.style.setProperty('--profile-image-url', `url(${data.avatar_url})`);
      } catch (error) {
        // Fallback to a default image if the fetch fails
        console.error("Failed to fetch GitHub profile", error);
        document.documentElement.style.setProperty('--profile-image-url', `url('default_profile.jpg')`);
      }
    };
    
    fetchGitHubProfile();
  }, []);


  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div></div>

          <div className="home__img"></div>

          <Data />
        </div>
      </div>
    </section>
  );
};

export default Home;
