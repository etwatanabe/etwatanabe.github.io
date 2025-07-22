import React from 'react';
import './skills.css';
import SkillCategory from './SkillCategory';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  const skillsData = [
    {
      title: t("skills.languages"),
      skills: [
        { name: "C", icon: "devicon-c-plain" },
        { name: "C#", icon: "devicon-csharp-plain" },
        { name: "Python", icon: "devicon-python-plain" },
        { name: "JavaScript", icon: "devicon-javascript-plain" },
        { name: "TypeScript", icon: "devicon-typescript-plain" },
        { name: "Java", icon: "devicon-java-plain" }
      ]
    },
    {
      title: t("skills.backend"),
      skills: [
        { name: "Node.js", icon: "devicon-nodejs-plain" },
        { name: "Express", icon: "devicon-express-original" },
        { name: "Nest.js", icon: "devicon-nestjs-plain" },
        { name: ".NET Core", icon: "devicon-dotnetcore-plain" }
      ]
    },
    {
      title: t("skills.frontend"),
      skills: [
        { name: "React", icon: "devicon-react-original" },
        // { name: "Angular", icon: "devicon-angularjs-plain" },
        { name: "Next.js", icon: "devicon-nextjs-original-wordmark" },
        // { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
      ]
    },
    {
      title: t("skills.databases"),
      skills: [
        { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
        { name: "MongoDB", icon: "devicon-mongodb-plain" },
        { name: "MySQL", icon: "devicon-mysql-plain" },
        { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain" }
      ]
    },
    {
      title: t("skills.toolsdevops"),
      skills: [
        { name: "Docker", icon: "devicon-docker-plain" },
        { name: "Git", icon: "devicon-git-plain" },
        { name: "GitHub", icon: "devicon-github-original" },
        { name: "GitHubActions", icon: "devicon-githubactions-plain" },
        { name: "Postman", icon: "devicon-postman-plain" }
      ]
    }
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">{t("skills.title")}</h2>
      <span className="section__subtitle">{t("skills.subtitle")}</span>

      <div className="skills__container container">
        <div className="skills__categories">
          {skillsData.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;