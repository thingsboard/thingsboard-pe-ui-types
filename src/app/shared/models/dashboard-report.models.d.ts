import { Timewindow } from '@shared/models/time/time.models';
export type DashboardReportType = 'pdf' | 'jpeg' | 'png';
export declare const dashboardReportTypes: DashboardReportType[];
export declare const dashboardReportTypeNamesMap: Map<DashboardReportType, string>;
export interface DashboardReportParams {
    type: DashboardReportType;
    timezone: string;
    state?: string;
    timewindow?: Timewindow;
}
export interface DashboardReportConfig extends DashboardReportParams {
    baseUrl: string;
    dashboardId: string;
    useDashboardTimewindow: boolean;
    namePattern: string;
    useCurrentUserCredentials: boolean;
    userId: string;
}
