import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute(props) {
  const token = localStorage.getItem("token");
  return (
    <Route {...props}>
      {token ? (
        props.children
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )}
    </Route>
  );
}

export default ProtectedRoute;
