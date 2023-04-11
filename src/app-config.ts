// appConfig.ts
import { AppInfo } from "./app-registrar";

export const apps: AppInfo[] = [
  {
    name: "@tko/market-nav",
    path: "/",
  },
  {
    name: "@tko/market-products",
    path: "/product",
  },
  {
    name: "@tko/market-login",
    path: "/login",
  },
  {
    name: "@tko/market-order",
    path: "/order",
  },
];
