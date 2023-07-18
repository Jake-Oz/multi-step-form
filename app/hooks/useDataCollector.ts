import { create } from "zustand";

export type Info = {
  name: string;
  email: string;
  phone: string;
};

export enum Plan {
  Arcade = "arcade",
  Advanced = "advanced",
  Pro = "pro",
}

export enum Addons {
  online = "online",
  storage = "storage",
  profile = "profile",
}
interface DataCollector {
  info: Info;
  plan: Plan;
  yearly: boolean;
  addons: Addons[];
  updateInfo: (newInfo: Info) => void;
  updatePlan: (newPlan: Plan) => void;
  updateYearly: (newYearly: boolean) => void;
  updateAddons: (newAddons: Addons[]) => void;
}

export const useDataCollector = create<DataCollector>((set) => ({
  info: { name: "", email: "", phone: "" },
  plan: Plan.Arcade,
  yearly: false,
  addons: [],
  updateInfo: (newInfo) =>
    set((state) => ({
      info: { ...state.info, ...newInfo },
    })),
  updatePlan: (newPlan) => set(() => ({ plan: newPlan })),
  updateYearly: (newYearly) => set(() => ({ yearly: newYearly })),
  updateAddons: (newAddons) => set(() => ({ addons: newAddons })),
}));
