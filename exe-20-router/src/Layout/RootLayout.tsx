import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import { Main } from "./MainElement";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};
export default RootLayout;
