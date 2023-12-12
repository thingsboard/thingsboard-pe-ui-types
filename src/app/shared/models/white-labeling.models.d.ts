import { ColorPalette } from '@shared/models/material.models';
import { TenantId } from '@shared/models/id/tenant-id';
import { CustomerId } from '@shared/models/id/customer-id';
export interface Favicon {
    url?: string;
}
export interface Palette {
    type: string;
    extends?: string;
    colors?: ColorPalette;
}
export interface PaletteSettings {
    primaryPalette?: Palette;
    accentPalette?: Palette;
}
export interface WhiteLabelingParams {
    logoImageUrl?: string;
    logoImageHeight?: number;
    appTitle?: string;
    favicon?: Favicon;
    paletteSettings?: PaletteSettings;
    helpLinkBaseUrl?: string;
    uiHelpBaseUrl?: string;
    enableHelpLinks?: boolean;
    showNameVersion?: boolean;
    platformName?: string;
    platformVersion?: string;
    customCss?: string;
}
export interface LoginWhiteLabelingParams extends WhiteLabelingParams {
    pageBackgroundColor?: string;
    darkForeground?: boolean;
    domainName?: string;
    adminSettingsId?: string;
    showNameBottom?: boolean;
}
export declare const defaultWLParams: WhiteLabelingParams;
export declare const defaultLoginWlParams: LoginWhiteLabelingParams;
export declare const tbPrimaryPalette: ColorPalette;
export declare const tbAccentPalette: ColorPalette;
export declare const tbLoginPrimaryPalette: ColorPalette;
export declare const tbLoginAccentPalette: ColorPalette;
export declare const mergeDefaults: <T extends WhiteLabelingParams & LoginWhiteLabelingParams>(wlParams: T, targetDefaultWlParams?: T) => T;
export declare const checkWlParams: <T extends WhiteLabelingParams & LoginWhiteLabelingParams>(whiteLabelParams: T) => T;
export declare enum WhiteLabelingType {
    LOGIN = "LOGIN",
    GENERAL = "GENERAL",
    MAIL_TEMPLATES = "MAIL_TEMPLATES"
}
export interface WhiteLabeling {
    tenantId: TenantId;
    customerId?: CustomerId;
    type: WhiteLabelingType;
    settings?: any;
    domain?: string;
}
export declare const pageByWhiteLabelingType: Map<WhiteLabelingType, string>;
