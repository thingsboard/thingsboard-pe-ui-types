import { BaseData, ExportableEntity } from '@shared/models/base-data';
import { ReportTemplateId } from '@shared/models/id/report-template-id';
import { TenantId } from '@shared/models/id/tenant-id';
import { CustomerId } from '@shared/models/id/customer-id';
import { EntityInfoData, HasTenantId, HasVersion } from '@shared/models/entity.models';
import { EntityId } from '@shared/models/id/entity-id';
import { EntityAlias, EntityAliases } from '@shared/models/alias.models';
import { Filter, Filters, KeyFilter } from '@shared/models/query/query.models';
import { ReportComponentConfig } from '@shared/models/report-component.models';
import { ReportId } from '@shared/models/id/report-id';
import { UserId } from '@shared/models/id/user-id';
import { PageLink } from '@shared/models/page/page-link';
import { NotificationTemplateId } from '@shared/models/id/notification-template-id';
import { SchedulerEventInfo } from '@shared/models/scheduler-event.models';
export interface Report extends BaseData<ReportId>, HasTenantId {
    tenantId?: TenantId;
    customerId?: CustomerId;
    name: string;
    format: TbReportFormat;
    userId: UserId;
}
export interface ReportInfo extends Report {
    templateInfo: EntityInfoData;
    customerTitle: string;
    userName: string;
}
export declare enum ReportTemplateType {
    REPORT = "REPORT",
    SUB_REPORT = "SUB_REPORT"
}
export declare const reportTemplateTypes: ReportTemplateType[];
export declare const reportTemplateTypeTranslationMap: Map<ReportTemplateType, string>;
export interface BaseReportTemplate extends BaseData<ReportTemplateId>, HasTenantId, HasVersion, ExportableEntity<ReportTemplateId> {
    tenantId?: TenantId;
    customerId?: CustomerId;
    name: string;
    format: TbReportFormat;
    type: ReportTemplateType;
    description?: string;
}
export interface ReportTemplateInfo extends BaseReportTemplate {
    ownerId?: EntityId;
    ownerName?: string;
}
export interface HeaderFooter {
    enabled: boolean;
    components: ReportComponentConfig[];
    firstPage?: HeaderFooter;
}
export interface ReportDataFilter {
    id: string;
    filter: string;
    keyFilters: Array<KeyFilter>;
}
export declare const entityAliasesToList: (entityAliases: EntityAliases) => EntityAlias[];
export declare const entityAliasesListToAliases: (entityAliasesList: EntityAlias[]) => EntityAliases;
export declare const filtersToReportDataFilterList: (filters: Filters) => ReportDataFilter[];
export declare const reportDataFilterListToFilters: (reportDataFilters: ReportDataFilter[]) => Filters;
export declare const reportDataFilterToFilter: (reportDataFilter: ReportDataFilter) => Filter;
export declare const filterToReportDataFilter: (filter: Filter) => ReportDataFilter;
export declare enum TbReportFormat {
    PDF = "PDF",
    CSV = "CSV"
}
export declare const reportFormats: TbReportFormat[];
export interface ReportTemplateConfig {
    format: TbReportFormat;
    namePattern: string;
    timeDataPattern?: string;
    entityAliases: EntityAlias[];
    filters: ReportDataFilter[];
    components: ReportComponentConfig[];
}
export interface ReportTemplateSettings {
    name: string;
    namePattern: string;
    timeDataPattern?: string;
    description?: string;
}
export declare enum PageSize {
    A4 = "A4",
    LETTER = "LETTER",
    LEGAL = "LEGAL",
    A5 = "A5",
    A3 = "A3",
    TABLOID = "TABLOID"
}
export declare const pageSizes: PageSize[];
export declare const paperSizeDisplayMap: Map<PageSize, string>;
export declare const paperSizeToPointsMap: Map<PageSize, [number, number]>;
export declare enum PageOrientation {
    PORTRAIT = "PORTRAIT",
    LANDSCAPE = "LANDSCAPE"
}
export declare const pageOrientations: PageOrientation[];
export declare const pageOrientationTranslationMap: Map<PageOrientation, string>;
export interface Insets {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
}
export interface PdfReportTemplateConfig extends ReportTemplateConfig {
    pageSize: PageSize;
    pageOrientation: PageOrientation;
    pageMargins: Insets;
    pageBackground?: string;
    header: HeaderFooter;
    footer: HeaderFooter;
    format: TbReportFormat.PDF;
}
export declare const isPdfReportTemplateConfig: (obj: any) => obj is PdfReportTemplateConfig;
export interface CsvReportTemplateConfig extends ReportTemplateConfig {
    format: TbReportFormat.CSV;
}
export interface PdfReportTemplateSettings extends ReportTemplateSettings {
    pageSize: PageSize;
    pageOrientation: PageOrientation;
    pageMargins: Insets;
    pageBackground?: string;
}
export interface ReportTemplate<Config extends ReportTemplateConfig = ReportTemplateConfig> extends BaseReportTemplate {
    configuration: Config;
}
export declare const toReportTemplateSettings: (reportTemplate: ReportTemplate) => ReportTemplateSettings;
export declare const updateFromReportTemplateSettings: (reportTemplate: ReportTemplate, settings: ReportTemplateSettings) => void;
export interface ReportRequest {
    reportTemplateId?: ReportTemplateId;
    reportTemplateConfig?: ReportTemplateConfig;
    userId?: string;
    timezone?: string;
    originator?: EntityId;
    targets?: Array<string>;
    notificationTemplateId?: NotificationTemplateId;
}
export interface ReportConfig {
    reportTemplateId: ReportTemplateId;
    userId: UserId;
    timezone: string;
    targets?: Array<string>;
    notificationTemplateId?: NotificationTemplateId;
}
export interface ReportTemplateFilter {
    formatList?: TbReportFormat[];
    typeList?: ReportTemplateType[];
}
export declare const reportTemplateFiltersEquals: (filter1?: ReportTemplateFilter, filter2?: ReportTemplateFilter) => boolean;
export declare class ReportTemplateQuery {
    pageLink: PageLink;
    formatList: TbReportFormat[];
    typeList: ReportTemplateType[];
    constructor(pageLink: PageLink, reportTemplateFilter: ReportTemplateFilter);
    toQuery(): string;
}
export declare const defaultPdfReportTemplateConfig: PdfReportTemplateConfig;
export declare const defaultCsvReportTemplateConfig: CsvReportTemplateConfig;
export declare const validateAndUpdateReportTemplate: (reportTemplate: ReportTemplate) => ReportTemplate;
export declare const validateAndUpdateReportComponent: (component: ReportComponentConfig) => ReportComponentConfig;
export interface ScheduledReportInfo extends SchedulerEventInfo {
    templateInfo: EntityInfoData;
    userName: string;
    customerTitle: string;
}
export interface ReportFilter {
    reportTemplateId?: ReportTemplateId;
    userId?: UserId;
}
export declare const reportFiltersEquals: (filter1?: ReportFilter, filter2?: ReportFilter) => boolean;
export declare class ReportQuery {
    pageLink: PageLink;
    reportTemplateId?: ReportTemplateId;
    userId?: UserId;
    constructor(pageLink: PageLink, reportFilter: ReportFilter);
    toQuery(): string;
}
