import L from 'leaflet';
import { MarkerSettings, PolygonSettings, PolylineSettings } from './map-models';
import { Datasource } from '@app/shared/models/widget.models';
export declare function createTooltip(target: L.Layer, settings: MarkerSettings | PolylineSettings | PolygonSettings, datasource: Datasource, content?: string | HTMLElement): L.Popup;
export declare function bindPopupActions(popup: L.Popup, settings: MarkerSettings | PolylineSettings | PolygonSettings, datasource: Datasource): void;
export declare function isCutPolygon(data: any): boolean;
