export interface NavigationLink {
  name: string;
  href: string;
  current: boolean;
}

export const navigationLinks = [
  {
    name: "Home",
    href: "/home",
    current: false,
  },
  {
    name: "About Us",
    href: "/about-us",
    current: false,
  },
  {
    name: "Contact Us",
    href: "/contact-us",
    current: false,
  },
  {
    name: "Reviews",
    href: "/reviews",
    current: false,
  },
  {
    name: "Location",
    href: "/location",
    current: false,
  },
];
