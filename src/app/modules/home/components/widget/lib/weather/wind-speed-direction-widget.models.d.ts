import { BackgroundSettings, ColorSettings, Font } from '@shared/models/widget-settings.models';
export declare enum WindSpeedDirectionLayout {
    default = "default",
    advanced = "advanced",
    simplified = "simplified"
}
export declare const windSpeedDirectionLayouts: WindSpeedDirectionLayout[];
export declare const windSpeedDirectionLayoutTranslations: Map<WindSpeedDirectionLayout, string>;
export declare const windSpeedDirectionLayoutImages: Map<WindSpeedDirectionLayout, string>;
export interface WindSpeedDirectionWidgetSettings {
    layout: WindSpeedDirectionLayout;
    centerValueFont: Font;
    centerValueColor: ColorSettings;
    ticksColor: string;
    arrowColor: string;
    directionalNamesElseDegrees: boolean;
    majorTicksColor: string;
    majorTicksFont: Font;
    minorTicksColor: string;
    minorTicksFont: Font;
    background: BackgroundSettings;
    padding: string;
}
export declare const windSpeedDirectionDefaultSettings: WindSpeedDirectionWidgetSettings;
