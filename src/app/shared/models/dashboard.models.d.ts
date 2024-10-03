import { BaseData, ExportableEntity, GroupEntityInfo } from '@shared/models/base-data';
import { DashboardId } from '@shared/models/id/dashboard-id';
import { TenantId } from '@shared/models/id/tenant-id';
import { ShortCustomerInfo } from '@shared/models/customer.model';
import { Widget } from './widget.models';
import { Timewindow } from '@shared/models/time/time.models';
import { EntityAliases } from './alias.models';
import { CustomerId } from '@shared/models/id/customer-id';
import { Filters } from '@shared/models/query/query.models';
import { MatDialogRef } from '@angular/material/dialog';
import { HasTenantId, HasVersion } from '@shared/models/entity.models';
export interface WidgetLayout {
    sizeX?: number;
    sizeY?: number;
    desktopHide?: boolean;
    mobileHide?: boolean;
    mobileHeight?: number;
    mobileOrder?: number;
    col?: number;
    row?: number;
    resizable?: boolean;
    preserveAspectRatio?: boolean;
}
export interface WidgetLayouts {
    [id: string]: WidgetLayout;
}
export declare enum LayoutType {
    default = "default",
    scada = "scada",
    divider = "divider"
}
export declare const layoutTypes: LayoutType[];
export declare const layoutTypeTranslationMap: Map<LayoutType, string>;
export declare enum ViewFormatType {
    grid = "grid",
    list = "list"
}
export declare const viewFormatTypes: ViewFormatType[];
export declare const viewFormatTypeTranslationMap: Map<ViewFormatType, string>;
export interface GridSettings {
    layoutType?: LayoutType;
    backgroundColor?: string;
    columns?: number;
    minColumns?: number;
    margin?: number;
    outerMargin?: boolean;
    viewFormat?: ViewFormatType;
    backgroundSizeMode?: string;
    backgroundImageUrl?: string;
    autoFillHeight?: boolean;
    rowHeight?: number;
    mobileAutoFillHeight?: boolean;
    mobileRowHeight?: number;
    mobileDisplayLayoutFirst?: boolean;
    layoutDimension?: LayoutDimension;
}
export interface DashboardLayout {
    widgets: WidgetLayouts;
    gridSettings: GridSettings;
    breakpoints?: {
        [breakpointId in BreakpointId]?: Omit<DashboardLayout, 'breakpoints'>;
    };
}
export declare type DashboardLayoutInfo = {
    [breakpointId in BreakpointId]?: BreakpointLayoutInfo;
};
export interface BreakpointLayoutInfo {
    widgetIds?: string[];
    widgetLayouts?: WidgetLayouts;
    gridSettings?: GridSettings;
}
export declare type BreakpointSystemId = 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare type BreakpointId = BreakpointSystemId | string;
export interface BreakpointInfo {
    id: BreakpointId;
    maxWidth?: number;
    minWidth?: number;
    value?: string;
}
export declare const breakpointIdTranslationMap: Map<string, string>;
export declare const breakpointIdIconMap: Map<string, string>;
export interface LayoutDimension {
    type?: LayoutDimensionType;
    fixedWidth?: number;
    fixedLayout?: DashboardLayoutId;
    leftWidthPercentage?: number;
}
export declare type DashboardLayoutId = 'main' | 'right';
export declare type LayoutDimensionType = 'percentage' | 'fixed';
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
export interface Dashboard extends BaseData<DashboardId>, HasTenantId, HasVersion, ExportableEntity<DashboardId> {
    tenantId?: TenantId;
    customerId?: CustomerId;
    title?: string;
    image?: string;
    assignedCustomers?: Array<ShortCustomerInfo>;
    mobileHide?: boolean;
    mobileOrder?: number;
    configuration?: DashboardConfiguration;
    dialogRef?: MatDialogRef<any>;
}
export type DashboardInfo = Dashboard & GroupEntityInfo<DashboardId>;
export interface HomeDashboard extends Dashboard {
    hideDashboardToolbar: boolean;
}
export interface HomeDashboardInfo {
    dashboardId: DashboardId;
    hideDashboardToolbar: boolean;
}
export declare const isPublicDashboard: (dashboard: DashboardInfo) => boolean;
export declare const getDashboardAssignedCustomersText: (dashboard: DashboardInfo) => string;
export declare const isCurrentPublicDashboardCustomer: (dashboard: DashboardInfo, customerId: string) => boolean;
