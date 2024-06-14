import * as echarts from 'echarts/core';
import { DataZoomComponentOption, GridComponentOption, MarkLineComponentOption, PolarComponentOption, RadarComponentOption, TooltipComponentOption, VisualMapComponentOption } from 'echarts/components';
import { BarSeriesOption, CustomSeriesOption, LineSeriesOption, PieSeriesOption, RadarSeriesOption } from 'echarts/charts';
import Axis2D from 'echarts/types/src/coord/cartesian/Axis2D';
declare class EChartsModule {
    private initialized;
    init(): void;
}
export declare const echartsModule: EChartsModule;
export type EChartsOption = echarts.ComposeOption<TooltipComponentOption | GridComponentOption | VisualMapComponentOption | DataZoomComponentOption | MarkLineComponentOption | PolarComponentOption | RadarComponentOption | LineSeriesOption | CustomSeriesOption | BarSeriesOption | PieSeriesOption | RadarSeriesOption>;
export type ECharts = echarts.ECharts;
export declare const getAxis: (chart: ECharts, mainType: string, axisId: string) => Axis2D;
export declare const calculateAxisSize: (chart: ECharts, mainType: string, axisId: string) => number;
export declare const measureAxisNameSize: (chart: ECharts, mainType: string, axisId: string, name: string) => number;
export declare const measureThresholdOffset: (chart: ECharts, axisId: string, thresholdId: string, value: any) => [number, number];
export declare const getAxisExtent: (chart: ECharts, axisId: string) => [number, number];
export declare const getFocusedSeriesIndex: (chart: ECharts) => number;
export {};
