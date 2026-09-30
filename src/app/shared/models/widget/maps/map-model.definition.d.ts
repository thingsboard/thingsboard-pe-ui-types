import { EntityAliasInfo } from '@shared/models/alias.models';
import { FilterInfo } from '@shared/models/query/query.models';
import { MapDataLayerType } from '@shared/models/widget/maps/map.models';
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
type MapDatasourcesInfo = {
    [K in MapDataLayerType]?: ExportDataSourceInfo;
} & {
    additionalDataSources?: ExportDataSourceInfo;
};
export declare const MapModelDefinition: WidgetModelDefinition<MapDatasourcesInfo>;
export {};
