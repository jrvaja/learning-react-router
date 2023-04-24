import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

type ErrorType = { data: { message: string }; status: number };
const ErrorPage = () => {
  const error = useRouteError() as ErrorType;
  let title = " An error occured";
  let message = "Something went wrong";
  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Not found";
    message = error.data.message;
  }
  return <PageContent title={title}>{message}</PageContent>;
};

export default ErrorPage;
