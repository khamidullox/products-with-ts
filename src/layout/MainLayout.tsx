import { Outlet } from "react-router-dom";
import Novbar from "../components/Novbar";

function MainLayout() {
  return (
    <div className="container w-ful h-full mx-auto">
      <Novbar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
