import { ECharts, EChartsOption } from '@home/components/widget/lib/chart/echarts-widget.models';
import { AutoDateFormatSettings, Font, ValueSourceConfig } from '@shared/models/widget-settings.models';
import { TimeAxisBandWidthCalculator, VisualMapComponentOption, XAXisOption, YAXisOption } from 'echarts/types/dist/shared';
import { CustomSeriesOption, LineSeriesOption } from 'echarts/charts';
import { TimeAxisBaseOption, ValueAxisBaseOption } from 'echarts/types/src/coord/axisCommonTypes';
import { LabelFormatterCallback } from 'echarts';
import { BarRenderContext, BarRenderSharedContext } from '@home/components/widget/lib/chart/time-series-chart-bar.models';
import { DataKey, DataKeySettingsWithComparison, DataSet, Datasource, FormattedData, WidgetComparisonSettings } from '@shared/models/widget.models';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CartesianAxisOption } from 'echarts/types/src/coord/cartesian/AxisModel';
import { WidgetTimewindow } from '@shared/models/time/time.models';
import { UtilsService } from '@core/services/utils.service';
import { ChartAnimationSettings, ChartBarSettings, ChartFillSettings, ChartLabelPosition, ChartLineType, ChartShape } from '@home/components/widget/lib/chart/chart.models';
import { TimeSeriesChartTooltipValueFormatFunction, TimeSeriesChartTooltipWidgetSettings } from '@home/components/widget/lib/chart/time-series-chart-tooltip.models';
type TimeSeriesChartDataEntry = [number, any, number, number];
type TimeSeriesChartDataSet = {
    name: string;
    value: TimeSeriesChartDataEntry;
}[];
export declare const toTimeSeriesChartDataSet: (data: DataSet, valueConverter?: (value: any) => any) => TimeSeriesChartDataSet;
export interface TimeSeriesChartDataItem {
    id: string;
    datasource: Datasource;
    dataKey: DataKey;
    data: TimeSeriesChartDataSet;
    dataSet?: DataSet;
    enabled: boolean;
    units?: string;
    decimals?: number;
    latestData?: FormattedData;
    tooltipValueFormatFunction?: TimeSeriesChartTooltipValueFormatFunction;
    comparisonItem?: boolean;
    xAxisIndex: number;
    yAxisId: TimeSeriesChartYAxisId;
    yAxisIndex: number;
    option?: LineSeriesOption | CustomSeriesOption;
    barRenderContext?: BarRenderContext;
}
export declare const timeAxisBandWidthCalculator: TimeAxisBandWidthCalculator;
export declare const adjustTimeAxisExtentToData: (timeAxisOption: TimeAxisBaseOption, dataItems: TimeSeriesChartDataItem[], defaultMin: number, defaultMax: number) => void;
export declare enum TimeSeriesChartType {
    default = "default",
    line = "line",
    bar = "bar",
    point = "point",
    state = "state"
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
export declare enum TimeSeriesChartStateSourceType {
    constant = "constant",
    range = "range"
}
export declare const timeSeriesStateSourceTypes: TimeSeriesChartStateSourceType[];
export declare const timeSeriesStateSourceTypeTranslations: Map<TimeSeriesChartStateSourceType, string>;
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
export declare const defaultTimeSeriesChartXAxisSettings: TimeSeriesChartXAxisSettings;
export type TimeSeriesChartYAxes = {
    [id: TimeSeriesChartYAxisId]: TimeSeriesChartYAxisSettings;
};
export interface TimeSeriesChartThreshold extends ValueSourceConfig {
    yAxisId: TimeSeriesChartYAxisId;
    units?: string;
    decimals?: number;
    lineColor: string;
    lineType: ChartLineType | number | number[];
    lineWidth: number;
    startSymbol: ChartShape;
    startSymbolSize: number;
    endSymbol: ChartShape;
    endSymbolSize: number;
    showLabel: boolean;
    labelPosition: ThresholdLabelPosition;
    labelFont: Font;
    labelColor: string;
    enableLabelBackground: boolean;
    labelBackground: string;
    additionalLabelOption?: {
        [key: string]: any;
    };
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
export declare const timeSeriesChartNoAggregationBarWidthDefaultSettings: TimeSeriesChartNoAggregationBarWidthSettings;
export interface TimeSeriesChartBarWidthSettings {
    barGap: number;
    intervalGap: number;
}
export interface TimeSeriesChartVisualMapPiece {
    lt?: number;
    gt?: number;
    lte?: number;
    gte?: number;
    value?: number;
    color?: string;
}
export declare const createTimeSeriesChartVisualMapPiece: (color: string, from?: number, to?: number) => TimeSeriesChartVisualMapPiece;
export interface TimeSeriesChartVisualMapSettings {
    outOfRangeColor: string;
    pieces: TimeSeriesChartVisualMapPiece[];
}
export interface TimeSeriesChartStateSettings {
    label: string;
    value: number;
    sourceType: TimeSeriesChartStateSourceType;
    sourceValue?: any;
    sourceRangeFrom?: number;
    sourceRangeTo?: number;
}
export declare const timeSeriesChartStateValid: (state: TimeSeriesChartStateSettings) => boolean;
export declare const timeSeriesChartStateValidator: (control: AbstractControl) => ValidationErrors | null;
export interface TimeSeriesChartComparisonSettings extends WidgetComparisonSettings {
    comparisonXAxis?: TimeSeriesChartXAxisSettings;
}
export interface TimeSeriesChartGridSettings {
    show: boolean;
    backgroundColor: string;
    borderWidth: number;
    borderColor: string;
}
export declare const timeSeriesChartGridDefaultSettings: TimeSeriesChartGridSettings;
export interface TimeSeriesChartSettings extends TimeSeriesChartTooltipWidgetSettings, TimeSeriesChartComparisonSettings {
    thresholds: TimeSeriesChartThreshold[];
    darkMode: boolean;
    dataZoom: boolean;
    stack: boolean;
    grid: TimeSeriesChartGridSettings;
    yAxes: TimeSeriesChartYAxes;
    xAxis: TimeSeriesChartXAxisSettings;
    animation: ChartAnimationSettings;
    barWidthSettings: TimeSeriesChartBarWidthSettings;
    noAggregationBarWidthSettings: TimeSeriesChartNoAggregationBarWidthSettings;
    visualMapSettings?: TimeSeriesChartVisualMapSettings;
    states?: TimeSeriesChartStateSettings[];
}
export declare const timeSeriesChartDefaultSettings: TimeSeriesChartSettings;
export interface LineSeriesSettings {
    showLine: boolean;
    step: boolean;
    stepType: LineSeriesStepType;
    smooth: boolean;
    lineType: ChartLineType;
    lineWidth: number;
    showPoints: boolean;
    showPointLabel: boolean;
    pointLabelPosition: ChartLabelPosition;
    pointLabelFont: Font;
    pointLabelColor: string;
    enablePointLabelBackground: boolean;
    pointLabelBackground: string;
    pointLabelFormatter?: string | LabelFormatterCallback;
    pointShape: ChartShape;
    pointSize: number;
    fillAreaSettings: ChartFillSettings;
}
export interface TimeSeriesChartKeySettings extends DataKeySettingsWithComparison {
    yAxisId: TimeSeriesChartYAxisId;
    showInLegend: boolean;
    dataHiddenByDefault: boolean;
    type: TimeSeriesChartSeriesType;
    lineSettings: LineSeriesSettings;
    barSettings: ChartBarSettings;
    tooltipValueFormatter?: string | TimeSeriesChartTooltipValueFormatFunction;
}
export declare const timeSeriesChartKeyDefaultSettings: TimeSeriesChartKeySettings;
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
export interface TimeSeriesChartAxis {
    id: string;
    settings: TimeSeriesChartAxisSettings;
    option: CartesianAxisOption;
}
export interface TimeSeriesChartYAxis extends TimeSeriesChartAxis {
    decimals: number;
    settings: TimeSeriesChartYAxisSettings;
    option: YAXisOption & ValueAxisBaseOption;
}
export interface TimeSeriesChartXAxis extends TimeSeriesChartAxis {
    settings: TimeSeriesChartXAxisSettings;
    option: XAXisOption;
}
export declare const createTimeSeriesYAxis: (units: string, decimals: number, settings: TimeSeriesChartYAxisSettings, utils: UtilsService, darkMode: boolean) => TimeSeriesChartYAxis;
export declare const createTimeSeriesXAxis: (id: string, settings: TimeSeriesChartXAxisSettings, min: number, max: number, datePipe: DatePipe, utils: UtilsService, darkMode: boolean) => TimeSeriesChartXAxis;
export declare const createTimeSeriesVisualMapOption: (settings: TimeSeriesChartVisualMapSettings, selectedRanges: {
    [key: number]: boolean;
}) => VisualMapComponentOption;
export declare const updateXAxisTimeWindow: (option: XAXisOption, timeWindow: WidgetTimewindow) => void;
export declare const generateChartData: (dataItems: TimeSeriesChartDataItem[], thresholdItems: TimeSeriesChartThresholdItem[], stack: boolean, noAggregation: boolean, barRenderSharedContext: BarRenderSharedContext, darkMode: boolean) => Array<LineSeriesOption | CustomSeriesOption>;
export declare const calculateThresholdsOffset: (chart: ECharts, thresholdItems: TimeSeriesChartThresholdItem[], yAxisList: TimeSeriesChartYAxis[]) => [number, number];
export declare const parseThresholdData: (value: any) => TimeSeriesChartThresholdValue;
export declare const updateDarkMode: (options: EChartsOption, xAxisList: TimeSeriesChartXAxis[], yAxisList: TimeSeriesChartYAxis[], dataItems: TimeSeriesChartDataItem[], darkMode: boolean) => EChartsOption;
export {};
