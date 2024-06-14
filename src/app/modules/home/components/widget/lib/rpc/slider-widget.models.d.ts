import { GetValueSettings, SetValueSettings } from '@shared/models/action-widget-settings.models';
import { BackgroundSettings, cssUnit, Font } from '@shared/models/widget-settings.models';
export declare enum SliderLayout {
    default = "default",
    extended = "extended",
    simplified = "simplified"
}
export declare const sliderLayouts: SliderLayout[];
export declare const sliderLayoutTranslations: Map<SliderLayout, string>;
export declare const sliderLayoutImages: Map<SliderLayout, string>;
export interface SliderWidgetSettings {
    initialState: GetValueSettings<number>;
    disabledState: GetValueSettings<boolean>;
    valueChange: SetValueSettings;
    layout: SliderLayout;
    autoScale: boolean;
    showValue: boolean;
    valueUnits: string;
    valueDecimals: number;
    valueFont: Font;
    valueColor: string;
    showTicks: boolean;
    tickMin: number;
    tickMax: number;
    ticksFont: Font;
    ticksColor: string;
    showTickMarks: boolean;
    tickMarksCount: number;
    tickMarksColor: string;
    mainColor: string;
    backgroundColor: string;
    mainColorDisabled: string;
    backgroundColorDisabled: string;
    leftIcon: string;
    leftIconSize: number;
    leftIconSizeUnit: cssUnit;
    leftIconColor: string;
    rightIcon: string;
    rightIconSize: number;
    rightIconSizeUnit: cssUnit;
    rightIconColor: string;
    background: BackgroundSettings;
    padding: string;
}
export declare const sliderWidgetDefaultSettings: SliderWidgetSettings;
