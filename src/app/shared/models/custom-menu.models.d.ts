export interface CustomMenuItem {
    name: string;
    iconUrl: string;
    materialIcon: string;
    iframeUrl: string;
    dashboardId: string;
    hideDashboardToolbar: boolean;
    setAccessToken: boolean;
    childMenuItems: CustomMenuItem[];
}
export interface CustomMenu {
    disabledMenuItems: string[];
    menuItems: CustomMenuItem[];
}
