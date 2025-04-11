import { BaseData } from '@shared/models/base-data';
import { MobileAppId } from '@shared/models/id/mobile-app-id';
import { OAuth2ClientInfo, PlatformType } from '@shared/models/oauth2.models';
import { MobileAppBundleId } from '@shared/models/id/mobile-app-bundle-id';
import { HasTenantId } from '@shared/models/entity.models';
import { MobileSelfRegistrationParams } from '@shared/models/self-register.models';
export declare const WEB_URL_REGEX: RegExp;
export interface QrCodeSettings extends HasTenantId {
    useSystemSettings: boolean;
    useDefaultApp: boolean;
    mobileAppBundleId: MobileAppBundleId;
    androidEnabled: boolean;
    iosEnabled: boolean;
    qrCodeConfig: QRCodeConfig;
    readonly googlePlayLink: string;
    readonly appStoreLink: string;
    id: {
        id: string;
    };
}
export interface QRCodeConfig {
    showOnHomePage: boolean;
    badgeEnabled: boolean;
    badgePosition: BadgePosition;
    qrCodeLabelEnabled: boolean;
    qrCodeLabel: string;
}
export declare enum BadgePosition {
    RIGHT = "RIGHT",
    LEFT = "LEFT"
}
export declare const badgePositionTranslationsMap: Map<BadgePosition, string>;
export declare enum MobileAppStatus {
    DRAFT = "DRAFT",
    PUBLISHED = "PUBLISHED",
    DEPRECATED = "DEPRECATED",
    SUSPENDED = "SUSPENDED"
}
export declare const mobileAppStatusTranslations: Map<MobileAppStatus, string>;
export interface VersionInfo {
    minVersion: string;
    minVersionReleaseNotes?: string;
    latestVersion: string;
    latestVersionReleaseNotes?: string;
}
export interface StoreInfo {
    sha256CertFingerprints?: string;
    storeLink: string;
    appId?: string;
}
export interface MobileApp extends BaseData<MobileAppId>, HasTenantId {
    pkgName: string;
    appSecret: string;
    platformType: PlatformType;
    status: MobileAppStatus;
    versionInfo: VersionInfo;
    storeInfo: StoreInfo;
}
declare enum MobileMenuPath {
    HOME = "HOME",
    ASSETS = "ASSETS",
    DEVICES = "DEVICES",
    DEVICE_LIST = "DEVICE_LIST",
    ALARMS = "ALARMS",
    DASHBOARDS = "DASHBOARDS",
    DASHBOARD = "DASHBOARD",
    AUDIT_LOGS = "AUDIT_LOGS",
    CUSTOMERS = "CUSTOMERS",
    NOTIFICATIONS = "NOTIFICATIONS"
}
export declare enum MobilePageType {
    DEFAULT = "DEFAULT",
    CUSTOM = "CUSTOM",
    DASHBOARD = "DASHBOARD",
    WEB_VIEW = "WEB_VIEW"
}
export declare const mobilePageTypeTranslations: Map<MobilePageType, string>;
export interface MobilePage {
    label?: string;
    icon?: string;
    type: MobilePageType;
    visible: boolean;
}
export interface DefaultMobilePage extends MobilePage {
    id: MobileMenuPath;
}
export interface CustomMobilePage extends MobilePage {
    dashboardId?: string;
    url?: string;
    path?: string;
}
export interface MobileLayoutConfig {
    pages: MobilePage[];
}
export interface MobileAppBundle extends Omit<BaseData<MobileAppBundleId>, 'label'>, HasTenantId {
    title?: string;
    description?: string;
    androidAppId?: MobileAppId;
    iosAppId?: MobileAppId;
    layoutConfig?: MobileLayoutConfig;
    selfRegistrationParams?: MobileSelfRegistrationParams;
    oauth2Enabled: boolean;
}
export interface MobileAppBundleInfo extends MobileAppBundle {
    androidPkgName: string;
    iosPkgName: string;
    androidPkg?: {
        name: string;
        id: MobileAppId;
    };
    iosPkg?: {
        name: string;
        id: MobileAppId;
    };
    oauth2ClientInfos?: Array<OAuth2ClientInfo>;
    qrCodeEnabled: boolean;
}
export declare const hideDefaultMenuItems: MobileMenuPath[];
export declare const getDefaultMobileMenuItem: () => DefaultMobilePage[];
export declare const isDefaultMobileMenuItem: (item: MobilePage) => item is DefaultMobilePage;
export declare const isDefaultMobilePagesConfig: (items: MobilePage[]) => boolean;
export declare const mobileMenuDividers: Map<number, string>;
export declare const defaultMobilePageMap: Map<MobileMenuPath, Omit<DefaultMobilePage, "type" | "visible">>;
export {};
