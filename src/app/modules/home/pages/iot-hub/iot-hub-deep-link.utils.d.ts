import { ItemType } from '@shared/models/iot-hub/iot-hub-item.models';
import { MpItemVersionView } from '@shared/models/iot-hub/iot-hub-version.models';
export declare function isUUID(s: string | null | undefined): s is string;
export declare function typeSegment(t: ItemType): string | undefined;
export declare function isPublished(v: MpItemVersionView): boolean;
export interface DeepLinkOpenItem {
    version: MpItemVersionView;
    preview: boolean;
}
