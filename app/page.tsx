import SideNav from "./components/sideNavbar/SideNav";
import { ClientSide } from "./components/ClientSide";

export default function Home() {
  return (
    <main className="">
      <ClientSide />
      <SideNav />
    </main>
  );
}
