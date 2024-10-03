import { GetValueSettings } from '@shared/models/action-widget-settings.models';
import { BackgroundSettings, cssUnit, Font } from '@shared/models/widget-settings.models';
export declare enum StatusWidgetLayout {
    default = "default",
    center = "center",
    icon = "icon"
}
export declare const statusWidgetLayouts: StatusWidgetLayout[];
export declare const statusWidgetLayoutTranslations: Map<StatusWidgetLayout, string>;
export declare const statusWidgetLayoutImages: Map<StatusWidgetLayout, string>;
export interface StatusWidgetStateSettings {
    showLabel: boolean;
    label: string;
    labelFont: Font;
    showStatus: boolean;
    status: string;
    statusFont: Font;
    icon: string;
    iconSize: number;
    iconSizeUnit: cssUnit;
    primaryColor: string;
    secondaryColor: string;
    background: BackgroundSettings;
    primaryColorDisabled: string;
    secondaryColorDisabled: string;
    backgroundDisabled: BackgroundSettings;
}
export interface StatusWidgetSettings {
    initialState: GetValueSettings<boolean>;
    disabledState: GetValueSettings<boolean>;
    layout: StatusWidgetLayout;
    onState: StatusWidgetStateSettings;
    offState: StatusWidgetStateSettings;
    padding: string;
}
export declare const statusWidgetDefaultSettings: StatusWidgetSettings;
