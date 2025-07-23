import React, { useState, useEffect } from "react";
import "./portfolio.css";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/etwatanabe/repos?sort=updated&per_page=15"
        );
        const repos = await response.json();

        const filteredRepos = repos.filter(
          (repo) =>
            !repo.fork &&
            repo.name !== "etwatanabe" &&
            repo.name !== "portfolio" &&
            repo.name !== "etwatanabe.github.io"
          );

        setProjects(filteredRepos.slice(0, 8));
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getSlidePosition = (index) => {
    if (index === currentIndex) {
      return "activeSlide";
    }
    if (index === currentIndex - 1) {
      return "prevSlide";
    }
    if (index === currentIndex + 1) {
      return "nextSlide";
    }
    if (index < currentIndex - 1) {
      return "farLeftSlide";
    }
    if (index > currentIndex + 1) {
      return "farRightSlide";
    }
    return "hiddenSlide";
  };

  if (loading) {
    return (
      <section className="portfolio section" id="portfolio">
        <h2 className="section__title">{t("portfolio.title")}</h2>
        <span className="section__subtitle">{t("portfolio.subtitle")}</span>
        <div className="portfolio__loading">
          <i className="bx bx-loader-alt bx-spin"></i>
        </div>
      </section>
    );
  }

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">{t("portfolio.title")}</h2>
      <span className="section__subtitle">{t("portfolio.subtitle")}</span>

      <div className="portfolio__container container">
        {projects.length === 0 ? (
          <div className="portfolio__empty">
            <p>No projects found.</p>
          </div>
        ) : (
          <>
            <div className="portfolio__carousel">
              <div className="portfolio__track">
                {projects.map((project, index) => {
                  const position = getSlidePosition(index);

                  return (
                    <div
                      key={project.id}
                      className={`portfolio__slide ${position}`}
                    >
                      <ProjectCard project={project} />
                    </div>
                  );
                })}
              </div>

              {projects.length > 1 && (
                <>
                  {currentIndex > 0 && (
                    <button
                      className="portfolio__nav portfolio__nav--prev"
                      onClick={prevSlide}
                    >
                      <i className="bx bx-chevron-left"></i>
                    </button>
                  )}

                  {currentIndex < projects.length - 1 && (
                    <button
                      className="portfolio__nav portfolio__nav--next"
                      onClick={nextSlide}
                    >
                      <i className="bx bx-chevron-right"></i>
                    </button>
                  )}
                </>
              )}
            </div>

            {projects.length > 1 && (
              <div className="portfolio__dots">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={`portfolio__dot ${
                      index === currentIndex ? "active" : ""
                    }`}
                    onClick={() => goToSlide(index)}
                  ></button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
