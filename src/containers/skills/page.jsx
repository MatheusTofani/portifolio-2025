import { useTranslation } from "react-i18next";
import SkillsData from "../../data/skills";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-[200px] max-w-[1200px] mx-auto px-4 md:px-0">
      <h4 className="text-3xl sm:text-4xl font-semibold text-[#E2E4F3] mb-12 dark:text-[#06070E] text-center">
        {t("skills.title")}
      </h4>
      <SkillCard />
    </section>
  );
}

function SkillCard() {
  return (
    <div  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 cursor-default">
      {SkillsData.map((skill) => {
        const Icon = skill.icon;
        return (
          <div
            key={skill.id}
            className="hover:bg-[#ffffff] dark:bg-[#06070E] dark:hover:bg-[#1a1a1b] dark:text-[#E2E4F3] dark:border-[#3f3f3f] dark:hover:border-[#696969] transition duration-300 hover:border-[#121213] flex flex-col items-center text-[#06070E] justify-center gap-2 h-[120px] w-full bg-[#E2E4F3] p-4 rounded-xl shadow-md hover:shadow-lg transition border-b-[10px] border-[#a8a8b1]"
          >
            <Icon size={30} />
            <p className="text-md text-center">{skill.name}</p>
          </div>
        );
      })}
    </div>
  );
}
