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
        {
          label: "About Us",
          link: "/about-us",
        }
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
      label: "Contact",
      link: "/contact"
    }
  ];