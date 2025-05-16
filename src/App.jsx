import { useEffect, useState } from "react";
import Bio from "./containers/bio/page";
import Header from "./containers/header/page";
import Projects from "./containers/projects/page";
import Skills from "./containers/skills/page";
import Title from "./containers/title/page";
import { MdNightsStay } from "react-icons/md";
import { FaCloudSun } from "react-icons/fa";
import Footer from "./containers/footer/page";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-[#06070E] dark:bg-[#E2E4F3]">
      <Header />
      <Title darkMode={darkMode} />
      <Bio />
      <Skills />
      <Projects />
      <Footer />
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="w-[70px] h-[70px] bg-[#E2E4F3] dark:hover:bg-[#1d1e27] hover:bg-[#c3c4cf] dark:bg-[#06070E] fixed bottom-10 right-10 rounded-full flex justify-center items-center shadow-lg transition duration-300"
      >
        {darkMode ? (
          <FaCloudSun size={40} className="text-white" />
        ) : (
          <MdNightsStay size={40} className="text-[#06070E]" />
        )}
      </button>

    </div>
  );
}

export default App;
