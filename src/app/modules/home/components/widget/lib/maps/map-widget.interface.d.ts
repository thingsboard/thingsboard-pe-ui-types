import LeafletMap from '@home/components/widget/lib/maps/leaflet-map';
export interface MapWidgetInterface {
    map?: LeafletMap;
    resize(): any;
    update(): any;
    destroy(): any;
}
export interface MapWidgetStaticInterface {
    actionSources(): object;
}
