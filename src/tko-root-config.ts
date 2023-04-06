import { registerApplication, start, LifeCycles } from "single-spa";

// Register the market-nav microfrontend with Single SPA
registerApplication<LifeCycles>(
  "@tko/market-nav",
  () => System.import<LifeCycles>("@tko/market-nav"),
  (location) => location.pathname.startsWith("/")
);

// Start Single SPA
start();
