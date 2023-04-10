// tko-root-config.ts
import { apps } from "./app-config";
import { AppManager } from "./app-manager";

(async () => {
  const appManager = new AppManager(apps);
  await appManager.registerAll();
  appManager.start();
})();
