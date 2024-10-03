import { BackgroundSettings, ColorSettings, cssUnit, DateFormatSettings, Font } from '@shared/models/widget-settings.models';
export declare enum ValueCardLayout {
    square = "square",
    vertical = "vertical",
    centered = "centered",
    simplified = "simplified",
    horizontal = "horizontal",
    horizontal_reversed = "horizontal_reversed"
}
export declare const valueCardLayouts: (horizontal: boolean) => ValueCardLayout[];
export declare const valueCardLayoutTranslations: Map<ValueCardLayout, string>;
export declare const valueCardLayoutImages: Map<ValueCardLayout, string>;
export interface ValueCardWidgetSettings {
    layout: ValueCardLayout;
    autoScale: boolean;
    showLabel: boolean;
    labelFont: Font;
    labelColor: ColorSettings;
    showIcon: boolean;
    icon: string;
    iconSize: number;
    iconSizeUnit: cssUnit;
    iconColor: ColorSettings;
    valueFont: Font;
    valueColor: ColorSettings;
    showDate: boolean;
    dateFormat: DateFormatSettings;
    dateFont: Font;
    dateColor: ColorSettings;
    background: BackgroundSettings;
    padding: string;
}
export declare const valueCardDefaultSettings: (horizontal: boolean) => ValueCardWidgetSettings;
