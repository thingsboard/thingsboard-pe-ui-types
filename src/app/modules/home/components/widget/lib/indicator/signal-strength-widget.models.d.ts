import { BackgroundSettings, ColorSettings, DateFormatSettings, Font } from '@shared/models/widget-settings.models';
export declare enum SignalStrengthLayout {
    wifi = "wifi",
    cellular_bar = "cellular_bar"
}
export declare const signalStrengthLayouts: SignalStrengthLayout[];
export declare const signalStrengthLayoutTranslations: Map<SignalStrengthLayout, string>;
export declare const signalStrengthLayoutImages: Map<SignalStrengthLayout, string>;
export interface SignalStrengthWidgetSettings {
    layout: SignalStrengthLayout;
    showDate: boolean;
    dateFormat: DateFormatSettings;
    dateFont: Font;
    dateColor: string;
    activeBarsColor: ColorSettings;
    noSignalRssiValue: number;
    inactiveBarsColor: string;
    showTooltip: boolean;
    showTooltipValue: boolean;
    tooltipValueFont: Font;
    tooltipValueColor: string;
    showTooltipDate: boolean;
    tooltipDateFormat: DateFormatSettings;
    tooltipDateFont: Font;
    tooltipDateColor: string;
    tooltipBackgroundColor: string;
    tooltipBackgroundBlur: number;
    background: BackgroundSettings;
    padding: string;
}
export declare const signalStrengthDefaultSettings: SignalStrengthWidgetSettings;
export declare const signalBarActive: (rssi: number, index: number, minSignal: number) => boolean;
