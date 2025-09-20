import { useRouteError } from "react-router";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      OOPS!! Something went wrong
      <h3>
        Status: {err.status} : {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
