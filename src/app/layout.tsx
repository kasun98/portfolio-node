import type { Metadata } from "next";
import "./globals.css";
import { FiGithub, FiLinkedin } from "react-icons/fi";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="grid-overlay" />
        <div className="glow-bg-1" />
        <div className="glow-bg-2" />
        
        <header>
          <div className="nav-container">
            <a href="#" className="nav-logo gradient-text">Kasun.Dew</a>
            <nav className="nav-links">
              <a href="#about" className="nav-link font-mono">About</a>
              <a href="#experience" className="nav-link font-mono">Experience</a>
              <a href="#skills" className="nav-link font-mono">Skills</a>
              <a href="#projects" className="nav-link font-mono">Projects</a>
              <a href="#contact" className="nav-link font-mono">Contact</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer>
          <div className="footer-content">
            <p className="footer-text font-mono">© 2026 All rights reserved</p>
            <div className="footer-socials">
              <a href="https://github.com/kasun98" target="_blank" rel="noopener noreferrer" className="footer-text"><FiGithub size={16} /></a>
              <a href="https://www.linkedin.com/in/kasundewaka" target="_blank" rel="noopener noreferrer" className="footer-text"><FiLinkedin size={16} /></a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
