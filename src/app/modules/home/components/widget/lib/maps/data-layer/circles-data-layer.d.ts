import { CirclesDataLayerSettings, MapDataLayerType, TbCircleData, TbMapDatasource } from '@shared/models/widget/maps/map.models';
import L from 'leaflet';
import { DataKey, FormattedData } from '@shared/models/widget.models';
import { TbShapesDataLayer } from '@home/components/widget/lib/maps/data-layer/shapes-data-layer';
import { TbMap } from '@home/components/widget/lib/maps/map';
import { Observable } from 'rxjs';
import { TbLatestDataLayerItem, UnplacedMapDataItem } from '@home/components/widget/lib/maps/data-layer/latest-map-data-layer';
export declare class TbCirclesDataLayer extends TbShapesDataLayer<CirclesDataLayerSettings, TbCirclesDataLayer> {
    protected map: TbMap<any>;
    constructor(map: TbMap<any>, inputSettings: CirclesDataLayerSettings);
    dataLayerType(): MapDataLayerType;
    placeItem(item: UnplacedMapDataItem, layer: L.Layer): void;
    extractCircleCoordinates(data: FormattedData<TbMapDatasource>): TbCircleData;
    saveCircleCoordinates(data: FormattedData<TbMapDatasource>, center: L.LatLng, radius: number): Observable<TbCircleData>;
    protected getDataKeys(): DataKey[];
    protected defaultBaseSettings(map: TbMap<any>): Partial<CirclesDataLayerSettings>;
    protected doSetup(): Observable<void>;
    protected isValidLayerData(layerData: FormattedData<TbMapDatasource>): boolean;
    protected createLayerItem(data: FormattedData<TbMapDatasource>, dsData: FormattedData<TbMapDatasource>[]): TbLatestDataLayerItem<CirclesDataLayerSettings, TbCirclesDataLayer>;
}
