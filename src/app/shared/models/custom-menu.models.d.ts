import { MenuId, MenuReference } from '@core/services/menu.models';
import { BaseData } from '@shared/models/base-data';
import { CustomMenuId } from '@shared/models/id/custom-menu-id';
import { TenantId } from '@shared/models/id/tenant-id';
import { CustomerId } from '@shared/models/id/customer-id';
import { EntityInfoData, HasTenantId } from '@shared/models/entity.models';
import { Authority } from '@shared/models/authority.enum';
export declare enum CMScope {
    SYSTEM = "SYSTEM",
    TENANT = "TENANT",
    CUSTOMER = "CUSTOMER"
}
export declare const cmScopeTranslations: Map<CMScope, string>;
export declare const cmScopeToAuthority: (scope: CMScope) => Authority;
export declare enum CMAssigneeType {
    NO_ASSIGN = "NO_ASSIGN",
    ALL = "ALL",
    CUSTOMERS = "CUSTOMERS",
    USERS = "USERS"
}
export declare const cmAssigneeTypeTranslations: (assigneeType: CMAssigneeType, scope: CMScope) => string;
export interface CustomMenuInfo extends BaseData<CustomMenuId>, HasTenantId {
    tenantId?: TenantId;
    customerId?: CustomerId;
    name: string;
    scope: CMScope;
    assigneeType: CMAssigneeType;
}
export declare enum MenuItemType {
    DEFAULT = "DEFAULT",
    HOME = "HOME",
    CUSTOM = "CUSTOM"
}
export interface MenuItem {
    type?: MenuItemType;
    name?: string;
    icon?: string;
    visible?: boolean;
    pages?: MenuItem[];
    id?: MenuId;
}
export interface DefaultMenuItem extends MenuItem, MenuReference {
    id: MenuId;
    pages?: DefaultMenuItem[];
}
export declare enum HomeMenuItemType {
    DEFAULT = "DEFAULT",
    DASHBOARD = "DASHBOARD"
}
export declare const homeMenuItemTypes: HomeMenuItemType[];
export declare const homeMenuItemTypeTranslations: Map<HomeMenuItemType, string>;
export interface HomeMenuItem extends DefaultMenuItem {
    id: MenuId.home;
    homeType: HomeMenuItemType;
    dashboardId?: string;
    hideDashboardToolbar?: boolean;
}
export declare enum CMItemType {
    LINK = "LINK",
    SECTION = "SECTION"
}
export declare const cmItemTypes: CMItemType[];
export declare const cmItemTypeTranslations: Map<CMItemType, string>;
export declare enum CMItemLinkType {
    URL = "URL",
    DASHBOARD = "DASHBOARD"
}
export declare const cmLinkTypes: CMItemLinkType[];
export declare const cmLinkTypeTranslations: Map<CMItemLinkType, string>;
export interface CustomMenuItem extends MenuItem {
    name: string;
    icon: string;
    menuItemType: CMItemType;
    linkType?: CMItemLinkType;
    dashboardId?: string;
    hideDashboardToolbar?: boolean;
    url?: string;
    setAccessToken?: boolean;
    pages?: CustomMenuItem[];
}
export interface CustomMenuConfig {
    items: MenuItem[];
}
export interface CustomMenu extends CustomMenuInfo {
    config: CustomMenuConfig;
}
export interface CustomMenuDeleteResult {
    success: boolean;
    assigneeType: CMAssigneeType;
    assigneeList: EntityInfoData[];
    error?: any;
}
export declare const toCustomMenuDeleteResult: (e?: any) => CustomMenuDeleteResult;
export declare const isDefaultCustomMenuConflict: (e?: any) => boolean;
export declare const isDefaultMenuItem: (item: MenuItem) => item is DefaultMenuItem;
export declare const isHomeMenuItem: (item: MenuItem) => item is HomeMenuItem;
export declare const isCustomMenuItem: (item: MenuItem) => item is CustomMenuItem;
export declare const referenceToMenuItem: (reference: MenuReference) => DefaultMenuItem;
export declare const isDefaultMenuConfig: (config: CustomMenuConfig, scope: CMScope) => boolean;
export declare const defaultCustomMenuConfig: (scope: CMScope) => CustomMenuConfig;
export declare const afterLoadCustomMenuConfig: (config: CustomMenuConfig, scope: CMScope) => CustomMenuConfig;
export declare const beforeSaveCustomMenuConfig: (config: CustomMenuConfig, scope: CMScope) => CustomMenuConfig;
