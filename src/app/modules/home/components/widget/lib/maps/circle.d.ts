import L from 'leaflet';
import { FormattedData, UnitedMapSettings } from '@home/components/widget/lib/maps/map-models';
import LeafletMap from '@home/components/widget/lib/maps/leaflet-map';
export declare class Circle {
    private map;
    data: FormattedData;
    dataSources: FormattedData[];
    private settings;
    private onDragendListener?;
    private editing;
    private circleData;
    leafletCircle: L.Circle;
    tooltip: L.Popup;
    constructor(map: LeafletMap, data: FormattedData, dataSources: FormattedData[], settings: UnitedMapSettings, onDragendListener?: any);
    private createEventListeners;
    private updateLabel;
    private updateTooltip;
    private updateCircleColor;
    updateCircle(data: FormattedData, dataSources: FormattedData[]): void;
    private createCenterPosition;
    private getFillColor;
    private getStrokeColor;
}
