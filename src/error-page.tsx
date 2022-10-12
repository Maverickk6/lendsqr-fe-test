import { useRouteError } from "react-router-dom";

interface Error {
  statusText: string;
  message: string;
  status: number;
}

export default function ErrorPage() {
  const error: Error | unknown = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>Error Occured!</p>
    </div>
  );
}
