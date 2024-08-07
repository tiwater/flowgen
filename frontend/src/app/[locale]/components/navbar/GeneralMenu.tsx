"use client";

import clsx from "clsx";
import Link from "next/link";
import {
  RiApps2Line,
  RiApps2Fill,
  RiRobot2Line,
  RiRobot2Fill,
  RiCompassFill,
  RiCompassLine,
  RiBankFill,
  RiBankLine,
  RiBriefcase4Line,
  RiBriefcase4Fill,
  RiDatabase2Line,
  RiDatabase2Fill,
  RiToolsLine,
  RiToolsFill,
  RiShuffleFill,
  RiShuffleLine,
  RiHammerLine,
  RiHammerFill,
} from "react-icons/ri";
import { usePathname } from "next/navigation";

export const getGeneralMenuItems = () => {
  const NAV_MENU_ITEMS = [
    // {
    //   id: 'projects',
    //   label: 'Flows',
    //   icon: RiShuffleLine,
    //   activeIcon: RiShuffleFill,
    //   href: '/projects',
    // },
    {
      id: "chat",
      label: "Chat",
      icon: RiRobot2Line,
      activeIcon: RiRobot2Fill,
      href: "/chat",
    },
    {
      id: "tools",
      label: "Tools",
      icon: RiHammerLine,
      activeIcon: RiHammerFill,
      href: `/tools`,
    },
    {
      id: "datasets",
      label: "Datasets",
      icon: RiDatabase2Line,
      activeIcon: RiDatabase2Fill,
      href: `/datasets`,
    },
    {
      id: "discover",
      label: "Discover",
      icon: RiCompassLine,
      activeIcon: RiCompassFill,
      href: "/discover",
    },
  ];
  return NAV_MENU_ITEMS;
};

const GeneralMenu = ({ className }: any) => {
  const pathname = usePathname();
  const pathSegments = pathname ? pathname.split("/").filter((p) => p) : []; // filter to remove any empty strings caused by leading/trailing slashes

  // Function to determine if the current path segment matches the item's href
  const isActive = (href: string) => {
    const hrefSegments = href.split("/").filter((p) => p);
    // Match the number of segments in the item's href
    return (
      pathSegments.length >= hrefSegments.length &&
      hrefSegments.every((seg, i) => seg === pathSegments[i])
    );
  };

  return (
    <>
      {getGeneralMenuItems().map((item) => {
        const ItemIcon = isActive(item.href) ? item.activeIcon : item.icon;
        return (
          <Link
            key={item.id}
            href={item.href}
            className={clsx(
              "group flex items-center text-sm py-1 gap-1.5 hover:text-primary",
              {
                "text-primary/80 border-b border-primary/80": isActive(
                  item.href
                ),
              },
              className
            )}
          >
            <ItemIcon className="h-4 w-4 group-hover:scale-125 transform transition duration-700 ease-in-out" />
            {item.label}
          </Link>
        );
      })}
    </>
  );
};

export default GeneralMenu;
