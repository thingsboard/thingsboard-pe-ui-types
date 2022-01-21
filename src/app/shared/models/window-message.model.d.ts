export declare type WindowMessageType = 'widgetException' | 'widgetEditModeInited' | 'widgetEditUpdated' | 'openDashboardMessage' | 'reloadUserMessage' | 'toggleDashboardLayout';
export interface WindowMessage {
    type: WindowMessageType;
    data?: any;
}
export interface OpenDashboardMessage {
    dashboardId: string;
    state?: string;
    hideToolbar?: boolean;
    embedded?: boolean;
}
export interface ReloadUserMessage {
    accessToken: string;
    refreshToken: string;
}
