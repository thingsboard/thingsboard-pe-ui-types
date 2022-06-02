import L from 'leaflet';
import { WidgetCircleSettings } from '@home/components/widget/lib/maps/map-models';
import LeafletMap from '@home/components/widget/lib/maps/leaflet-map';
import { FormattedData } from '@shared/models/widget.models';
export declare class Circle {
    private map;
    private data;
    private dataSources;
    private settings;
    private onDragendListener?;
    private editing;
    private circleData;
    leafletCircle: L.Circle;
    tooltip: L.Popup;
    constructor(map: LeafletMap, data: FormattedData, dataSources: FormattedData[], settings: Partial<WidgetCircleSettings>, onDragendListener?: any, snappable?: boolean);
    private createEventListeners;
    private updateLabel;
    private updateTooltip;
    private updateCircleColor;
    updateCircle(data: FormattedData, dataSources: FormattedData[]): void;
    private createCenterPosition;
    private getFillColor;
    private getStrokeColor;
}
