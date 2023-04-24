import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  const navigation = useNavigation();
  return (
    <>
      <MainNavigation />
      <main>
        <p>{navigation.state === "loading" && "loading..."}</p>
        <Outlet />
      </main>
    </>
  );
};
export default RootLayout;
