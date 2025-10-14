import { Datasource, LegendConfig } from '@shared/models/widget.models';
import { alignment, ColorRange, Font } from '@shared/models/widget-settings.models';
import { Insets } from '@shared/models/report.models';
import { ReportTemplateId } from '@shared/models/id/report-template-id';
import { FormProperty } from '@shared/models/dynamic-form.models';
import { DashboardReportConfig } from '@shared/models/dashboard-report.models';
import { Timewindow } from '@shared/models/time/time.models';
import { Direction } from '@shared/models/page/sort-order';
import { LineSeriesSettings, TimeSeriesChartKeySettings, TimeSeriesChartSeriesType, TimeSeriesChartSettings, TimeSeriesChartThreshold } from '@home/components/widget/lib/chart/time-series-chart.models';
import { ChartBarSettings, ChartFillSettings, PieChartLabelPosition } from '@home/components/widget/lib/chart/chart.models';
import { BarChartWithLabelsWidgetSettings } from '@home/components/widget/lib/chart/bar-chart-with-labels-widget.models';
import { TimeSeriesChartWidgetSettings } from '@home/components/widget/lib/chart/time-series-chart-widget.models';
import { LatestChartWidgetSettings } from '@home/components/widget/lib/chart/latest-chart.models';
import { DoughnutLayout } from '@home/components/widget/lib/chart/doughnut-widget.models';
import { RangeChartWidgetSettings } from '@app/modules/home/components/widget/lib/chart/range-chart-widget.models';
export declare enum ReportComponentType {
    HEADING = "HEADING",
    RICH_TEXT = "RICH_TEXT",
    ENTITY_TABLE = "ENTITY_TABLE",
    TIME_SERIES_TABLE = "TIME_SERIES_TABLE",
    ALARM_TABLE = "ALARM_TABLE",
    TIME_SERIES_CHART = "TIME_SERIES_CHART",
    LATEST_CHART = "LATEST_CHART",
    DASHBOARD = "DASHBOARD",
    IMAGE = "IMAGE",
    SUB_REPORT = "SUB_REPORT",
    SPLIT_VIEW = "SPLIT_VIEW",
    DIVIDER = "DIVIDER",
    PAGE_BREAK = "PAGE_BREAK"
}
export declare const reportComponentTypes: ReportComponentType[];
export interface ReportComponentConfig {
    type: ReportComponentType;
    subType?: string;
}
export declare const isReportComponentConfig: (obj: any) => obj is ReportComponentConfig;
export interface DataReportComponentConfig extends ReportComponentConfig {
    dataSources?: Datasource[];
}
export interface LayoutReportComponentConfig extends ReportComponentConfig {
    background?: string;
    margins?: Insets;
    paddings?: Insets;
    borderWidth?: number;
    borderRadius?: number;
    borderColor?: string;
}
export declare const isLayoutReportComponentConfig: (obj: any) => obj is LayoutReportComponentConfig;
export interface ReportComponentLayoutSettings {
    background?: string;
    margins?: Insets;
    paddings?: Insets;
    borderWidth?: number;
    borderRadius?: number;
    borderColor?: string;
}
export declare const toReportComponentLayoutSettings: (config: LayoutReportComponentConfig) => ReportComponentLayoutSettings;
export declare const updateFromReportComponentLayoutSettings: (config: LayoutReportComponentConfig, settings: ReportComponentLayoutSettings) => void;
export interface DataWithLayoutReportComponentConfig extends DataReportComponentConfig, LayoutReportComponentConfig {
}
export declare enum ReportDataKeySettingsType {
    DEFAULT = "DEFAULT",
    COLUMN = "COLUMN",
    TIME_SERIES_CHART = "TIME_SERIES_CHART"
}
export interface ReportDataKeySettings {
    type: ReportDataKeySettingsType;
}
export interface TableReportCellSettings {
    font?: Font;
    color?: string;
    backgroundColor?: string;
    textAlignment?: alignment;
    verticalAlignment?: alignment;
}
export interface TableReportColumnSettings extends ReportDataKeySettings {
    type: ReportDataKeySettingsType.COLUMN;
    columnWidth?: string;
    header?: TableReportCellSettings;
    cell?: TableReportCellSettings;
}
export declare const TableReportColumnSettingsForm: FormProperty[];
export declare const SeverityColumnSettingsForm: FormProperty[];
export declare const TimeColumnSettingsForm: FormProperty[];
export interface HeadingReportComponentConfig extends DataWithLayoutReportComponentConfig {
    value: string;
    font?: Font;
    color?: string;
    textAlignment?: alignment;
    verticalAlignment?: alignment;
    height?: number;
    type: ReportComponentType.HEADING;
}
export interface RichTextReportComponentConfig extends DataWithLayoutReportComponentConfig {
    value: string;
    type: ReportComponentType.RICH_TEXT;
}
export interface Heading {
    text: string;
    font?: Font;
    color?: string;
    textAlignment?: alignment;
    verticalAlignment?: alignment;
    height?: number;
}
export interface TableSortOrder {
    column: string;
    direction: Direction;
}
export interface TableReportComponentConfig extends DataReportComponentConfig {
    showTableHeading: boolean;
    tableHeading: Heading;
    tableSortOrder: TableSortOrder;
}
export interface TableWithLayoutReportComponentConfig extends TableReportComponentConfig, LayoutReportComponentConfig {
}
export interface EntityTableReportComponentConfig extends TableWithLayoutReportComponentConfig {
    type: ReportComponentType.ENTITY_TABLE;
}
export interface AlarmTableReportComponentConfig extends TableWithLayoutReportComponentConfig {
    alarmSource: Datasource;
    timewindow: Timewindow;
    type: ReportComponentType.ALARM_TABLE;
}
export interface TimeseriesTableReportComponentConfig extends TableWithLayoutReportComponentConfig {
    timewindow: Timewindow;
    showTimestamp: boolean;
    timestampLabel: string;
    timestampPattern: string;
    timestampColumnSettings?: TableReportColumnSettings;
    type: ReportComponentType.TIME_SERIES_TABLE;
}
export declare const imageSourceTypes: string[];
type imageSourceTypeTuple = typeof imageSourceTypes;
export type imageSourceType = imageSourceTypeTuple[number];
export declare const imageSourceTypeTranslations: Map<string, string>;
export declare const imageWidthTypes: string[];
type imageWidthTypeTuple = typeof imageWidthTypes;
export type imageWidthType = imageWidthTypeTuple[number];
export declare const imageWidthTypeTranslations: Map<string, string>;
export declare const imageAlignments: string[];
type imageAlignmentTuple = typeof imageAlignments;
export type imageAlignment = imageAlignmentTuple[number];
export declare const imageAlignmentTranslations: Map<string, string>;
export interface BaseImageReportComponentConfig extends DataWithLayoutReportComponentConfig {
    widthType: imageWidthType;
    customWidth?: number;
    alignment: imageAlignment;
}
export interface ReportTimeSeriesChartKeySettings extends ReportDataKeySettings, Omit<TimeSeriesChartKeySettings, 'type'> {
    type: ReportDataKeySettingsType.TIME_SERIES_CHART;
    seriesType: TimeSeriesChartSeriesType;
}
export declare const toReportTimeSeriesChartKeySettings: (settings: TimeSeriesChartKeySettings) => ReportTimeSeriesChartKeySettings;
export declare const toTimeSeriesChartKeySettings: (settings: ReportTimeSeriesChartKeySettings) => TimeSeriesChartKeySettings;
export interface ReportTimeSeriesChartSettings extends TimeSeriesChartSettings {
    showTitle?: boolean;
    title?: string;
    titleFont?: Font;
    titleColor?: string;
    titleAlignment?: alignment;
    showLegend: boolean;
    legendColumnTitleFont: Font;
    legendColumnTitleColor: string;
    legendLabelFont: Font;
    legendLabelColor: string;
    legendValueFont: Font;
    legendValueColor: string;
    legendConfig: LegendConfig;
}
export declare const reportTimeSeriesChartDefaultSettings: ReportTimeSeriesChartSettings;
export declare const reportStateChartDefaultSettings: ReportTimeSeriesChartSettings;
export interface ReportBarChartWithLabelSettings extends ReportTimeSeriesChartSettings {
    showBarLabel: boolean;
    barLabelFont: Font;
    barLabelColor: string;
    showBarValue: boolean;
    barValueFont: Font;
    barValueColor: string;
    showBarBorder: boolean;
    barBorderWidth: number;
    barBorderRadius: number;
    barBackgroundSettings: ChartFillSettings;
    barUnits?: string;
    barDecimals?: number;
}
export declare const reportBarChartWithLabelsDefaultSettings: ReportBarChartWithLabelSettings;
export declare const toBarChartWithLabelsWidgetSettings: (reportBarChartWithLabelsSettings: ReportBarChartWithLabelSettings & TimeSeriesChartWidgetSettings) => BarChartWithLabelsWidgetSettings;
export interface ReportRangeChartSettings extends ReportTimeSeriesChartSettings {
    rangeColors: Array<ColorRange>;
    outOfRangeColor: string;
    showRangeThresholds: boolean;
    rangeThreshold: Partial<TimeSeriesChartThreshold>;
    fillArea: boolean;
    fillAreaOpacity: number;
    lineSettings: LineSeriesSettings;
    rangeUnits?: string;
    rangeDecimals?: number;
}
export declare const reportRangeChartDefaultSettings: ReportRangeChartSettings;
export declare const toRangeChartWidgetSettings: (reportRangeChartSettings: ReportRangeChartSettings & TimeSeriesChartWidgetSettings) => RangeChartWidgetSettings;
export declare const defaultTimeSeriesChartTimewindow: Timewindow;
export declare const defaultStateChartTimewindow: Timewindow;
export declare const defaultBarChartWithLabelsTimewindow: Timewindow;
export interface ReportLatestChartSettings extends Omit<LatestChartWidgetSettings, 'showTooltip' | 'tooltipValueType' | 'tooltipValueDecimals' | 'tooltipValueFormater' | 'tooltipValueFont' | 'tooltipValueColor' | 'tooltipBackgroundColor' | 'tooltipBackgroundBlur' | 'animation' | 'background' | 'padding'> {
    showTitle?: boolean;
    title?: string;
    titleFont?: Font;
    titleColor?: string;
    titleAlignment?: alignment;
    units?: string;
    decimals?: number;
}
export declare const reportLatestChartDefaultSettings: ReportLatestChartSettings;
export interface ReportBarChartSettings extends ReportLatestChartSettings {
    axisMin?: number;
    axisMax?: number;
    axisTickLabelFont: Font;
    axisTickLabelColor: string;
    barSettings: ChartBarSettings;
}
export declare const reportBarChartDefaultSettings: ReportBarChartSettings;
export interface ReportPieChartSettings extends ReportLatestChartSettings {
    showLabel: boolean;
    labelPosition: PieChartLabelPosition;
    labelFont: Font;
    labelColor: string;
    borderWidth: number;
    borderColor: string;
    radius: number;
    clockwise: boolean;
}
export declare const reportPieChartDefaultSettings: ReportPieChartSettings;
export interface ReportDoughnutChartSettings extends ReportLatestChartSettings {
    layout: DoughnutLayout;
    clockwise: boolean;
    totalValueFont: Font;
    totalValueColor: string;
}
export declare const reportDoughnutChartDefaultSettings: (horizontal: boolean) => ReportDoughnutChartSettings;
export interface BaseChartReportComponentConfig extends BaseImageReportComponentConfig {
    height: number;
}
export interface TimeseriesChartReportComponentConfig extends BaseChartReportComponentConfig {
    timewindow: Timewindow;
    timeSeriesChartSettings: ReportTimeSeriesChartSettings & ReportBarChartWithLabelSettings & ReportRangeChartSettings;
    type: ReportComponentType.TIME_SERIES_CHART;
}
export interface LatestChartReportComponentConfig<S extends ReportLatestChartSettings = ReportLatestChartSettings> extends BaseChartReportComponentConfig {
    latestChartSettings: S;
    type: ReportComponentType.LATEST_CHART;
}
export interface BarChartReportComponentConfig extends LatestChartReportComponentConfig<ReportBarChartSettings> {
    subType: 'latestBarChart';
}
export interface PieChartReportComponentConfig extends LatestChartReportComponentConfig<ReportPieChartSettings> {
    subType: 'pieChart';
}
export interface DoughnutChartReportComponentConfig extends LatestChartReportComponentConfig<ReportDoughnutChartSettings> {
    subType: 'doughnutChart';
}
export interface HorizontalDoughnutChartReportComponentConfig extends LatestChartReportComponentConfig<ReportDoughnutChartSettings> {
    subType: 'horizontalDoughnutChart';
}
export interface ImageReportComponentConfig extends BaseImageReportComponentConfig {
    sourceType: imageSourceType;
    imageUrl: string;
    type: ReportComponentType.IMAGE;
}
export interface DashboardReportComponentConfig extends BaseImageReportComponentConfig {
    config: Partial<DashboardReportConfig>;
    type: ReportComponentType.DASHBOARD;
}
export interface SubReportReportComponentConfig extends DataReportComponentConfig {
    templateId: ReportTemplateId;
    avoidPageBreakInside: boolean;
    type: ReportComponentType.SUB_REPORT;
}
export interface SplitViewReportComponentConfig extends LayoutReportComponentConfig {
    leftView?: ReportComponentConfig;
    rightView?: ReportComponentConfig;
    splitPosition: number;
    splitGap: number;
    leftVerticalAlignment: alignment;
    rightVerticalAlignment: alignment;
    type: ReportComponentType.SPLIT_VIEW;
}
export declare enum BorderLength {
    LONG = "LONG",
    SHORT = "SHORT"
}
export declare const borderLengths: BorderLength[];
export declare const borderLengthTranslations: Map<BorderLength, string>;
export declare enum BorderType {
    solid = "solid",
    dashed = "dashed",
    dotted = "dotted"
}
export declare const borderTypes: BorderType[];
export declare const borderTypeTranslations: Map<BorderType, string>;
export interface DividerReportComponentConfig extends LayoutReportComponentConfig {
    length: BorderLength;
    borderType: BorderType;
    widthPx: number;
    color: string;
    type: ReportComponentType.DIVIDER;
}
export interface PageBreakReportComponentConfig extends ReportComponentConfig {
    type: ReportComponentType.PAGE_BREAK;
}
export {};
