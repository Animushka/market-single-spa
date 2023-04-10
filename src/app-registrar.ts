import { LifeCycles, registerApplication } from "single-spa";

export interface AppInfo {
  name: string;
  path: string;
}

export class AppRegistrar {
  constructor(private appInfo: AppInfo) {}

  async loadWithFallback(
    loadFn: () => Promise<LifeCycles>
  ): Promise<LifeCycles> {
    try {
      return await loadFn();
    } catch (error) {
      console.warn(
        `Failed to load ${this.appInfo.name}. Continuing without it.`
      );
      return {
        bootstrap: async () => {},
        mount: async () => {},
        unmount: async () => {},
      };
    }
  }

  isActive(location: Location): boolean {
    return location.pathname.startsWith(this.appInfo.path);
  }

  register(): void {
    console.info(`Registering ${this.appInfo.name}`);
    registerApplication({
      name: this.appInfo.name,
      app: () =>
        this.loadWithFallback(() =>
          System.import<LifeCycles>(this.appInfo.name)
        ),
      activeWhen: (location) => this.isActive(location),
    });
  }
}
