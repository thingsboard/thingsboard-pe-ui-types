import { EntityAliasInfo } from '@shared/models/alias.models';
import { FilterInfo } from '@shared/models/query/query.models';
import { WidgetExportDefinition } from '@shared/models/widget/widget-export.models';
interface AliasFilterPair {
    alias?: EntityAliasInfo;
    filter?: FilterInfo;
}
interface MapDataLayerDsInfo extends AliasFilterPair {
    additionalDsInfo?: {
        [dsIndex: number]: AliasFilterPair;
    };
}
type ExportDataSourceInfo = {
    [dataLayerIndex: number]: MapDataLayerDsInfo;
};
interface MapDatasourcesInfo {
    trips?: ExportDataSourceInfo;
    markers?: ExportDataSourceInfo;
    polygons?: ExportDataSourceInfo;
    circles?: ExportDataSourceInfo;
    additionalDataSources?: ExportDataSourceInfo;
}
export declare const MapExportDefinition: WidgetExportDefinition<MapDatasourcesInfo>;
export {};
