import { DataLayerColorSettings, ShapeDataLayerSettings, TbMapDatasource } from '@shared/models/widget/maps/map.models';
import L from 'leaflet';
import { TbMap } from '@home/components/widget/lib/maps/map';
import { Observable } from 'rxjs';
import { FormattedData } from '@shared/models/widget.models';
import { TbLatestMapDataLayer } from '@home/components/widget/lib/maps/data-layer/latest-map-data-layer';
export type ShapePatternStorage = {
    [id: string]: {
        pattern: L.TB.Pattern;
        refCount: number;
    };
};
export interface ShapeStyleInfo {
    patternId: string;
    style: L.PathOptions;
}
export declare abstract class TbShapesDataLayer<S extends ShapeDataLayerSettings, L extends TbLatestMapDataLayer<S, L>> extends TbLatestMapDataLayer<S, L> {
    protected map: TbMap<any>;
    private shapePatternProcessor;
    private strokeColorProcessor;
    protected constructor(map: TbMap<any>, inputSettings: S);
    getShapeStyle(data: FormattedData<TbMapDatasource>, dsData: FormattedData<TbMapDatasource>[], fillPatternId: string): Observable<ShapeStyleInfo>;
    protected allColorSettings(): DataLayerColorSettings[];
    protected doSetup(): Observable<any>;
}
