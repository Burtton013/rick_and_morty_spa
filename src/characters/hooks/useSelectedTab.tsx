import { useMemo } from "react";

const VALID_TABS = ["all", "favorites"] as const;
type Tab = (typeof VALID_TABS)[number];

export const useSelectedTab = (activeTab: string | null) => {
  const selectedTab = useMemo((): Tab => {
    return VALID_TABS.includes(activeTab as Tab) ? (activeTab as Tab) : "all";
  }, [activeTab]);

  return selectedTab;
};
