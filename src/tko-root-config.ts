// tko-root-config.ts
import { apps } from "./appConfig";
import { AppManager } from "./AppManager";

(async () => {
  const appManager = new AppManager(apps);
  await appManager.registerAll();
  appManager.start();
})();
