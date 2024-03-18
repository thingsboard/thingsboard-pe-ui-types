import { BackgroundSettings, ColorSettings, Font } from '@shared/models/widget-settings.models';
import { LegendPosition } from '@shared/models/widget.models';
export declare enum DoughnutLayout {
    default = "default",
    with_total = "with_total"
}
export declare const doughnutLayouts: DoughnutLayout[];
export declare const doughnutLayoutTranslations: Map<DoughnutLayout, string>;
export declare const doughnutLayoutImages: Map<DoughnutLayout, string>;
export declare const horizontalDoughnutLayoutImages: Map<DoughnutLayout, string>;
export declare enum DoughnutTooltipValueType {
    absolute = "absolute",
    percentage = "percentage"
}
export declare const doughnutTooltipValueTypes: DoughnutTooltipValueType[];
export declare const doughnutTooltipValueTypeTranslations: Map<DoughnutTooltipValueType, string>;
export interface DoughnutWidgetSettings {
    layout: DoughnutLayout;
    autoScale: boolean;
    clockwise: boolean;
    sortSeries: boolean;
    totalValueFont: Font;
    totalValueColor: ColorSettings;
    showLegend: boolean;
    legendPosition: LegendPosition;
    legendLabelFont: Font;
    legendLabelColor: string;
    legendValueFont: Font;
    legendValueColor: string;
    showTooltip: boolean;
    tooltipValueType: DoughnutTooltipValueType;
    tooltipValueDecimals: number;
    tooltipValueFont: Font;
    tooltipValueColor: string;
    tooltipBackgroundColor: string;
    tooltipBackgroundBlur: number;
    background: BackgroundSettings;
}
export declare const doughnutDefaultSettings: (horizontal: boolean) => DoughnutWidgetSettings;
