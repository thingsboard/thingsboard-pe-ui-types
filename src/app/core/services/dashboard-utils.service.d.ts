import { UtilsService } from '@core/services/utils.service';
import { TimeService } from '@core/services/time.service';
import { Dashboard, DashboardLayout, DashboardLayoutId, DashboardLayoutsInfo, DashboardState, DashboardStateLayouts, GridSettings } from '@shared/models/dashboard.models';
import { Widget } from '@app/shared/models/widget.models';
import { EntityAliasFilter } from '@app/shared/models/alias.models';
import { EntityId } from '@app/shared/models/id/entity-id';
import * as i0 from "@angular/core";
export declare class DashboardUtilsService {
    private utils;
    private timeService;
    constructor(utils: UtilsService, timeService: TimeService);
    validateAndUpdateDashboard(dashboard: Dashboard): Dashboard;
    createSingleWidgetDashboard(widget: Widget): Dashboard;
    validateAndUpdateWidget(widget: Widget): Widget;
    createDefaultLayoutData(): DashboardLayout;
    private createDefaultGridSettings;
    createDefaultLayouts(): DashboardStateLayouts;
    createDefaultState(name: string, root: boolean): DashboardState;
    createSingleEntityFilter(entityId: EntityId): EntityAliasFilter;
    private validateAndUpdateState;
    private validateAndUpdateLayout;
    setLayouts(dashboard: Dashboard, targetState: string, newLayouts: DashboardStateLayouts): void;
    getRootStateId(states: {
        [id: string]: DashboardState;
    }): string;
    getStateLayoutsData(dashboard: Dashboard, targetState: string): DashboardLayoutsInfo;
    getWidgetsArray(dashboard: Dashboard): Array<Widget>;
    addWidgetToLayout(dashboard: Dashboard, targetState: string, targetLayout: DashboardLayoutId, widget: Widget, originalColumns?: number, originalSize?: {
        sizeX: number;
        sizeY: number;
    }, row?: number, column?: number): void;
    removeWidgetFromLayout(dashboard: Dashboard, targetState: string, targetLayout: DashboardLayoutId, widgetId: string): void;
    isSingleLayoutDashboard(dashboard: Dashboard): {
        state: string;
        layout: DashboardLayoutId;
    };
    updateLayoutSettings(layout: DashboardLayout, gridSettings: GridSettings): void;
    removeUnusedWidgets(dashboard: Dashboard): void;
    private validateAndUpdateEntityAliases;
    private validateAndUpdateDeviceAlias;
    private validateAndUpdateEntityAlias;
    private validateAliasId;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardUtilsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DashboardUtilsService>;
}
