import { Datasource } from '@shared/models/widget.models';
import { alignment, Font } from '@shared/models/widget-settings.models';
import { Insets } from '@shared/models/report.models';
import { ReportTemplateId } from '@shared/models/id/report-template-id';
import { FormProperty } from '@shared/models/dynamic-form.models';
import { DashboardReportConfig } from '@shared/models/dashboard-report.models';
import { Timewindow } from '@shared/models/time/time.models';
import { Direction } from '@shared/models/page/sort-order';
export declare enum ReportComponentType {
    HEADING = "HEADING",
    RICH_TEXT = "RICH_TEXT",
    ENTITY_TABLE = "ENTITY_TABLE",
    TIME_SERIES_TABLE = "TIME_SERIES_TABLE",
    ALARM_TABLE = "ALARM_TABLE",
    DASHBOARD = "DASHBOARD",
    IMAGE = "IMAGE",
    SUB_REPORT = "SUB_REPORT",
    DIVIDER = "DIVIDER",
    PAGE_BREAK = "PAGE_BREAK"
}
export interface ReportComponentConfig {
    type: ReportComponentType;
}
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
    COLUMN = "COLUMN"
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
