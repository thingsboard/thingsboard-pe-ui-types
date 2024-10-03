import { BreakpointId, Dashboard, DashboardLayoutId } from '@app/shared/models/dashboard.models';
import { AliasesInfo } from '@shared/models/alias.models';
import { Widget, WidgetPosition, WidgetSize } from '@shared/models/widget.models';
import { DashboardUtilsService } from '@core/services/dashboard-utils.service';
import { UtilsService } from '@core/services/utils.service';
import { Observable } from 'rxjs';
import { FcRuleNode } from '@shared/models/rule-node.models';
import { RuleChainService } from '@core/http/rule-chain.service';
import { RuleChainImport } from '@shared/models/rule-chain.models';
import { FiltersInfo } from '@shared/models/query/query.models';
import * as i0 from "@angular/core";
export interface WidgetItem {
    widget: Widget;
    aliasesInfo: AliasesInfo;
    filtersInfo: FiltersInfo;
    originalSize: WidgetSize;
    originalColumns: number;
}
export interface WidgetReference {
    dashboardId: string;
    sourceState: string;
    sourceLayout: DashboardLayoutId;
    widgetId: string;
    originalSize: WidgetSize;
    originalColumns: number;
    breakpoint: string;
}
export interface RuleNodeConnection {
    isInputSource: boolean;
    fromIndex: number;
    toIndex: number;
    label: string;
    labels: string[];
}
export interface RuleNodesReference {
    nodes: FcRuleNode[];
    connections: RuleNodeConnection[];
    originX?: number;
    originY?: number;
}
export declare class ItemBufferService {
    private dashboardUtils;
    private ruleChainService;
    private utils;
    private namespace;
    private delimiter;
    constructor(dashboardUtils: DashboardUtilsService, ruleChainService: RuleChainService, utils: UtilsService);
    prepareWidgetItem(dashboard: Dashboard, sourceState: string, sourceLayout: DashboardLayoutId, widget: Widget, breakpoint: BreakpointId): WidgetItem;
    copyWidget(dashboard: Dashboard, sourceState: string, sourceLayout: DashboardLayoutId, widget: Widget, breakpoint: BreakpointId): void;
    copyWidgetReference(dashboard: Dashboard, sourceState: string, sourceLayout: DashboardLayoutId, widget: Widget, breakpoint: BreakpointId): void;
    hasWidget(): boolean;
    canPasteWidgetReference(dashboard: Dashboard, state: string, layout: DashboardLayoutId, breakpoint: string): boolean;
    pasteWidget(targetDashboard: Dashboard, targetState: string, targetLayout: DashboardLayoutId, breakpoint: string, position: WidgetPosition, onAliasesUpdateFunction: () => void, onFiltersUpdateFunction: () => void): Observable<Widget>;
    pasteWidgetReference(targetDashboard: Dashboard, targetState: string, targetLayout: DashboardLayoutId, breakpoint: string, position: WidgetPosition): Observable<Widget>;
    addWidgetToDashboard(dashboard: Dashboard, targetState: string, targetLayout: DashboardLayoutId, widget: Widget, aliasesInfo: AliasesInfo, filtersInfo: FiltersInfo, onAliasesUpdateFunction: () => void, onFiltersUpdateFunction: () => void, originalColumns: number, originalSize: WidgetSize, row: number, column: number, breakpoint?: string): Observable<Dashboard>;
    copyRuleNodes(nodes: FcRuleNode[], connections: RuleNodeConnection[]): void;
    hasRuleNodes(): boolean;
    pasteRuleNodes(x: number, y: number): RuleNodesReference;
    hasRuleChainImport(): boolean;
    storeRuleChainImport(ruleChainImport: RuleChainImport): void;
    getRuleChainImport(): RuleChainImport;
    private prepareAliasInfo;
    private prepareFilterInfo;
    private prepareWidgetReference;
    private updateAliases;
    private updateFilters;
    private isEntityAliasEqual;
    private getEntityAliasId;
    private createEntityAliasName;
    private isFilterEqual;
    private getFilterId;
    private createFilterName;
    private storeSet;
    private storeGet;
    private storeHas;
    private storeRemove;
    private getNamespacedKey;
    static ɵfac: i0.ɵɵFactoryDeclaration<ItemBufferService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ItemBufferService>;
}
