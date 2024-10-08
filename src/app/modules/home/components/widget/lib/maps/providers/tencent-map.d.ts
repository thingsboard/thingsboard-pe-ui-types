import LeafletMap from '../leaflet-map';
import { WidgetUnitedMapSettings } from '../map-models';
import { WidgetContext } from '@home/models/widget-component.models';
export declare class TencentMap extends LeafletMap {
    constructor(ctx: WidgetContext, $container: HTMLElement, options: WidgetUnitedMapSettings);
}
