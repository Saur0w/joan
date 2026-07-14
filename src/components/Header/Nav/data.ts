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

export interface FooterLinks {
  title: string;
  href: string;
}

export const FooterLinks: FooterLinks[] = [
  { title: "X", href: "/"},
  { title: "Instagram", href: "/"},
  { title: "Facebook", href: "/"},
  { title: "GitHub", href: "/"},
];