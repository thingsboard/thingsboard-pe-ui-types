import { BackgroundSettings, ColorSettings, Font } from '@shared/models/widget-settings.models';
export declare enum ValueChartCardLayout {
    left = "left",
    right = "right"
}
export declare const valueCartCardLayouts: ValueChartCardLayout[];
export declare const valueChartCardLayoutTranslations: Map<ValueChartCardLayout, string>;
export declare const valueChartCardLayoutImages: Map<ValueChartCardLayout, string>;
export interface ValueChartCardWidgetSettings {
    layout: ValueChartCardLayout;
    autoScale: boolean;
    showValue: boolean;
    valueFont: Font;
    valueColor: ColorSettings;
    background: BackgroundSettings;
    padding: string;
}
export declare const valueChartCardDefaultSettings: ValueChartCardWidgetSettings;
