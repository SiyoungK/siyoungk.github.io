import BasicButton from "./BasicButton";
import CrockyIcon from "./icons/CrockyIcon";

export default function Navigation() {
  return (
    <nav className="flex justify-center">
      <div className="bg-white border-2 border-black flex fixed justify-between w-[80vw] md:max-w-250 h-16 my-5 mx-auto p-2 rounded-xl z-9999">
        {/* Logo */}
        <a 
          href="http://localhost:3000/"
          className="text-black my-auto mx-3 rounded-xl"
        >
          <div className="w-[3rem]">
            <CrockyIcon/>
          </div>
        </a>
        {/* Links */}
        <div className="flex space-x-4 items-center">
          <div className="hidden md:block">
            <a
              href="#portfolio" 
              className="text-black py-2 px-5 rounded-xl"
            >
              Portfolio
            </a>
            <a 
              href="#experience"
              className="text-black py-2 px-5 rounded-xl"
            >
              Experience
            </a>
          </div>
          <div>
            <BasicButton text="Contact" external={true} href="https://www.linkedin.com/in/siyoung/" 
              className="hover:bg-zinc-700 text-white bg-black border-black hover:border-zinc-700"/>
          </div>
        </div>
      </div>
    </nav>
  )
}