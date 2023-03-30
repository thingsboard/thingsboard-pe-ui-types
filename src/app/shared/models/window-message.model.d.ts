export type WindowMessageType = 'openReport' | 'clearReport' | 'reportResult' | 'widgetException' | 'widgetEditModeInited' | 'widgetEditUpdated' | 'dashboardStateSelected' | 'openDashboardMessage' | 'reloadUserMessage' | 'toggleDashboardLayout' | 'resetRecaptcha';
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
export interface OpenReportMessage {
    dashboardId: string;
    timeout: number;
    accessToken?: string;
    publicId?: string;
    state?: string;
    reportTimewindow?: object;
}
export interface ReportResultMessage {
    success: boolean;
    error?: string;
}
