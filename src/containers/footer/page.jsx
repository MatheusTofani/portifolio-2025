import { useTranslation } from "react-i18next";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="h-auto py-4 text-[#E2E4F3] dark:text-[#06070E] relative">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#E2E4F3] via-[#B2B3C0] to-[#7B7C87] dark:from-[#06070E] dark:to-[#222224]" />

      <div className="flex flex-col-reverse md:flex-row h-full items-center justify-between max-w-[1200px] mx-auto px-4 gap-y-4">
        <h5 className="text-center md:text-left text-sm md:text-base">
          {t("footer.developedBy")}
        </h5>

        <ul className="flex gap-6 text-2xl md:text-3xl">
          <li className="hover:transform hover:rotate-[-20deg] transition duration-300">
            <a
              target="_blank"
              href="https://github.com/MatheusTofani"
              rel="noreferrer"
            >
              <SiGithub />
            </a>
          </li>
          <li className="hover:transform hover:rotate-[-20deg] transition duration-300">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/matheustofani/"
              rel="noreferrer"
            >
              <SiLinkedin />
            </a>
          </li>
          <li className="hover:transform hover:rotate-[-20deg] transition duration-300">
            <a
              target="_blank"
              href="https://wa.me/5531991580240"
              rel="noreferrer"
            >
              <SiWhatsapp />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
