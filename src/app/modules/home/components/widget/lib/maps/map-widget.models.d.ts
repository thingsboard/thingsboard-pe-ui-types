import { MapSetting } from '@shared/models/widget/maps/map.models';
import { BackgroundSettings } from '@shared/models/widget-settings.models';
import { WidgetContext } from '@home/models/widget-component.models';
import { DeepPartial } from '@shared/models/common';
import { TbMap } from '@home/components/widget/lib/maps/map';
export interface MapWidgetSettings extends MapSetting {
    background: BackgroundSettings;
    padding: string;
}
export declare const mapWidgetDefaultSettings: MapWidgetSettings;
export declare const createMap: (ctx: WidgetContext, inputSettings: DeepPartial<MapSetting>, mapElement: HTMLElement) => TbMap<MapSetting>;
