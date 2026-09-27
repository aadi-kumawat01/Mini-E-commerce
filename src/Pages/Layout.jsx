import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Toast from "../Components/Toast";
import MobileBottomNav from "../Components/MobileBottomNav";

export default function Layout() {
  return (
    <><Header/><div className="pb-20 lg:pb-0"><Outlet/></div><Footer/><MobileBottomNav/><Toast/></>
  )
}
