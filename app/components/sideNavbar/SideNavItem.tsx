"use client";
import Link from "next/link";
import { IconType } from "react-icons";

interface SideNavItemItemProps {
  isActive: boolean;
  label: string;
  icon: IconType;
  href: string;
}

export const SideNavItem: React.FC<SideNavItemItemProps> = ({
  isActive,
  label,
  href,
  icon: Icon,
}) => {
  return (
    <li>
      <Link
        href={href}
        className={`
        flex items-center
        p-[16px]
        rounded-[12px]
        ${isActive ? "text-primary" : "hover:text-primary"}
        ${isActive ? "bg-primary/10" : "hover:bg-primary/10"}
        `}
      >
        <span>
          <Icon size={28} className="mr-[16px]" />
        </span>
        <span className="text-[16px]">{label}</span>
      </Link>
    </li>
  );
};
