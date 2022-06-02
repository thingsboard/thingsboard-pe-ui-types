import L from 'leaflet';
import { ShowTooltipAction, WidgetToolipSettings } from './map-models';
import { Datasource } from '@app/shared/models/widget.models';
export declare function createTooltip(target: L.Layer, settings: Partial<WidgetToolipSettings>, datasource: Datasource, autoClose?: boolean, showTooltipAction?: ShowTooltipAction, content?: string | HTMLElement): L.Popup;
export declare function bindPopupActions(popup: L.Popup, settings: Partial<WidgetToolipSettings>, datasource: Datasource): void;
export declare function isCutPolygon(data: any): boolean;
export declare function isJSON(data: string): boolean;
