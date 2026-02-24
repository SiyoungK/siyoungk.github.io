import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

export default function Footer() {
    return (
        <footer className="flex justify-left py-10 border-t border-gray-300 text-footer-text">
          <div className="max-w-400 mx-auto w-[80%]">
            <div className="md:flex md:flex-row md:justify-between">
              {/* === Useful links === */}
              <div className="py-5 flex justify-start flex-col md:flex-row gap-3">
                <div>
                  <a href="KimSiyoungResume.pdf" target="_blank">
                    Resume
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/siyoung/" target="_blank" rel="noopener noreferrer">
                    Contact
                  </a>
                </div>
              </div>
              {/* === Socials === */}
              <div className="py-5 flex flex-row gap-4">
                <a href="https://www.linkedin.com/in/siyoung/" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon className="w-5 aspect-square" fillColor="fill-footer-text"/>
                </a>
                <a href="https://github.com/SiyoungK" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon className="w-5 aspect-square" fillColor="fill-footer-text"/>
                </a>
              </div>
            </div>
            {/* Copyright */}
            <div className="py-5">
              <p>© 2026 Siyoung Kim. All rights reserved.</p>
            </div>
          </div>
        </footer>
    )
}