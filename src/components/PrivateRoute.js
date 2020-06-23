import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { userContext } from "./context";

const PrivateRoute = ({ render: RouteComponent, ...props }) => {
  const { currentUser } = useContext(userContext);

  return (
    <>
      <Route
        {...props}
        render={routeProps =>
          currentUser ? (
            <RouteComponent {...routeProps} />
          ) : (
            <Redirect to={"/login"} />
          )
        }
      />
    </>
  );
};

export default PrivateRoute;
