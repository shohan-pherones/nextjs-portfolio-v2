import { IconType } from "react-icons";

export interface NavLink {
  id: number;
  route: string;
  label: string;
}

export interface SocialLink {
  id: number;
  icon: IconType;
  url: string;
  label: string;
}
