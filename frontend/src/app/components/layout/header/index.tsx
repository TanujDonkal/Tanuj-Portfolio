import Link from "next/link";
import { getImgPath } from "@/utils/image";
import Logo from "../logo";

const Header = () => {
  const resumePath = getImgPath("/resume/Tanuj-Kumar-Resume.pdf");

  return (
    <header className="navbar top-0 left-0 z-999 w-full absolute">
      <div className="container">
        <nav className="py-4 sm:py-7">
          <div className="flex items-center justify-between gap-3 sm:justify-start sm:gap-8">
            <div>
              <Logo />
            </div>

            <Link
              href={resumePath}
              download="Tanuj-Kumar-Resume.pdf"
              aria-label="Download Tanuj Kumar resume PDF"
              className="resume-download relative overflow-hidden cursor-pointer w-fit shrink-0 rounded-full border border-primary px-3 py-2 sm:px-5 sm:py-3 md:px-7 md:py-5 group"
            >
              <span className="relative z-10 text-sm font-medium text-black transition-colors duration-300 group-hover:text-white sm:text-base md:text-xl">
                <span className="sm:hidden">Resume</span>
                <span className="hidden sm:inline">Download PDF Resume</span>
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
