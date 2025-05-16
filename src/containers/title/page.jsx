import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";

export default function Title({ darkMode }) {
    const { t, i18n } = useTranslation();

    const roles = t("title.roles", { returnObjects: true });

    return (
        <main id="title" className="h-[calc(100vh-70px)] mt-[70px] flex flex-col-reverse md:flex-row items-center md:justify-between max-w-[1200px] mx-auto px-4 justify-center">
            <div className="text-center md:text-left space-y-4">
                <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-[#878892] dark:text-[#0d0e18]">
                    Matheus Tófani
                </h2>

                <div className="text-2xl sm:text-2xl md:text-4xl dark:text-[#06070E] text-[#E2E4F3] min-h-[50px]">
                    <Typewriter
                        options={{
                            strings: roles,
                            autoStart: true,
                            loop: true,
                            delay: 20,
                        }}
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <button onClick={() => window.open("/Curriculo.pdf", "_blank")} className="dark:bg-[#06070E] dark:text-[#E2E4F3] bg-[#E2E4F3] text-[#06070E] px-6 py-2 rounded-full font-medium hover:opacity-90 transition w-80 md:w-auto">
                        {t("title.downloadCv")}
                    </button>
                    <button className="border dark:border-[#06070E] dark:text-[#06070E] dark:hover:bg-[#06070E] dark:hover:text-[#E2E4F3] border-[#E2E4F3] text-[#E2E4F3] px-6 py-2 rounded-full font-medium hover:bg-[#E2E4F3] hover:text-[#06070E] transition">
                        <a target="_blank" href="https://wa.me/5531991580240">
                            {t("title.contact")}
                        </a>
                    </button>
                </div>
            </div>

            <img
                src={`${darkMode ? "/react_logo_dark.png" : "/react_logo.png"}`}
                alt="React Logo"
                className="dark:drop-shadow-[0_0_40px_#06070e78] w-40 sm:w-52 md:w-80 drop-shadow-[0_0_40px_#e2e4f378] mb-8 md:mb-0 animate-float"
            />
        </main>
    );
}
