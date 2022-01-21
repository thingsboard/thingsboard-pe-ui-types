import { JsonSettingsSchema } from '@shared/models/widget.models';
import { MapProviders } from '@home/components/widget/lib/maps/map-models';
export interface MapWidgetInterface {
    map?: any;
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
