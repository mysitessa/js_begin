import {
    type RouteConfig,
    route,
  } from "@react-router/dev/routes";
  
  //тут указываются пути к файлам с роутами
  // и пути к самим роутам
  export default [
    route("/", "routes/home.tsx"),
    route("/hello", "routes/hello.tsx"),
    route('/info', 'routes/info.tsx'),
  ] satisfies RouteConfig;
  