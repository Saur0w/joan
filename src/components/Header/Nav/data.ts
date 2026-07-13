export interface NavLink {
  title: string;
  href: string;
}

export const Links: NavLink[] = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "/projects" }, 
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
];