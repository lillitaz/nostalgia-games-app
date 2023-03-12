import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oopsi!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
};

export default ErrorPage;
