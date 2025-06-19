import { EntityAliasInfo } from '@shared/models/alias.models';
import { FilterInfo } from '@shared/models/query/query.models';
import { WidgetModelDefinition } from '@shared/models/widget/widget-model.definition';
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
export declare const MapModelDefinition: WidgetModelDefinition<MapDatasourcesInfo>;
export {};
