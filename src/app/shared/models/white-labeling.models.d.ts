import { ColorPalette } from '@shared/models/material.models';
import { SafeUrl } from '@angular/platform-browser';
export interface Favicon {
    url?: string;
    type?: string;
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
    logoImageSafeUrl?: SafeUrl;
    logoImageChecksum?: string;
    logoImageHeight?: number;
    appTitle?: string;
    favicon?: Favicon;
    faviconChecksum?: string;
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
export declare function mergeDefaults<T extends WhiteLabelingParams & LoginWhiteLabelingParams>(wlParams: T, targetDefaultWlParams?: T): T;
export declare function checkWlParams<T extends WhiteLabelingParams & LoginWhiteLabelingParams>(whiteLabelParams: T): T;
