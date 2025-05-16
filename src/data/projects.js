import SkillsData from "./skills";

const projectsData = [
  {
    id: 1,
    nome: "projects.aimtune.title",
    desc: "projects.aimtune.description",
    gitHub: "https://github.com/MatheusTofani/aimtune/blob/main/src/app/data/jogos.js",
    data: "04/2025",
    site: "https://aimtune.vercel.app",
    capa: "/projetos/aimtune.png",
    skills: SkillsData.filter((skill) =>
      [10, 2, 3, 4, 8, 11].includes(skill.id)
    ),
  },
  {
    id: 2,
    nome: "projects.raku.title",
    desc: "projects.raku.description",
    gitHub: "https://github.com/MatheusTofani/EBAC3-Raku",
    data: "07/2024",
    site: "https://raku.vercel.app",
    capa: "/projetos/raku.png",
    skills: SkillsData.filter((skill) => [4, 6, 7, 9, 11].includes(skill.id)),
  },
  {
    id: 3,
    nome: "projects.visionaire.title",
    desc: "projects.visionaire.description",
    gitHub: "https://github.com/MatheusTofani/Visionaire",
    data: "08/2024",
    site: "https://visionaire-evvento.vercel.app",
    capa: "/projetos/visionaire.png",
    skills: SkillsData.filter((skill) => [4, 6, 11, 12].includes(skill.id)),
  },
];

export default projectsData;
