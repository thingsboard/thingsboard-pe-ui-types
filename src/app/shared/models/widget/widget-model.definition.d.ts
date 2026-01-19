import { Datasource, Widget } from '@shared/models/widget.models';
import { Dashboard } from '@shared/models/dashboard.models';
import { EntityAliases } from '@shared/models/alias.models';
import { Filters } from '@shared/models/query/query.models';
export interface WidgetModelDefinition<T = any> {
    testWidget(widget: Widget): boolean;
    prepareExportInfo(dashboard: Dashboard, widget: Widget): T;
    updateFromExportInfo(widget: Widget, entityAliases: EntityAliases, filters: Filters, info: T): void;
    datasources(widget: Widget): Datasource[];
    hasTimewindow(widget: Widget): boolean;
    datasourcesHasAggregation(widget: Widget): boolean;
    datasourcesHasOnlyComparisonAggregation(widget: Widget): boolean;
}
export declare const findWidgetModelDefinition: (widget: Widget) => WidgetModelDefinition;
export declare const widgetHasTimewindow: (widget: Widget) => boolean;
export declare const widgetDatasourcesHasAggregation: (widget: Widget) => boolean;
export declare const widgetDatasourcesHasOnlyComparisonAggregation: (widget: Widget) => boolean;
