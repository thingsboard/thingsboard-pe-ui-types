import { ColorSettings, cssUnit, Font } from '@shared/models/widget-settings.models';
export declare enum CountCardLayout {
    column = "column",
    row = "row"
}
export declare const countCardLayouts: CountCardLayout[];
export declare const countCardLayoutTranslations: Map<CountCardLayout, string>;
export declare const alarmCountCardLayoutImages: Map<CountCardLayout, string>;
export declare const entityCountCardLayoutImages: Map<CountCardLayout, string>;
export interface CountWidgetSettings {
    layout: CountCardLayout;
    autoScale: boolean;
    showLabel: boolean;
    label: string;
    labelFont: Font;
    labelColor: ColorSettings;
    showIcon: boolean;
    icon: string;
    iconSize: number;
    iconSizeUnit: cssUnit;
    iconColor: ColorSettings;
    showIconBackground: boolean;
    iconBackgroundSize: number;
    iconBackgroundSizeUnit: cssUnit;
    iconBackgroundColor: ColorSettings;
    valueFont: Font;
    valueColor: ColorSettings;
    showChevron: boolean;
    chevronSize: number;
    chevronSizeUnit: cssUnit;
    chevronColor: string;
}
export declare const countDefaultSettings: (alarmElseEntity: boolean) => CountWidgetSettings;
