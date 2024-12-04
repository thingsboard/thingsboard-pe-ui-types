import { EntityId } from '@shared/models/id/entity-id';
import { DataKey, FormattedData, WidgetActionDescriptor, WidgetConfig } from '@shared/models/widget.models';
import { AlarmDataInfo } from '@shared/models/alarm.models';
import { EntityDataSortOrder, EntityKey } from '@shared/models/query/query.models';
import { WidgetContext } from '@home/models/widget-component.models';
import { UtilsService } from '@core/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import { EntityType } from '@shared/models/entity-type.models';
import { CompiledTbFunction, TbFunction } from '@shared/models/js-function.models';
import { Observable } from 'rxjs';
type ColumnVisibilityOptions = 'visible' | 'hidden' | 'hidden-mobile';
type ColumnSelectionOptions = 'enabled' | 'disabled';
export declare enum columnExportOptions {
    always = "always",
    onlyVisible = "onlyVisible",
    never = "never"
}
export interface TableWidgetSettings {
    enableSearch: boolean;
    enableSelectColumnDisplay: boolean;
    enableStickyAction: boolean;
    showCellActionsMenu: boolean;
    enableStickyHeader: boolean;
    displayPagination: boolean;
    defaultPageSize: number;
    useRowStyleFunction: boolean;
    rowStyleFunction?: TbFunction;
    reserveSpaceForHiddenAction?: boolean;
}
export interface TableWidgetDataKeySettings {
    customTitle?: string;
    columnWidth?: string;
    useCellStyleFunction: boolean;
    cellStyleFunction?: TbFunction;
    useCellContentFunction: boolean;
    useCellContentFunctionOnExport: boolean;
    cellContentFunction?: TbFunction;
    defaultColumnVisibility?: ColumnVisibilityOptions;
    columnSelectionToDisplay?: ColumnSelectionOptions;
    columnExportOption?: columnExportOptions;
}
export type ShowCellButtonActionFunction = (ctx: WidgetContext, data: EntityData | AlarmDataInfo | FormattedData) => boolean;
export interface TableCellButtonActionDescriptor extends WidgetActionDescriptor {
    useShowActionCellButtonFunction: boolean;
    showActionCellButtonFunction: CompiledTbFunction<ShowCellButtonActionFunction>;
}
export interface EntityData {
    id: EntityId;
    entityName: string;
    entityLabel?: string;
    entityType?: EntityType;
    actionCellButtons?: TableCellButtonActionDescriptor[];
    hasActions?: boolean;
    [key: string]: any;
}
export interface EntityColumn extends DataKey {
    def: string;
    title: string;
    sortable: boolean;
    entityKey?: EntityKey;
}
export interface DisplayColumn {
    title: string;
    def: string;
    display: boolean;
    selectable: boolean;
    includeToExport?: columnExportOptions;
}
export type CellContentFunction = (...args: any[]) => string;
export interface CellContentFunctionInfo {
    useCellContentFunction: boolean;
    useCellContentFunctionOnExport?: boolean;
    cellContentFunction?: CompiledTbFunction<CellContentFunction>;
}
export interface CellContentInfo {
    contentFunction: Observable<CellContentFunctionInfo>;
    units?: string;
    decimals?: number;
}
export type CellStyleFunction = (...args: any[]) => any;
export interface CellStyleInfo {
    useCellStyleFunction: boolean;
    cellStyleFunction?: CompiledTbFunction<CellStyleFunction>;
}
export type RowStyleFunction = (...args: any[]) => any;
export interface RowStyleInfo {
    useRowStyleFunction: boolean;
    rowStyleFunction?: CompiledTbFunction<RowStyleFunction>;
}
export declare function entityDataSortOrderFromString(strSortOrder: string, columns: EntityColumn[]): EntityDataSortOrder;
export declare function findColumnByEntityKey(key: EntityKey, columns: EntityColumn[]): EntityColumn;
export declare function findEntityKeyByColumnDef(def: string, columns: EntityColumn[]): EntityKey;
export declare function findColumn(searchProperty: string, searchValue: string, columns: EntityColumn[]): EntityColumn;
export declare function findColumnByName(name: string, columns: EntityColumn[]): EntityColumn;
export declare function findColumnByLabel(label: string, columns: EntityColumn[]): EntityColumn;
export declare function findColumnByDef(def: string, columns: EntityColumn[]): EntityColumn;
export declare function findColumnProperty(searchProperty: string, searchValue: string, columnProperty: string, columns: EntityColumn[]): string;
export declare function toEntityKey(def: string, columns: EntityColumn[]): string;
export declare function toEntityColumnDef(label: string, columns: EntityColumn[]): string;
export declare function fromEntityColumnDef(def: string, columns: EntityColumn[]): string;
export declare function toAlarmColumnDef(name: string, columns: EntityColumn[]): string;
export declare function fromAlarmColumnDef(def: string, columns: EntityColumn[]): string;
export declare function getEntityValue(entity: any, key: DataKey): any;
export declare function getAlarmValue(alarm: AlarmDataInfo, key: EntityColumn): any;
export declare function getRowStyleInfo(widgetContext: WidgetContext, settings: TableWidgetSettings, ...args: string[]): Observable<RowStyleInfo>;
export declare function getCellStyleInfo(widgetContext: WidgetContext, keySettings: TableWidgetDataKeySettings, ...args: string[]): Observable<CellStyleInfo>;
export declare function getCellContentFunctionInfo(widgetContext: WidgetContext, keySettings: TableWidgetDataKeySettings, ...args: string[]): Observable<CellContentFunctionInfo>;
export declare function getColumnWidth(keySettings: TableWidgetDataKeySettings): string;
export declare function widthStyle(width: string): any;
export declare function getColumnDefaultVisibility(keySettings: TableWidgetDataKeySettings, ctx?: WidgetContext): boolean;
export declare function getColumnSelectionAvailability(keySettings: TableWidgetDataKeySettings): boolean;
export declare function getTableCellButtonActions(widgetContext: WidgetContext): Observable<TableCellButtonActionDescriptor[]>;
export declare function checkHasActions(cellButtonActions: TableCellButtonActionDescriptor[]): boolean;
export declare function prepareTableCellButtonActions(widgetContext: WidgetContext, cellButtonActions: TableCellButtonActionDescriptor[], data: EntityData | AlarmDataInfo | FormattedData, reserveSpaceForHiddenAction?: boolean): TableCellButtonActionDescriptor[];
export declare function noDataMessage(noDataDisplayMessage: string, defaultMessage: string, utils: UtilsService, translate: TranslateService): string;
export declare function constructTableCssString(widgetConfig: WidgetConfig): string;
export declare function getHeaderTitle(dataKey: DataKey, keySettings: TableWidgetDataKeySettings, utils: UtilsService): string;
export {};
