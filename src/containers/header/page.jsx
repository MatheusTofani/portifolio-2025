import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleLanguage = () => {
        const newLang = i18n.language === "pt" ? "en" : "pt";
        i18n.changeLanguage(newLang);
    };

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };


    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="h-[70px] text-[#E2E4F3] fixed top-0 left-0 right-0 z-50 bg-[#06070E] dark:bg-[#E2E4F3]">
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#E2E4F3] via-[#B2B3C0] to-[#7B7C87] dark:bg-gradient-to-r dark:from-[#06070E] dark:to-[#222224]" />
            <div className="max-w-[1200px] mx-auto px-4 h-full flex items-center justify-between">
                <h1 className="text-sm sm:text-base md:text-xl dark:text-[#06070E]">MatheusTófani</h1>


                <nav className="hidden sm:flex gap-10 text-sm sm:text-base dark:text-[#06070E] items-center">
                    <a
                        href="#title"
                        onClick={handleLinkClick}
                        className="relative after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                    >
                        {t("nav.home")}
                    </a>
                    <a
                        href="#bio"
                        onClick={handleLinkClick}
                        className="relative after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                    >
                        {t("nav.about")}
                    </a>
                    <a
                        href="#skills"
                        onClick={handleLinkClick}
                        className="relative after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                    >
                        {t("nav.skills")}
                    </a>
                    <a
                        href="#projects"
                        onClick={handleLinkClick}
                        className="relative after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                    >
                        {t("nav.projects")}
                    </a>
                    <button onClick={toggleLanguage} aria-label="Toggle language">
                        <img
                            className="w-8"
                            src={i18n.language === "pt" ? "/brasil.png" : "/eua.png"}
                            alt={i18n.language === "pt" ? "Português" : "English"}
                        />
                    </button>
                </nav>


                <button
                    onClick={toggleMenu}
                    className="sm:hidden text-[#E2E4F3] dark:text-[#06070E] text-3xl"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>


            {menuOpen && (
                <nav className="sm:hidden bg-[#06070E] dark:bg-[#E2E4F3] flex flex-col items-center gap-6 py-6 text-[#E2E4F3] dark:text-[#06070E] text-lg font-medium">
                    <a href="#" onClick={handleLinkClick}>{t("nav.home")}</a>
                    <a href="#" onClick={handleLinkClick}>{t("nav.about")}</a>
                    <a href="#" onClick={handleLinkClick}>{t("nav.skills")}</a>
                    <a href="#" onClick={handleLinkClick}>{t("nav.projects")}</a>
                    <button onClick={() => { toggleLanguage(); setMenuOpen(false); }} aria-label="Toggle language">
                        <img
                            className="w-8"
                            src={i18n.language === "pt" ? "/brasil.png" : "/eua.png"}
                            alt={i18n.language === "pt" ? "Português" : "English"}
                        />
                    </button>
                </nav>
            )}
        </header>
    );
}
