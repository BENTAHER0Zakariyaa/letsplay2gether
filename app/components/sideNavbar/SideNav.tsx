"use client";

import {
  MdHome,
  MdLogin,
  MdLogout,
  MdNotifications,
  MdOutlineLibraryAdd,
} from "react-icons/md";
import { SideNavItem } from "./SideNavItem";
import { HiUserCircle } from "react-icons/hi";
import { SideNavLoginButton } from "./SideNavLoginButton";
import { Logo } from "../Logo";
import { Diver } from "../utils/Diver";
import Link from "next/link";
import { SideNavLogoutButton } from "./SideNavLogoutButton";
import useLoginModal from "@/app/hooks/useLoginModal";

const SideNav = () => {
  const loginModal = useLoginModal();
  return (
    <div
      className="
        w-[360px]
        p-[30px]
        h-screen 
        bg-secondary
        flex
        flex-col 
        justify-between
      "
    >
      <Logo />
      <Diver my={30} />
      <nav
        className="
        h-full 
        flex 
        flex-col 
        justify-between"
      >
        <ul className="flex flex-col space-y-[16px] ">
          <SideNavItem href="/" icon={MdHome} isActive={true} label="Home" />
          <SideNavItem
            href="/"
            icon={MdNotifications}
            isActive={false}
            label="Notifications"
          />
          <SideNavItem
            href="/"
            icon={HiUserCircle}
            isActive={false}
            label="Profile"
          />
        </ul>
        <ul
          className="
          flex 
          flex-col 
          space-y-[16px]
          "
        >
          <SideNavLoginButton
            label="Sign In"
            icon={MdLogin}
            onClick={() => loginModal.onOpen()}
          />
          <SideNavLogoutButton
            label="Logout"
            icon={MdLogout}
            onClick={() => {}}
          />
        </ul>
      </nav>
    </div>
  );
};
export default SideNav;
