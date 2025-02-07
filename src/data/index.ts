import { NavLink, SocialLink } from "@/types";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export const navLinks: NavLink[] = [
  { id: 1, route: "/", label: "Home" },
  { id: 2, route: "/#about", label: "About" },
  { id: 3, route: "/#projects", label: "Projects" },
  { id: 4, route: "/#experiences", label: "Experiences" },
  { id: 5, route: "/#education", label: "Education" },
  { id: 6, route: "/#skills", label: "Skills" },
  { id: 7, route: "/#blogs", label: "Blogs" },
  { id: 8, route: "/#contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
  { id: 1, icon: FaGithub, url: "/", label: "GitHub" },
  { id: 2, icon: FaLinkedin, url: "/", label: "LinkedIn" },
  { id: 3, icon: SiLeetcode, url: "/", label: "LeetCode" },
  { id: 4, icon: FaFacebook, url: "/", label: "Facebook" },
  { id: 5, icon: FaXTwitter, url: "/", label: "X" },
];
