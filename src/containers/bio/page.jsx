import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { useTranslation } from "react-i18next";

export default function Bio() {
  const { t } = useTranslation();
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
      });
    }
  }, []);

  return (
    <section id="bio" className="flex flex-col md:flex-row items-center gap-16 px-6 md:px-0 pt-[90px] max-w-[1200px] mx-auto">
      <div ref={tiltRef} className="w-[220px] sm:w-[300px] md:w-[400px]">
        <img
          src="/foto-perfil.png"
          className="rounded-xl w-full h-auto object-cover"
        />
      </div>
      <div className="text-center md:text-left space-y-6">
        <h4 className="text-3xl sm:text-4xl font-semibold text-[#E2E4F3] dark:text-[#06070E]">
          {t("bio.title")}
        </h4>
        <p className="text-[#E2E4F3] text-lg sm:text-xl leading-relaxed max-w-2xl dark:text-[#06070E]">
          {t("bio.description")}
        </p>
      </div>
    </section>
  );
}
