import {
    type RouteConfig,
    route,
  } from "@react-router/dev/routes";
  
  export default [
    route("/", "routes/home.tsx"),
    route("/hello", "routes/hello.tsx"),
    route('/info', 'routes/info.tsx'),
  ] satisfies RouteConfig;
  