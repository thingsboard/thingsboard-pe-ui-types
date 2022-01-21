import LeafletMap from '../leaflet-map';
import { UnitedMapSettings } from '../map-models';
import { WidgetContext } from '@home/models/widget-component.models';
export declare class OpenStreetMap extends LeafletMap {
    constructor(ctx: WidgetContext, $container: any, options: UnitedMapSettings);
}
