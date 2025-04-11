import { DataLayerTooltipSettings, TbMapDatasource } from '@shared/models/widget/maps/map.models';
import { TbMap } from '@home/components/widget/lib/maps/map';
import { FormattedData } from '@shared/models/widget.models';
import L from 'leaflet';
import { DataLayerPatternProcessor } from '@home/components/widget/lib/maps/data-layer/map-data-layer';
export declare const createTooltip: (map: TbMap<any>, layer: L.Layer, settings: DataLayerTooltipSettings, data: FormattedData<TbMapDatasource>, canOpen: () => boolean) => L.Popup;
export declare const updateTooltip: (map: TbMap<any>, tooltip: L.Popup, settings: DataLayerTooltipSettings, processor: DataLayerPatternProcessor, data: FormattedData<TbMapDatasource>, dsData: FormattedData<TbMapDatasource>[]) => void;
