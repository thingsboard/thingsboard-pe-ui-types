import { AuthState } from '@core/auth/auth.models';
import { Authority } from '@shared/models/authority.enum';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { CustomMenuConfig, MenuItem } from '@shared/models/custom-menu.models';
export declare type MenuSectionType = 'link' | 'toggle';
export interface MenuReference {
    id: MenuId | string;
    pages?: Array<MenuReference>;
}
export interface MenuSection extends MenuReference {
    id: MenuId | string;
    name: string;
    fullName?: string;
    type: MenuSectionType;
    path: string;
    queryParams?: {
        [k: string]: any;
    };
    icon: string;
    pages?: Array<MenuSection>;
    opened?: boolean;
    rootOnly?: boolean;
    isCustom?: boolean;
    isNew?: boolean;
    stateId?: string;
    childStateIds?: {
        [stateId: string]: boolean;
    };
    customTranslate?: boolean;
    homeDashboardId?: string;
    homeHideDashboardToolbar?: boolean;
}
export declare const sectionPath: (section: MenuSection) => string;
export declare const filterOpenedMenuSection: (section: MenuSection, url: string, openedMenuSections: string[]) => boolean;
export interface HomeSectionReference {
    name: string;
    places: Array<MenuId>;
}
export interface HomeSection {
    name: string;
    places: Array<MenuSection>;
}
export declare enum MenuId {
    home = "home",
    tenants = "tenants",
    tenant_profiles = "tenant_profiles",
    resources = "resources",
    widget_library = "widget_library",
    widget_types = "widget_types",
    widgets_bundles = "widgets_bundles",
    images = "images",
    scada_symbols = "scada_symbols",
    resources_library = "resources_library",
    javascript_library = "javascript_library",
    notifications_center = "notifications_center",
    notification_inbox = "notification_inbox",
    notification_sent = "notification_sent",
    notification_recipients = "notification_recipients",
    notification_templates = "notification_templates",
    notification_rules = "notification_rules",
    mobile_center = "mobile_center",
    mobile_apps = "mobile_apps",
    mobile_bundles = "mobile_bundles",
    mobile_qr_code_widget = "mobile_qr_code_widget",
    settings = "settings",
    general = "general",
    mail_server = "mail_server",
    home_settings = "home_settings",
    notification_settings = "notification_settings",
    repository_settings = "repository_settings",
    auto_commit_settings = "auto_commit_settings",
    queues = "queues",
    security_settings = "security_settings",
    security_settings_general = "security_settings_general",
    two_fa = "two_fa",
    oauth2 = "oauth2",
    domains = "domains",
    clients = "clients",
    audit_log = "audit_log",
    alarms = "alarms",
    dashboards = "dashboards",
    entities = "entities",
    devices = "devices",
    assets = "assets",
    entity_views = "entity_views",
    gateways = "gateways",
    profiles = "profiles",
    device_profiles = "device_profiles",
    asset_profiles = "asset_profiles",
    customers = "customers",
    rule_chains = "rule_chains",
    edge_management = "edge_management",
    edges = "edges",
    edge_instances = "edge_instances",
    rulechain_templates = "rulechain_templates",
    features = "features",
    otaUpdates = "otaUpdates",
    version_control = "version_control",
    api_usage = "api_usage",
    white_labeling = "white_labeling",
    white_labeling_general = "white_labeling_general",
    login_white_labeling = "login_white_labeling",
    mail_templates = "mail_templates",
    custom_translation = "custom_translation",
    custom_menu = "custom_menu",
    dashboard_all = "dashboard_all",
    dashboard_groups = "dashboard_groups",
    dashboard_shared = "dashboard_shared",
    solution_templates = "solution_templates",
    device_all = "device_all",
    device_groups = "device_groups",
    device_shared = "device_shared",
    asset_all = "asset_all",
    asset_groups = "asset_groups",
    asset_shared = "asset_shared",
    entity_view_all = "entity_view_all",
    entity_view_groups = "entity_view_groups",
    entity_view_shared = "entity_view_shared",
    customer_all = "customer_all",
    customer_groups = "customer_groups",
    customer_shared = "customer_shared",
    customers_hierarchy = "customers_hierarchy",
    users = "users",
    user_all = "user_all",
    user_groups = "user_groups",
    integrations_center = "integrations_center",
    integrations = "integrations",
    converters = "converters",
    edge_all = "edge_all",
    edge_groups = "edge_groups",
    edge_shared = "edge_shared",
    integration_templates = "integration_templates",
    converter_templates = "converter_templates",
    scheduler = "scheduler",
    roles = "roles",
    self_registration = "self_registration",
    task_manager = "task_manager",
    trendz_settings = "trendz_settings",
    secrets = "secrets",
    ai_models = "ai_models",
    reporting = "reporting",
    report_templates = "report_templates",
    report_scheduling = "report_scheduling",
    reports = "reports"
}
export declare const menuSectionMap: Map<MenuId, MenuSection>;
export declare const defaultUserMenuMap: Map<Authority, MenuReference[]>;
export declare const buildUserMenu: (authState: AuthState, userPermissionsService: UserPermissionsService, customMenuConfig: CustomMenuConfig) => Array<MenuSection>;
export declare const buildUserHome: (authState: AuthState, availableMenuSections: MenuSection[]) => Array<HomeSection>;
export declare const menuItemToMenuSection: (authState: AuthState, userPermissionsService: UserPermissionsService, allowedMenuIds: Array<MenuId | string>, customStateIds: {
    [stateId: string]: boolean;
}, item: MenuItem) => MenuSection | undefined;
