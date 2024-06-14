import { DataKey, Datasource, LegendPosition } from '@shared/models/widget.models';
import { BackgroundSettings, Font } from '@shared/models/widget-settings.models';
import { Renderer2 } from '@angular/core';
import { CallbackDataParams } from 'echarts/types/dist/shared';
import { ChartAnimationSettings } from '@home/components/widget/lib/chart/chart.models';
export interface LatestChartDataItem {
    id: number;
    datasource: Datasource;
    dataKey: DataKey;
    value: number;
    hasValue: boolean;
    enabled: boolean;
}
export interface LatestChartLegendItem {
    dataKey?: DataKey;
    color: string;
    label: string;
    value: string;
    hasValue: boolean;
    total?: boolean;
}
export declare enum LatestChartTooltipValueType {
    absolute = "absolute",
    percentage = "percentage"
}
export declare const latestChartTooltipValueTypes: LatestChartTooltipValueType[];
export declare const latestChartTooltipValueTypeTranslations: Map<LatestChartTooltipValueType, string>;
export interface LatestChartTooltipSettings {
    showTooltip: boolean;
    tooltipValueType: LatestChartTooltipValueType;
    tooltipValueDecimals: number;
    tooltipValueFont: Font;
    tooltipValueColor: string;
    tooltipBackgroundColor: string;
    tooltipBackgroundBlur: number;
}
export declare const latestChartTooltipDefaultSettings: LatestChartTooltipSettings;
export interface LatestChartSettings extends LatestChartTooltipSettings {
    autoScale?: boolean;
    sortSeries: boolean;
    showTotal?: boolean;
    showLegend: boolean;
    animation: ChartAnimationSettings;
}
export declare const latestChartDefaultSettings: LatestChartSettings;
export interface LatestChartWidgetSettings extends LatestChartSettings {
    legendPosition: LegendPosition;
    legendLabelFont: Font;
    legendLabelColor: string;
    legendValueFont: Font;
    legendValueColor: string;
    background: BackgroundSettings;
    padding: string;
}
export declare const latestChartWidgetDefaultSettings: LatestChartWidgetSettings;
export declare const latestChartTooltipFormatter: (renderer: Renderer2, settings: LatestChartTooltipSettings, params: CallbackDataParams, units: string, total: number, dataItems: LatestChartDataItem[]) => null | HTMLElement;
