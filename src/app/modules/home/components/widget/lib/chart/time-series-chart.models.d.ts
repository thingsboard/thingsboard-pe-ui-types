import { ECharts, EChartsOption, EChartsSeriesItem, EChartsTooltipWidgetSettings } from '@home/components/widget/lib/chart/echarts-widget.models';
import { AutoDateFormatSettings, Font } from '@shared/models/widget-settings.models';
import { XAXisOption, YAXisOption } from 'echarts/types/dist/shared';
import { CustomSeriesOption, LineSeriesOption } from 'echarts/charts';
import { ValueAxisBaseOption } from 'echarts/types/src/coord/axisCommonTypes';
import { BarRenderContext, BarRenderSharedContext } from '@home/components/widget/lib/chart/time-series-chart-bar.models';
import { DataKey } from '@shared/models/widget.models';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { DatePipe } from '@angular/common';
export declare enum TimeSeriesChartType {
    default = "default",
    line = "line",
    bar = "bar",
    point = "point"
}
export declare const timeSeriesChartTypeTranslations: Map<TimeSeriesChartType, string>;
export declare enum AxisPosition {
    left = "left",
    right = "right",
    top = "top",
    bottom = "bottom"
}
export declare const timeSeriesAxisPositions: AxisPosition[];
export declare const timeSeriesAxisPositionTranslations: Map<AxisPosition, string>;
export declare enum TimeSeriesChartShape {
    emptyCircle = "emptyCircle",
    circle = "circle",
    rect = "rect",
    roundRect = "roundRect",
    triangle = "triangle",
    diamond = "diamond",
    pin = "pin",
    arrow = "arrow",
    none = "none"
}
export declare const timeSeriesChartShapes: TimeSeriesChartShape[];
export declare const timeSeriesChartShapeTranslations: Map<TimeSeriesChartShape, string>;
export declare enum TimeSeriesChartLineType {
    solid = "solid",
    dashed = "dashed",
    dotted = "dotted"
}
export declare const timeSeriesLineTypes: TimeSeriesChartLineType[];
export declare const timeSeriesLineTypeTranslations: Map<TimeSeriesChartLineType, string>;
export declare enum ThresholdLabelPosition {
    start = "start",
    middle = "middle",
    end = "end",
    insideStart = "insideStart",
    insideStartTop = "insideStartTop",
    insideStartBottom = "insideStartBottom",
    insideMiddle = "insideMiddle",
    insideMiddleTop = "insideMiddleTop",
    insideMiddleBottom = "insideMiddleBottom",
    insideEnd = "insideEnd",
    insideEndTop = "insideEndTop",
    insideEndBottom = "insideEndBottom"
}
export declare const timeSeriesThresholdLabelPositions: ThresholdLabelPosition[];
export declare const timeSeriesThresholdLabelPositionTranslations: Map<ThresholdLabelPosition, string>;
export declare enum TimeSeriesChartThresholdType {
    constant = "constant",
    latestKey = "latestKey",
    entity = "entity"
}
export declare const timeSeriesThresholdTypes: TimeSeriesChartThresholdType[];
export declare const timeSeriesThresholdTypeTranslations: Map<TimeSeriesChartThresholdType, string>;
export declare enum SeriesFillType {
    none = "none",
    opacity = "opacity",
    gradient = "gradient"
}
export declare const seriesFillTypes: SeriesFillType[];
export declare const seriesFillTypeTranslations: Map<SeriesFillType, string>;
export declare enum SeriesLabelPosition {
    top = "top",
    bottom = "bottom"
}
export declare const seriesLabelPositions: SeriesLabelPosition[];
export declare const seriesLabelPositionTranslations: Map<SeriesLabelPosition, string>;
export declare enum LineSeriesStepType {
    start = "start",
    middle = "middle",
    end = "end"
}
export declare const lineSeriesStepTypes: LineSeriesStepType[];
export declare const lineSeriesStepTypeTranslations: Map<LineSeriesStepType, string>;
export declare enum TimeSeriesChartSeriesType {
    line = "line",
    bar = "bar"
}
export declare const timeSeriesChartSeriesTypes: TimeSeriesChartSeriesType[];
export declare const timeSeriesChartSeriesTypeTranslations: Map<TimeSeriesChartSeriesType, string>;
export declare const timeSeriesChartSeriesTypeIcons: Map<TimeSeriesChartSeriesType, string>;
export interface TimeSeriesChartAxisSettings {
    show: boolean;
    label?: string;
    labelFont?: Font;
    labelColor?: string;
    position: AxisPosition;
    showTickLabels: boolean;
    tickLabelFont: Font;
    tickLabelColor: string;
    showTicks: boolean;
    ticksColor: string;
    showLine: boolean;
    lineColor: string;
    showSplitLines: boolean;
    splitLinesColor: string;
}
export interface TimeSeriesChartXAxisSettings extends TimeSeriesChartAxisSettings {
    ticksFormat: AutoDateFormatSettings;
}
export declare const defaultXAxisTicksFormat: AutoDateFormatSettings;
export type TimeSeriesChartYAxisId = 'default' | string;
export type TimeSeriesChartTicksGenerator = (extent?: number[], interval?: number, niceTickExtent?: number[], intervalPrecision?: number) => {
    value: number;
}[];
export type TimeSeriesChartTicksFormatter = (value: any) => string;
export interface TimeSeriesChartYAxisSettings extends TimeSeriesChartAxisSettings {
    id?: TimeSeriesChartYAxisId;
    order?: number;
    units?: string;
    decimals?: number;
    interval?: number;
    splitNumber?: number;
    min?: number | string;
    max?: number | string;
    ticksGenerator?: TimeSeriesChartTicksGenerator | string;
    ticksFormatter?: TimeSeriesChartTicksFormatter | string;
}
export declare const timeSeriesChartYAxisValid: (axis: TimeSeriesChartYAxisSettings) => boolean;
export declare const timeSeriesChartYAxisValidator: (control: AbstractControl) => ValidationErrors | null;
export declare const getNextTimeSeriesYAxisId: (axes: TimeSeriesChartYAxisSettings[]) => TimeSeriesChartYAxisId;
export declare const defaultTimeSeriesChartYAxisSettings: TimeSeriesChartYAxisSettings;
export type TimeSeriesChartYAxes = {
    [id: TimeSeriesChartYAxisId]: TimeSeriesChartYAxisSettings;
};
export interface TimeSeriesChartThreshold {
    type: TimeSeriesChartThresholdType;
    value?: number;
    latestKey?: string;
    latestKeyType?: DataKeyType.attribute | DataKeyType.timeseries;
    entityAlias?: string;
    entityKey?: string;
    entityKeyType?: DataKeyType.attribute | DataKeyType.timeseries;
    yAxisId: TimeSeriesChartYAxisId;
    units?: string;
    decimals?: number;
    lineColor: string;
    lineType: TimeSeriesChartLineType;
    lineWidth: number;
    startSymbol: TimeSeriesChartShape;
    startSymbolSize: number;
    endSymbol: TimeSeriesChartShape;
    endSymbolSize: number;
    showLabel: boolean;
    labelPosition: ThresholdLabelPosition;
    labelFont: Font;
    labelColor: string;
}
export declare const timeSeriesChartThresholdValid: (threshold: TimeSeriesChartThreshold) => boolean;
export declare const timeSeriesChartThresholdValidator: (control: AbstractControl) => ValidationErrors | null;
export declare const timeSeriesChartThresholdDefaultSettings: TimeSeriesChartThreshold;
export declare enum TimeSeriesChartNoAggregationBarWidthStrategy {
    group = "group",
    separate = "separate"
}
export declare const timeSeriesChartNoAggregationBarWidthStrategies: TimeSeriesChartNoAggregationBarWidthStrategy[];
export declare const timeSeriesChartNoAggregationBarWidthStrategyTranslations: Map<TimeSeriesChartNoAggregationBarWidthStrategy, string>;
export interface TimeSeriesChartBarWidth {
    relative?: boolean;
    relativeWidth?: number;
    absoluteWidth?: number;
}
export interface TimeSeriesChartNoAggregationBarWidthSettings {
    strategy: TimeSeriesChartNoAggregationBarWidthStrategy;
    groupWidth?: TimeSeriesChartBarWidth;
    barWidth?: TimeSeriesChartBarWidth;
}
export declare enum TimeSeriesChartAnimationEasing {
    linear = "linear",
    quadraticIn = "quadraticIn",
    quadraticOut = "quadraticOut",
    quadraticInOut = "quadraticInOut",
    cubicIn = "cubicIn",
    cubicOut = "cubicOut",
    cubicInOut = "cubicInOut",
    quarticIn = "quarticIn",
    quarticOut = "quarticOut",
    quarticInOut = "quarticInOut",
    quinticIn = "quinticIn",
    quinticOut = "quinticOut",
    quinticInOut = "quinticInOut",
    sinusoidalIn = "sinusoidalIn",
    sinusoidalOut = "sinusoidalOut",
    sinusoidalInOut = "sinusoidalInOut",
    exponentialIn = "exponentialIn",
    exponentialOut = "exponentialOut",
    exponentialInOut = "exponentialInOut",
    circularIn = "circularIn",
    circularOut = "circularOut",
    circularInOut = "circularInOut",
    elasticIn = "elasticIn",
    elasticOut = "elasticOut",
    elasticInOut = "elasticInOut",
    backIn = "backIn",
    backOut = "backOut",
    backInOut = "backInOut",
    bounceIn = "bounceIn",
    bounceOut = "bounceOut",
    bounceInOut = "bounceInOut"
}
export declare const timeSeriesChartAnimationEasings: TimeSeriesChartAnimationEasing[];
export interface TimeSeriesChartAnimationSettings {
    animation: boolean;
    animationThreshold: number;
    animationDuration: number;
    animationEasing: TimeSeriesChartAnimationEasing;
    animationDelay: number;
    animationDurationUpdate: number;
    animationEasingUpdate: TimeSeriesChartAnimationEasing;
    animationDelayUpdate: number;
}
export interface TimeSeriesChartSettings extends EChartsTooltipWidgetSettings {
    thresholds: TimeSeriesChartThreshold[];
    darkMode: boolean;
    dataZoom: boolean;
    stack: boolean;
    yAxes: TimeSeriesChartYAxes;
    xAxis: TimeSeriesChartXAxisSettings;
    animation: TimeSeriesChartAnimationSettings;
    noAggregationBarWidthSettings: TimeSeriesChartNoAggregationBarWidthSettings;
}
export declare const timeSeriesChartDefaultSettings: TimeSeriesChartSettings;
export interface SeriesFillSettings {
    type: SeriesFillType;
    opacity: number;
    gradient: {
        start: number;
        end: number;
    };
}
export interface LineSeriesSettings {
    showLine: boolean;
    step: boolean;
    stepType: LineSeriesStepType;
    smooth: boolean;
    lineType: TimeSeriesChartLineType;
    lineWidth: number;
    showPoints: boolean;
    showPointLabel: boolean;
    pointLabelPosition: SeriesLabelPosition;
    pointLabelFont: Font;
    pointLabelColor: string;
    pointShape: TimeSeriesChartShape;
    pointSize: number;
    fillAreaSettings: SeriesFillSettings;
}
export interface BarSeriesSettings {
    showBorder: boolean;
    borderWidth: number;
    borderRadius: number;
    showLabel: boolean;
    labelPosition: SeriesLabelPosition;
    labelFont: Font;
    labelColor: string;
    backgroundSettings: SeriesFillSettings;
}
export interface TimeSeriesChartKeySettings {
    yAxisId: TimeSeriesChartYAxisId;
    showInLegend: boolean;
    dataHiddenByDefault: boolean;
    type: TimeSeriesChartSeriesType;
    lineSettings: LineSeriesSettings;
    barSettings: BarSeriesSettings;
}
export declare const timeSeriesChartKeyDefaultSettings: TimeSeriesChartKeySettings;
export interface TimeSeriesChartDataItem extends EChartsSeriesItem {
    yAxisId: TimeSeriesChartYAxisId;
    yAxisIndex: number;
    option?: LineSeriesOption | CustomSeriesOption;
    barRenderContext?: BarRenderContext;
}
type TimeSeriesChartThresholdValue = number | string | (number | string)[];
export interface TimeSeriesChartThresholdItem {
    id: string;
    yAxisId: TimeSeriesChartYAxisId;
    yAxisIndex: number;
    latestDataKey?: DataKey;
    units?: string;
    decimals?: number;
    value: TimeSeriesChartThresholdValue;
    settings: TimeSeriesChartThreshold;
    option?: LineSeriesOption;
}
export interface TimeSeriesChartYAxis {
    id: string;
    decimals: number;
    settings: TimeSeriesChartYAxisSettings;
    option: YAXisOption & ValueAxisBaseOption;
}
export declare const createTimeSeriesYAxis: (units: string, decimals: number, settings: TimeSeriesChartYAxisSettings, darkMode: boolean) => TimeSeriesChartYAxis;
export declare const createTimeSeriesXAxisOption: (settings: TimeSeriesChartXAxisSettings, min: number, max: number, datePipe: DatePipe, darkMode: boolean) => XAXisOption;
export declare const generateChartData: (dataItems: TimeSeriesChartDataItem[], thresholdItems: TimeSeriesChartThresholdItem[], stack: boolean, noAggregation: boolean, barRenderSharedContext: BarRenderSharedContext, darkMode: boolean) => Array<LineSeriesOption | CustomSeriesOption>;
export declare const calculateThresholdsOffset: (chart: ECharts, thresholdItems: TimeSeriesChartThresholdItem[], yAxisList: TimeSeriesChartYAxis[]) => [number, number];
export declare const parseThresholdData: (value: any) => TimeSeriesChartThresholdValue;
export declare const updateDarkMode: (options: EChartsOption, settings: TimeSeriesChartSettings, yAxisList: TimeSeriesChartYAxis[], dataItems: TimeSeriesChartDataItem[], thresholdDataItems: TimeSeriesChartThresholdItem[], darkMode: boolean) => EChartsOption;
export {};
