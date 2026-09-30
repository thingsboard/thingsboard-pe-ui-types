import { FilterParamInfo } from '@shared/models/iot-hub/iot-hub-item.models';
import { MpItemVersionView } from '@shared/models/iot-hub/iot-hub-version.models';
import { IotHubApiService } from '@core/http/iot-hub-api.service';
export declare const IOT_HUB_FILTER_GROUPING_THRESHOLD = 11;
export declare const IOT_HUB_FILTER_POPULAR_LIMIT = 10;
/**
 * Primary action offered for an IoT Hub item:
 *  - `open`    — the item is built-in, the tenant already has it, so we navigate to the local copy;
 *  - `connect` — device packages are connected rather than installed;
 *  - `install` — everything else.
 * Dependent copy (button labels, dialog CTA, tooltips) is keyed by this mode, never by the verb itself.
 */
export type IotHubItemActionMode = 'open' | 'connect' | 'install';
/**
 * The `builtIn` flag is server-owned and not live on every Hub deployment yet, so an absent,
 * null or non-boolean value must read as "not built-in" instead of leaking into the UI.
 */
export declare const isBuiltInItem: (item?: MpItemVersionView | null) => boolean;
export declare const iotHubItemActionMode: (item?: MpItemVersionView | null) => IotHubItemActionMode;
/** Surface a CTA is rendered on: a catalogue card, the item detail footer, or an add-item picker. */
export type IotHubItemActionContext = 'card' | 'detail' | 'add';
/** Translation key of the primary CTA for an item on the given surface. */
export declare const iotHubItemActionLabel: (item: MpItemVersionView | null, context: IotHubItemActionContext) => string;
export interface IotHubFilterGroup {
    label: string;
    items: FilterParamInfo[];
}
export declare function filterIotHubItemsBySearch(items: FilterParamInfo[], search: string): FilterParamInfo[];
export declare function groupIotHubFilterItems(items: FilterParamInfo[], search: string): IotHubFilterGroup[];
export declare function resolveIotHubItemImageUrl(item: MpItemVersionView, api: IotHubApiService): string | null;
