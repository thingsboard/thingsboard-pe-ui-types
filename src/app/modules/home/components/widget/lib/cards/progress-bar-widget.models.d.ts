import { BackgroundSettings, ColorSettings, Font } from '@shared/models/widget-settings.models';
export declare enum ProgressBarLayout {
    default = "default",
    simplified = "simplified"
}
export declare const progressBarLayouts: ProgressBarLayout[];
export declare const progressBarLayoutTranslations: Map<ProgressBarLayout, string>;
export declare const progressBarLayoutImages: Map<ProgressBarLayout, string>;
export interface ProgressBarWidgetSettings {
    layout: ProgressBarLayout;
    autoScale: boolean;
    showValue: boolean;
    valueFont: Font;
    valueColor: ColorSettings;
    showTicks: boolean;
    tickMin: number;
    tickMax: number;
    ticksFont: Font;
    ticksColor: string;
    barColor: ColorSettings;
    barBackground: string;
    background: BackgroundSettings;
    padding: string;
}
export declare const progressBarDefaultSettings: ProgressBarWidgetSettings;
