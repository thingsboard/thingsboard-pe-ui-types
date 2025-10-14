import { ReportComponentConfig, ReportComponentType } from '@shared/models/report-component.models';
import { Type } from '@angular/core';
import { AbstractReportComponentConfig } from '@home/pages/reporting/template/components/report-component-config.component';
import { IAliasController } from '@core/api/widget-api.models';
import { EntityService } from '@core/http/entity.service';
import { TranslateService } from '@ngx-translate/core';
import { UtilsService } from '@core/services/utils.service';
import { AbstractReportComponentPreview } from '@home/pages/reporting/template/components/report-component.component';
import { EntityAliasSelectCallbacks } from '@home/components/widget/lib/settings/common/alias/entity-alias-select.component.models';
import { FilterSelectCallbacks } from '@home/components/widget/lib/settings/common/filter/filter-select.component.models';
import { DataKey } from '@shared/models/widget.models';
import { TbReportFormat } from '@shared/models/report.models';
import { CdkDragMove, CdkDragRelease, CdkDropList } from '@angular/cdk/drag-drop';
export declare enum ReportComponentLibraryGroup {
    textAndImages = "textAndImages",
    dataAndTables = "dataAndTables",
    charts = "charts",
    branding = "branding",
    reportInfoAndLayout = "reportInfoAndLayout"
}
export declare const reportComponentLibraryGroups: ReportComponentLibraryGroup[];
export declare const reportComponentLibraryGroupTranslations: Map<ReportComponentLibraryGroup, string>;
export interface ReportComponentLibraryItem<C extends ReportComponentConfig = ReportComponentConfig> {
    title: string;
    previewImage: string;
    type: ReportComponentType;
    defaultConfig: C;
}
export declare const reportComponentGroups: Map<string, string[]>;
export declare const reportComponentsLibrary: Map<string, ReportComponentLibraryItem<ReportComponentConfig>>;
export interface ReportComponentTypeData<C extends ReportComponentConfig = ReportComponentConfig> {
    title: string;
    previewComponent: Type<AbstractReportComponentPreview<C>>;
    configComponent: Type<AbstractReportComponentConfig<C>>;
    editable: boolean;
    container?: boolean;
    pageBreak?: boolean;
    preferredSettingsWidthPx?: number;
    configContext?: {
        [key: string]: any;
    };
    previewContext?: {
        [key: string]: any;
    };
}
export declare class ReportComponentTypesData {
    private reportComponentsTypeMap;
    constructor();
    registerReportComponentType(type: ReportComponentType, typeData: ReportComponentTypeData): void;
    registerReportComponentSubType(type: ReportComponentType, subType: string, typeData: ReportComponentTypeData): void;
    getReportComponentTypeData(type: ReportComponentType, subType?: string): ReportComponentTypeData;
    getReportComponentTypes(): ReportComponentType[];
}
export declare const reportComponentTypesData: ReportComponentTypesData;
export declare const reportComponentTypes: ReportComponentType[];
export declare const csvReportComponentTypes: ReportComponentType[];
export declare class ReportDragDropContext {
    dropLists: CdkDropList[];
    currentHoverDropListId?: string;
    constructor();
    register(dropList: CdkDropList): void;
    deregister(dropList: CdkDropList): void;
    dragMoved(event: CdkDragMove): void;
    dragReleased(event: CdkDragRelease): void;
}
export interface ReportComponentContext {
    translate: TranslateService;
    utils: UtilsService;
    entityService: EntityService;
    aliasController: IAliasController;
    aliasAndFilterCallbacks: EntityAliasSelectCallbacks & FilterSelectCallbacks;
    format: TbReportFormat;
    dragDropCtx: ReportDragDropContext;
}
export declare const assignReportComponent: (reportComponent: ReportComponentConfig, sourceReportComponent: ReportComponentConfig) => void;
export declare const editReportComponent: (reportComponent: ReportComponentConfig) => ReportComponentConfig;
export declare const pointsToPixels: (points: number) => number;
export type ReportVariableType = 'entityKey' | 'pageVariable';
export interface ReportVariable {
    type: ReportVariableType;
    name: string;
    dataKey?: DataKey;
}
export declare const pageVariables: ReportVariable[];
export declare const keyImage: (key: string) => string;
export declare const imagePlaceholder = "/assets/report/components/image-placeholder.svg";
export declare const isKeyVariable: (test: string) => boolean;
export declare const extractKeyFromVariable: (variable: string) => string;
