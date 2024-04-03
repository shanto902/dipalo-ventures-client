import { TNavItem } from "./types";

export const navItems: TNavItem[] = [
    {
      label: "Home",
      link: "/"
    },
    {
      label: "Learn",
      children: [
        {
          label: "Portfolio",
          link: "/portfolio",
        },
        {
          label: "Dipalo Ventures Fund I",
          link: "/fund-1",
        },
        {
          label: "Residency Program",
          link: "/residency-program",
        },
      ]
    },
    {
      label: "Invest",
      children: [
        {
            label: "Dipalo Heed ClimateTech Fund II",
            link: "/fund-2",
          }

      ]
    },
    {
      label: "Insights",
      link: "/#"
    },
    {
      label: "Contact",
      link: "/contact"
    },
    {
      label: "About Us",
      link: "/about-us"
    }
  ];