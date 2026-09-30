import { BaseData } from '@shared/models/base-data';
export interface WidgetInstalledItemDescriptor {
    type: 'WIDGET';
    widgetTypeId: {
        id: string;
    };
}
export interface DashboardInstalledItemDescriptor {
    type: 'DASHBOARD';
    dashboardId: {
        id: string;
    };
}
export interface CalculatedFieldInstalledItemDescriptor {
    type: 'CALCULATED_FIELD';
    calculatedFieldId: {
        id: string;
    };
    entityId: {
        entityType: string;
        id: string;
    };
}
export interface AlarmRuleInstalledItemDescriptor {
    type: 'ALARM_RULE';
    calculatedFieldId: {
        id: string;
    };
    entityId: {
        entityType: string;
        id: string;
    };
}
export interface RuleChainInstalledItemDescriptor {
    type: 'RULE_CHAIN';
    ruleChainId: {
        id: string;
    };
}
export interface DeviceInstalledItemDescriptor {
    type: 'DEVICE';
    createdEntityIds?: {
        entityType: string;
        id: string;
    }[];
    dashboardId?: {
        id: string;
    };
    selectedInstallMethod?: string;
    installState?: Record<string, any>;
}
export interface SolutionTemplateInstalledItemDescriptor {
    type: 'SOLUTION_TEMPLATE';
    createdEntityIds: {
        entityType: string;
        id: string;
    }[];
    dashboardGroupId: {
        id: string;
    };
    dashboardId: {
        id: string;
    };
    publicId: {
        id: string;
    };
    mainDashboardPublic: boolean;
    details: string;
}
export type IotHubInstalledItemDescriptor = WidgetInstalledItemDescriptor | DashboardInstalledItemDescriptor | CalculatedFieldInstalledItemDescriptor | AlarmRuleInstalledItemDescriptor | RuleChainInstalledItemDescriptor | DeviceInstalledItemDescriptor | SolutionTemplateInstalledItemDescriptor;
export interface InstallItemVersionResult {
    success: boolean;
    errorMessage: string;
    descriptor: IotHubInstalledItemDescriptor;
}
export declare enum InstallPlanEntryStatus {
    WILL_INSTALL = "WILL_INSTALL",
    ALREADY_INSTALLED = "ALREADY_INSTALLED",
    MISSING = "MISSING"
}
export interface InstallPlanEntry {
    itemId: string;
    versionId: string;
    name: string;
    type: string;
    version: string;
    status: InstallPlanEntryStatus;
    root: boolean;
    errorMessage?: string;
}
export interface InstallPlan {
    rootVersionId: string;
    entries: InstallPlanEntry[];
}
export interface InstallPlanResult {
    success: boolean;
    rolledBack: boolean;
    errorMessage?: string;
    rootDescriptor?: IotHubInstalledItemDescriptor;
    entries: InstallPlanEntry[];
    missingItemIds: string[];
}
export interface UpdateItemVersionResult {
    success: boolean;
    entityModified: boolean;
    errorMessage: string;
    descriptor: IotHubInstalledItemDescriptor;
}
export interface ItemPublishedVersionInfo {
    itemId: string;
    publishedVersionId: string;
    publishedVersion: string;
}
export interface IotHubInstalledItem extends BaseData<{
    id: string;
}> {
    itemId: string;
    itemVersionId: string;
    itemName: string;
    itemType: string;
    version: string;
    descriptor: IotHubInstalledItemDescriptor;
}
export declare const getInstalledItemUrl: (descriptor?: IotHubInstalledItemDescriptor) => string | null;
