import {
  registerApplication,
  start,
  LifeCycles,
  addErrorHandler,
} from "single-spa";

// Register the market-nav microfrontend with Single SPA
registerApplication<LifeCycles>(
  "@tko/market-nav",
  () => System.import<LifeCycles>("@tko/market-nav"),
  (location) => location.pathname.startsWith("/")
);

// Start Single SPA
start({
  urlRerouteOnly: true,
});

window.addEventListener("single-spa:first-mount", () => {
  registerApplication<LifeCycles>(
    "@tko/market-products",
    () => System.import<LifeCycles>("@tko/market-products"),
    (location) => location.pathname.startsWith("/product")
  );
  registerApplication<LifeCycles>(
    "@tko/market-login",
    () => System.import<LifeCycles>("@tko/market-login"),
    (location) => location.pathname.startsWith("/login")
  );
});

addErrorHandler((error) => {
  alert("Service not available now. Try again later");
  // eslint-disable-next-line no-console
  console.log(error);
});
