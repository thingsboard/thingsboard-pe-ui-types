import { JsonSettingsSchema } from '@shared/models/widget.models';
import { MapProviders } from '@home/components/widget/lib/maps/map-models';
import LeafletMap from '@home/components/widget/lib/maps/leaflet-map';
export interface MapWidgetInterface {
    map?: LeafletMap;
    resize(): any;
    update(): any;
    destroy(): any;
}
export interface MapWidgetStaticInterface {
    settingsSchema(mapProvider?: MapProviders, drawRoutes?: boolean): JsonSettingsSchema;
    getProvidersSchema(mapProvider?: MapProviders, ignoreImageMap?: boolean): JsonSettingsSchema;
    dataKeySettingsSchema(): object;
    actionSources(): object;
}
