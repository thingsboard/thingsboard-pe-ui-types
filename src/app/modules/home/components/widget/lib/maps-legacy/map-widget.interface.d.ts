import LeafletMap from '@home/components/widget/lib/maps-legacy/leaflet-map';
export interface MapWidgetInterface {
    map?: LeafletMap;
    resize(): void;
    update(): void;
    destroy(): void;
}
export interface MapWidgetStaticInterface {
    actionSources(): object;
}
