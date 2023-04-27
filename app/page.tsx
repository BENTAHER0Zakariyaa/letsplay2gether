import SideNav from "./components/sideNavbar/SideNav";
import { LoginModal } from "./components/modals/LoginModal";

export default function Home() {
  return (
    <main className="">
      <LoginModal isOpen={true} />
      <SideNav />
    </main>
  );
}
