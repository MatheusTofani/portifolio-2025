import { useState } from "react";
import { useTranslation } from "react-i18next";
import projectsData from "../../data/projects";
import { SiGithub } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="pb-[100px] max-w-[1200px] mx-auto">
      <h4 className="text-3xl sm:text-4xl font-semibold text-[#E2E4F3] dark:text-[#06070E] mb-12 text-center">
        {t("titles.projects")}
      </h4>
      <ProjectsCard t={t} />
    </section>
  );
}

function ProjectsCard({ t }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div className="flex md:flex-row flex-col gap-4 md:gap-0 md:justify-between items-center">
        {projectsData.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="relative w-full max-w-[300px] h-[200px] cursor-pointer overflow-hidden rounded-xl shadow-md group"
          >
            <img
              src={project.capa}
              alt={t(project.nome)}
              className="w-full h-full object-cover group-hover:brightness-75 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full text-[#06070E] dark:text-[#E2E4F3] dark:bg-[#06070E] bg-[#E2E4F3] rounded-b-xl px-4 py-2 translate-y-full group-hover:translate-y-0 transition-all duration-300">
              <div className="flex justify-between items-center">
                <p className="font-medium text-md">{t(project.nome)}</p>
                <span className="text-sm dark:bg-[#E2E4F3] dark:text-[#06070E] bg-[#06070E] text-[#E2E4F3] px-2 py-1 rounded text-center">
                  {t("buttons.details")}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-2 md:px-0"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white w-[600px] h-auto p-6 rounded-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4 ">{t(selectedProject.nome)}</h3>
            <p className="text-sm text-gray-600 mb-2">
              {t("labels.date")}: {selectedProject.data}
            </p>
            <p className="mb-4">{t(selectedProject.desc)}</p>
            <img src={selectedProject.capa} alt="" />
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.id}
                    className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded"
                  >
                    <Icon size={16} />
                    <span className="text-sm">{skill.name}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-4 mb-4 p-2 rounded">
              {selectedProject.site && (
                <a
                  href={selectedProject.site}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#06070E] w-[50%] text-center py-2 rounded text-[#E2E4F3] hover:bg-[#1d1d1d] transition duration-300 flex items-center gap-2 justify-center"
                >
                  <TbWorldWww size={20} />
                  {t("buttons.site")}
                </a>
              )}
              {selectedProject.gitHub && (
                <a
                  href={selectedProject.gitHub}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#06070E] w-[50%] text-center py-2 rounded text-[#E2E4F3] hover:bg-[#1d1d1d] transition duration-300 flex items-center gap-2 justify-center"
                >
                  <SiGithub size={20} />
                  GitHub
                </a>
              )}
            </div>

            {selectedProject.video && (
              <div className="mt-4">
                <video src={selectedProject.video} controls className="w-full rounded" />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
