// AppManager.ts
import { start, addErrorHandler } from "single-spa";
import { AppInfo, Microfrontend } from "./Microfrontend";

export class AppManager {
  constructor(private apps: AppInfo[]) {}

  private static logError(error: Error): void {
    alert("Service not available now. Try again later");
    console.error(error);
  }

  async registerAll(): Promise<void> {
    for (const appInfo of this.apps) {
      const microfrontend = new Microfrontend(appInfo);
      await microfrontend.register();
    }
  }

  start(): void {
    start({ urlRerouteOnly: true });
    addErrorHandler(AppManager.logError);
  }
}
