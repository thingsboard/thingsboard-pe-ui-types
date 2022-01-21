import { BaseData } from '@shared/models/base-data';
import { DashboardId } from '@shared/models/id/dashboard-id';
import { TenantId } from '@shared/models/id/tenant-id';
import { ShortCustomerInfo } from '@shared/models/customer.model';
import { Widget } from './widget.models';
import { Timewindow } from '@shared/models/time/time.models';
import { EntityAliases } from './alias.models';
import { CustomerId } from '@shared/models/id/customer-id';
import { Filters } from '@shared/models/query/query.models';
export interface DashboardInfo extends BaseData<DashboardId> {
    tenantId?: TenantId;
    customerId?: CustomerId;
    title?: string;
    image?: string;
    assignedCustomers?: Array<ShortCustomerInfo>;
    mobileHide?: boolean;
    mobileOrder?: number;
}
export interface WidgetLayout {
    sizeX?: number;
    sizeY?: number;
    mobileHide?: boolean;
    mobileHeight?: number;
    mobileOrder?: number;
    col?: number;
    row?: number;
}
export interface WidgetLayouts {
    [id: string]: WidgetLayout;
}
export interface GridSettings {
    backgroundColor?: string;
    columns?: number;
    margin?: number;
    backgroundSizeMode?: string;
    backgroundImageUrl?: string;
    autoFillHeight?: boolean;
    mobileAutoFillHeight?: boolean;
    mobileRowHeight?: number;
    [key: string]: any;
}
export interface DashboardLayout {
    widgets: WidgetLayouts;
    gridSettings: GridSettings;
}
export interface DashboardLayoutInfo {
    widgetIds?: string[];
    widgetLayouts?: WidgetLayouts;
    gridSettings?: GridSettings;
}
export declare type DashboardLayoutId = 'main' | 'right';
export declare type DashboardStateLayouts = {
    [key in DashboardLayoutId]?: DashboardLayout;
};
export declare type DashboardLayoutsInfo = {
    [key in DashboardLayoutId]?: DashboardLayoutInfo;
};
export interface DashboardState {
    name: string;
    root: boolean;
    layouts: DashboardStateLayouts;
}
export declare type StateControllerId = 'entity' | 'default' | string;
export interface DashboardSettings {
    stateControllerId?: StateControllerId;
    showTitle?: boolean;
    showDashboardsSelect?: boolean;
    showEntitiesSelect?: boolean;
    showFilters?: boolean;
    showDashboardLogo?: boolean;
    dashboardLogoUrl?: string;
    showDashboardTimewindow?: boolean;
    showDashboardExport?: boolean;
    showUpdateDashboardImage?: boolean;
    toolbarAlwaysOpen?: boolean;
    hideToolbar?: boolean;
    titleColor?: string;
    dashboardCss?: string;
}
export interface DashboardConfiguration {
    timewindow?: Timewindow;
    settings?: DashboardSettings;
    widgets?: {
        [id: string]: Widget;
    } | Widget[];
    states?: {
        [id: string]: DashboardState;
    };
    entityAliases?: EntityAliases;
    filters?: Filters;
    [key: string]: any;
}
export interface Dashboard extends DashboardInfo {
    configuration?: DashboardConfiguration;
}
export interface HomeDashboard extends Dashboard {
    hideDashboardToolbar: boolean;
}
export interface HomeDashboardInfo {
    dashboardId: DashboardId;
    hideDashboardToolbar: boolean;
}
export declare function isPublicDashboard(dashboard: DashboardInfo): boolean;
export declare function getDashboardAssignedCustomersText(dashboard: DashboardInfo): string;
export declare function isCurrentPublicDashboardCustomer(dashboard: DashboardInfo, customerId: string): boolean;
