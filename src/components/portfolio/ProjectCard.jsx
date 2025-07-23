import React from "react";
import { useTranslation } from "react-i18next";

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: "#f7df1e",
      TypeScript: "#3178c6",
      Python: "#3776ab",
      Java: "#ed8b00",
      "C#": "#239120",
      CSS: "#1572b6",
      HTML: "#e34f26",
      React: "#61dafb",
      Vue: "#4fc08d",
      Angular: "#dd0031",
      "C++": "#00599c",
      C: "#a8b9cc",
    };
    return colors[language] || "#6c757d";
  };

  return (
    <div className="portfolio__card">
      <div className="portfolio__card-header">
        <h3 className="portfolio__card-title">{project.name}</h3>
        <div className="portfolio__card-links">
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__card-link"
            title={t("portfolio.viewCode")}
          >
            <i className="bx bxl-github"></i>
          </a>
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio__card-link"
              title={t("portfolio.liveDemo")}
            >
              <i className="bx bx-link-external"></i>
            </a>
          )}
        </div>
      </div>

      {project.description && (
        <p className="portfolio__card-description">{project.description}</p>
      )}

      <div className="portfolio__card-footer">
        <div className="portfolio__card-tech">
          {project.language && (
            <span
              className="portfolio__tech-tag"
              style={{ backgroundColor: getLanguageColor(project.language) }}
            >
              {project.language}
            </span>
          )}
        </div>

        <div className="portfolio__card-stats">
          <span className="portfolio__stat">
            <i className="bx bx-star"></i>
            {project.stargazers_count}
          </span>
          <span className="portfolio__stat">
            <i className="bx bx-git-repo-forked"></i>
            {project.forks_count}
          </span>
        </div>
      </div>

      <div className="portfolio__card-date">
        {t("portfolio.lastUpdate")}: {formatDate(project.updated_at)}
      </div>
    </div>
  );
};

export default ProjectCard;
