import { Outlet } from "react-router-dom";
import Navber from "../Component/Navber";
import Footer from "../Pages/Footer";



const MainLayout = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="mb-10">
        <Navber></Navber>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;