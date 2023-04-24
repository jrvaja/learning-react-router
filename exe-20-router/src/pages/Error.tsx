import Navigation from "../components/Navigation/Navigation";
import { Main } from "../Layout/MainElement";

const ErrorPage = () => {
  return (
    <>
      <Navigation />
      <Main>
        <h1>Error: 404 Page not found</h1>
        <p>Could not find the page</p>
      </Main>
    </>
  );
};

export default ErrorPage;
