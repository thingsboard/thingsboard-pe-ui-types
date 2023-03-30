import { Timewindow } from '@shared/models/time/time.models';
export type ReportType = 'pdf' | 'jpeg' | 'png';
export declare const reportTypes: ReportType[];
export declare const reportTypeNamesMap: Map<ReportType, string>;
export interface ReportParams {
    type: ReportType;
    timezone: string;
    state?: string;
    timewindow?: Timewindow;
}
export interface ReportConfig extends ReportParams {
    baseUrl: string;
    dashboardId: string;
    useDashboardTimewindow: boolean;
    namePattern: string;
    useCurrentUserCredentials: boolean;
    userId: string;
}
