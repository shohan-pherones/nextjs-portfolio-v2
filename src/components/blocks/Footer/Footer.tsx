import { navLinks, socialLinks } from "@/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="flex flex-wrap gap-x-4">
        {navLinks.map((navLink) => (
          <Link
            key={navLink.id}
            href={navLink.route}
            className="link link-hover"
          >
            {navLink.label}
          </Link>
        ))}
      </nav>
      <nav>
        <div className="flex flex-wrap justify-center gap-x-4">
          {socialLinks.map((socialLink) => (
            <div
              key={socialLink.id}
              className="tooltip"
              data-tip={socialLink.label}
            >
              <Link href={socialLink.url} target="_blank">
                <socialLink.icon size={16} />
              </Link>
            </div>
          ))}
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <Link href="/" className="link link-hover">
            Md. Shohanur Rahman
          </Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
