import * as echarts from 'echarts/core';
import { DataZoomComponentOption, GridComponentOption, MarkLineComponentOption, TooltipComponentOption, VisualMapComponentOption } from 'echarts/components';
import { BarSeriesOption, CustomSeriesOption, LineSeriesOption, PieSeriesOption } from 'echarts/charts';
import { DataKey, DataSet } from '@shared/models/widget.models';
import { Interval } from '@shared/models/time/time.models';
import { CallbackDataParams } from 'echarts/types/dist/shared';
import { Renderer2 } from '@angular/core';
import { DateFormatProcessor, DateFormatSettings, Font } from '@shared/models/widget-settings.models';
import Axis2D from 'echarts/types/src/coord/cartesian/Axis2D';
declare class EChartsModule {
    private initialized;
    init(): void;
}
export declare const echartsModule: EChartsModule;
export type EChartsOption = echarts.ComposeOption<TooltipComponentOption | GridComponentOption | VisualMapComponentOption | DataZoomComponentOption | MarkLineComponentOption | LineSeriesOption | CustomSeriesOption | BarSeriesOption | PieSeriesOption>;
export type ECharts = echarts.ECharts;
export type EChartsDataItem = [number, any, number, number];
export type NamedDataSet = {
    name: string;
    value: EChartsDataItem;
}[];
export type EChartsSeriesItem = {
    id: string;
    dataKey: DataKey;
    data: NamedDataSet;
    dataSet?: DataSet;
    enabled: boolean;
    units?: string;
    decimals?: number;
};
export declare const getXAxis: (chart: ECharts) => Axis2D;
export declare const getYAxis: (chart: ECharts, axisId: string) => Axis2D;
export declare const calculateYAxisWidth: (chart: ECharts, axisId: string) => number;
export declare const calculateXAxisHeight: (chart: ECharts) => number;
export declare const measureYAxisNameWidth: (chart: ECharts, axisId: string, name: string) => number;
export declare const measureXAxisNameHeight: (chart: ECharts, name: string) => number;
export declare const measureThresholdLabelOffset: (chart: ECharts, axisId: string, thresholdId: string, value: any) => [number, number];
export declare const getAxisExtent: (chart: ECharts, axisId: string) => [number, number];
export declare const toNamedData: (data: DataSet) => NamedDataSet;
export declare enum EChartsTooltipTrigger {
    point = "point",
    axis = "axis"
}
export declare const tooltipTriggerTranslationMap: Map<EChartsTooltipTrigger, string>;
export interface EChartsTooltipWidgetSettings {
    showTooltip: boolean;
    tooltipTrigger?: EChartsTooltipTrigger;
    tooltipValueFont: Font;
    tooltipValueColor: string;
    tooltipShowDate: boolean;
    tooltipDateInterval?: boolean;
    tooltipDateFormat: DateFormatSettings;
    tooltipDateFont: Font;
    tooltipDateColor: string;
    tooltipBackgroundColor: string;
    tooltipBackgroundBlur: number;
}
export declare const echartsTooltipFormatter: (renderer: Renderer2, tooltipDateFormat: DateFormatProcessor, settings: EChartsTooltipWidgetSettings, params: CallbackDataParams[] | CallbackDataParams, decimals: number, units: string, focusedSeriesIndex: number, series?: EChartsSeriesItem[], interval?: Interval) => null | HTMLElement;
export {};
