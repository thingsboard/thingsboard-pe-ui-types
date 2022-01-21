import { AnimationTriggerMetadata } from '@angular/animations';
import { ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import { TbPopoverComponent } from '@shared/components/popover.component';
export declare const popoverMotion: AnimationTriggerMetadata;
export declare const PopoverPlacements: readonly ["top", "topLeft", "topRight", "right", "rightTop", "rightBottom", "bottom", "bottomLeft", "bottomRight", "left", "leftTop", "leftBottom"];
declare type PopoverPlacementTuple = typeof PopoverPlacements;
export declare type PopoverPlacement = PopoverPlacementTuple[number];
export declare const POSITION_MAP: {
    [key: string]: ConnectionPositionPair;
};
export declare const DEFAULT_POPOVER_POSITIONS: ConnectionPositionPair[];
export declare function getPlacementName(position: ConnectedOverlayPositionChange): PopoverPlacement | undefined;
export interface PropertyMapping {
    [key: string]: [string, () => unknown];
}
export interface PopoverWithTrigger {
    trigger: Element;
    popoverComponent: TbPopoverComponent;
}
export {};
